import React,{ useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoBarzanitas from "../../img/LogoBarzanitas.png";
import { Context } from "../store/appContext";
import { jwtDecode as jwt_decode }  from "jwt-decode";
import barzanitas from "../../img/barzanitas.png";
import "../../styles/navbar.css";
import "../../styles/color.css";


export const Navbar = () => {
   const { actions,store } = useContext(Context);
  
   const navigate = useNavigate();
  const handleLogout = () => {
    console.log("funciona");
    let logged =  actions.logout();
  if(!logged){
    console.log("No");
     navigate("/");
  }  
    
  };


 
  return (
    <nav className="navbar sticky-top  color2">
      <div className="container-fluid" >     
        <Link to="/" className="navbar-brand">
          <img src={barzanitas} alt="Logo de Barzanitas" className="d-inline-block align-text-top img-fluid"  />          
        </Link>
        <div className="d-flex justify-content-end">
          {store.authDoctor ?
              <Link to="/datos/doctores" className="btn btn-info m-3 h-75">
                Mi Cuenta
              </Link>
              :
              <Link to="/login/doctores" className="btn btn-outline-info m-3 h-75">
                Soy Doctor
              </Link>
                }
                { store.authUsuario ?
              <Link to="/datos/usuarios" className="btn btn-light m-3 h-75">
                Mi Cuenta
              </Link>
              :
              <Link to="/login/usuarios" className="btn btn-outline-light m-3 h-75">
                Soy Cliente
              </Link>
              }
              {store.authUsuario || store.authDoctor? (<button onClick={handleLogout} className="btn btn-danger m-3 h-75">
                Cerrar Sesión
              </button>  ): null}
              <a className=" dropdown-toggle m-3 color-text1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{hover: "color-text1"}}>
                <i className="fa fa-bars fa-2x"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end fs-5">
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
        </div>
      </div>      
    </nav>
  );
};