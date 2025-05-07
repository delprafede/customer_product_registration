import { Link } from "react-router-dom"


const Products = () => {
  return (
    <div className="flex justify-between">
      <h2 className=" text-4xl font-extrabold text-slate-500 ">Productos</h2>
      <Link
      to="/products/new"
      className="bg-blue-600 text-white p-3 rounded-md shadow-sm font-bold uppercase text-sm hover:bg-blue-700 transition-colors"
      >Agregar Productos</Link>
    </div>
  )
}

export default Products
