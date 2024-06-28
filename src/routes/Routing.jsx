import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../components/layout/public/PublicLayout";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Register";
import { Feed } from "../components/publication/Feed";
import { Error404 } from "../components/layout/Error404";
import { AuthProvider } from "../context/AuthProvider";

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Cargamos los componentes de la ruta pública en rutas anidadas*/}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Register />} />
          </Route>

          {/* Cargamos los componentes de la ruta privada  en rutas anidadas*/}
          <Route path="/rsocial" element={<PrivateLayout />}>
            <Route index element={<Feed />} />
            <Route path="feed" element={<Feed />} />
          </Route>

          {/* Configuramos la ruta para el error 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
