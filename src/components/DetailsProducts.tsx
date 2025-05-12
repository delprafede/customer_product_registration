import { useNavigate } from "react-router-dom";
import type { GetProducts } from "../types";
import { formatCurrency } from "../utility";

export const DetailsProducts = (product: GetProducts) => {
  const isAvailable = product.available;
  const navigate = useNavigate();

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        {isAvailable ? "Disponible" : "No Disponible"}
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-blue-600 text-white p-2 rounded-md"
          >
            Editar
          </button>
          <button className="bg-red-600 text-white p-2 rounded-md">
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DetailsProducts;
