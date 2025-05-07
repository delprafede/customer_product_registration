import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-slate-800 text-white py-10">
        <h1 className=" container mx-auto text-4xl font-extrabold max-w-6xl">Administrador de Productos</h1>
      </header>
   <main className="container mx-auto mt-10 max-w-6xl p-10 bg-white rounded-md shadow-md">
    
      <Outlet />
   </main>
    </>
  );
};

export default Layout;
