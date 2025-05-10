import { Link } from "react-router-dom";
import type { GetProducts } from "../types";
import { formatCurrency } from "../utility";




export const DetailsProducts = (product: GetProducts) => {

    const isAvailable = product.available ;
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        {isAvailable ? "Disponible" : "No Disponible"}
      </td>
      <td className="p-3 text-lg text-gray-800 "></td>
    </tr>
  );
};

export default DetailsProducts;
