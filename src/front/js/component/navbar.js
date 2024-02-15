import React from "react";
import { Link } from "react-router-dom";
import LogoBarzanitas from "../../img/LogoBarzanitas.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={LogoBarzanitas} alt="Logo de Barzanitas" className="logo-img"></img>
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
              <button type="button" className="btn btn-primary me-3">
                Soy Cliente
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-success me-3">
                Soy Doctor
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-danger me-5">
                Cerrar Sesión
              </button>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bars fa-2x"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-3 fs-5">
                <li>
                  <a className="dropdown-item fs-5 py-3" href="#">
                    Especialidades
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-5 py-3" href="#">
                    Doctores
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-5 py-3" href="#">
                    La empresa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-5 py-3" href="#">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};