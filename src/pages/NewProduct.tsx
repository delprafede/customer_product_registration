import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";


  const NewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>();
  

  const navigate = useNavigate();
  const addProduct = useAppStore((state) => state.addProduct);

  type InputData = {
    name: string;
    price: number;
  };
  const onSubmit = handleSubmit((data) => {
    addProduct(data);
    navigate("/");
    
  });

  return (
    <>
      <div className="flex justify-between">
        <h2 className=" text-4xl font-extrabold text-slate-500 ">
          Registrar Productos
        </h2>
        <Link
          to="/"
          className="bg-blue-600 text-white p-3 rounded-md shadow-sm font-bold uppercase text-sm hover:bg-blue-700 transition-colors"
        >
          Volver a productos
        </Link>
      </div>
      <div>
        <form onSubmit={onSubmit} className="mt-10">
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="name">
              Nombre Producto:
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Producto"
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre del producto es obligatorio",
                },
                minLength: {
                  value: 3,
                  message:
                    "El nombre del producto debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 30,
                  message:
                    "El nombre del producto no puede tener más de 30 caracteres",
                },
              })}
            />
          </div>
          {errors.name && (
            <div className="bg-red-200 text-red-600 p-2 mb-4 rounded-md">
              {errors.name.message}
            </div>
          )}
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="price">
              Precio:
            </label>
            <input
              id="price"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Precio Producto. ej. 200, 300"
              {...register("price", {
                required: {
                  value: true,
                  message: "El precio del producto es obligatorio",
                },
                min: {
                  value: 0,
                  message: "El precio no puede ser menor a 0",
                },
              })}
            />
            {errors.price && (
              <div className="bg-red-200 text-red-600 p-2 mb-4 rounded-md">
                {errors.price.message}
              </div>
            )}
          </div>
          <input
            type="submit"
            className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
            value="Registrar Producto"
          />
        </form>
      </div>
    </>
  );
};

export default NewProduct;
