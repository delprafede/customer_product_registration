import { useFetcher, useNavigate } from "react-router-dom";
import type { GetProducts } from "../types";
import { formatCurrency } from "../utility";
import { useAppStore } from "../store/useAppStore";

export const DetailsProducts = (product: GetProducts) => {
  const isAvailable = product.available;
  const fetcher = useFetcher();
  const navigate = useNavigate();

  const deleteProduct = useAppStore((state) => state.deleteProduct);

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800 text-center">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-sm text-gray-800">
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={product.id}
            className={`${
              isAvailable ? "text-green-600" : "text-red-600"
            } rounded-lg p-2 font-bold uppercase text-sm transition-colors w-full border border-black cursor-pointer`}
          >
            {isAvailable ? "Disponible" : "No Disponible"}
          </button>
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-700 transition-colors curdsor-pointer"
          >
            Editar
          </button>
          <button
            onClick={() => {
              deleteProduct(product.id);
              const timer = setTimeout(() => {
                navigate("/");
              }, 2000);
              return () => clearTimeout(timer);
            }}
            className="bg-red-600 text-white p-2 rounded-md w-full hover:bg-red-700 transition-colors cursor-pointer"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DetailsProducts;
