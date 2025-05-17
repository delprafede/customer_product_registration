// import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import {
  Link,
  type LoaderFunctionArgs,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";

import { getProductId } from "../api/products";
import { useAppStore } from "../store/useAppStore";
import { toBoolean } from "../utility";

//me cominico directamente con la api.products
export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id !== undefined) {
    const product = await getProductId(Number(params.id));
    if (!product) {
      return redirect("/");
    }
    return product;
  }
};
const availabilityOptions = [
  { name: "Disponible", value: true },
  { name: "No Disponible", value: false },
];

const EditProducts = () => {
  const navigate = useNavigate();

  type InputDataEdit = {
    name: string;
    price: number;
    id: number;
    available: boolean;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputDataEdit>();

  const product = useLoaderData();

  const editProduct = useAppStore((state) => state.editProduct);

  const onSubmit = handleSubmit((data) => {
    editProduct(product.id, {
      name: data.name,
      price: +data.price,
      available: toBoolean(data.available.toString()),
    });
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="flex justify-between">
        <h2 className=" text-4xl font-extrabold text-slate-500 ">
          Editar Productos
        </h2>
        <Link
          to="/"
          className="bg-blue-600 text-white p-3 rounded-md shadow-sm font-bold uppercase text-sm hover:bg-blue-700 transition-colors"
        >
          Volver a productos
        </Link>
      </div>
      <div>
        <form className="mt-10" onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="name">
              Nombre Producto:
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Producto"
              defaultValue={product.name}
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
                    "El nombre del producto no puede tener más de 60 caracteres",
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
              defaultValue={product.price}
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

          <div className="mb-4">
            <label className="text-gray-800" htmlFor="availability">
              Disponibilidad:
            </label>
            <select
              id="availability"
              className="mt-2 block w-full p-3 bg-gray-50"
              defaultValue={product.available.toString()}
              {...register("available", {
                required: {
                  value: true,
                  message: "La disponibilidad del producto es obligatoria",
                },
              })}
            >
              {availabilityOptions.map((option) => (
                <option key={option.name} value={option.value.toString()}>
                  {option.name}
                </option>
              ))}
            </select>
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

export default EditProducts;
