import { Outlet } from "react-router-dom";
import { HeaderPriv } from "./HeaderPriv";
import { Sidebar } from "./Sidebar";

export const PrivateLayout = () => {
  return (
    <>
      {/* Cavecera navegacion */}
      <HeaderPriv />

      {/* Contenido Principal */}
      <section className="layout__content">
        <Outlet />
      </section>
      {/* Barra lateral*/}
      <Sidebar />
    </>
  );
};
