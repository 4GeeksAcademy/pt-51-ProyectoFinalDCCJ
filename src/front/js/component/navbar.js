import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import LogoBarzanitas from "../../img/LogoBarzanitas.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { actions } = useContext(Context);

  const handleLogout = () => {
    actions.Logout();
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={LogoBarzanitas} alt="Logo de Barzanitas" className="logo-img" />
          <span className="navbar-text ms-2">Barzanitas</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/login/doctores" className="btn btn-primary me-3">
                Soy Doctor
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/usuarios" className="btn btn-success me-3">
                Soy Cliente
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" onClick={handleLogout} className="btn btn-danger me-5">
                Cerrar Sesión
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bars fa-2x"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-3 fs-5">
                <li>
                  <Link to="/especialidades" className="dropdown-item fs-5 py-3" href="#">
                    Especialidades
                  </Link>
                </li>
                <li>
                  <Link to="/doctores" className="dropdown-item fs-5 py-3" href="#">
                    Doctores
                  </Link>
                </li>
                <li>
                  <Link to="/empresa" className="dropdown-item fs-5 py-3" href="#">
                    La Empresa
                  </Link>
                </li>
                <li>
                    <Link to="/contactanos" className="dropdown-item fs-5 py-3" href="#">
                        Contáctanos
                    </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};