
import { Outlet } from "react-router-dom"
import { HeaderPriv } from "./HeaderPriv"

export const PrivateLayout = () => {
  return (
    <>
      {/* LAYOUT */}
      <HeaderPriv />

      {/* Contenido Principal */}
      <section className='layout__content'>
        <Outlet />
      </section>
    </>
  )
}

