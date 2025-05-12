import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../api/products";
import DetailsProducts from "../components/DetailsProducts";
import type { GetProducts } from "../types";

// Esta es la función de carga que se ejecutará cuando se cargue la ruta
// Obtendrá los productos de la API y los devolverá al componente.
export const loader = async () => {
  const products = await getProducts();
  return products;
};

const Products = () => {
  // useLoaderData es un hook que se utiliza para acceder a los datos devueltos por la función de carga
  const products = useLoaderData() as GetProducts[];


  return (
    <>
      <div className="flex justify-between">
        <h2 className=" text-4xl font-extrabold text-slate-500 ">Productos</h2>
        <Link
          to="/products/new"
          className="bg-blue-600 text-white p-3 rounded-md shadow-sm font-bold uppercase text-sm hover:bg-blue-700 transition-colors"
        >
          Agregar Productos
        </Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: GetProducts) => (
              <DetailsProducts key={product.id} {...product} />
            ))}
          
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
