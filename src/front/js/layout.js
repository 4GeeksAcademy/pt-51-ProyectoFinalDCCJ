import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import Login from "./pages/login";

import Usuarios from "./component/loginDoctores"; // Corregido el nombre del componente
// import Doctores from "./component/loginUsuarios"; // Corregido el nombre del componente
import Contactanos from "./component/contactanos";
import Especialidades from "./pages/especialidades";
import Registrarse from "./pages/registrarse";
import Doctores from "./pages/doctores";
import Empresa from "./pages/empresa";
import VistaFichaDoctor from "./pages/vistaFichaDoctor";


const Layout = () => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Login />} path="/login/:role" />
                        <Route element={<Especialidades />} path="/especialidades" />
                        <Route element={<Doctores />} path="/doctores" />
                        <Route element={<Empresa />} path="/empresa" />
                        <Route element={<Contactanos />} path="/contactanos" />
                        <Route element={<Registrarse />} path="/registro/:role" />
                        <Route element={<VistaFichaDoctor />} path="/fichadoctor" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);