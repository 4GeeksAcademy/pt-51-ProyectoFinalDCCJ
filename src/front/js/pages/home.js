import React, { useState, useEffect, useContext } from "react";
import VistaHomeDoctores from "../component/vistaHomeDoctores";
import VistaHomeEspecialidades from "../component/vistaHomeEspecialidades";
import { Context } from "../store/appContext";
import Hospital1 from "../../img/Hospital1.jpg";
import clinica1 from "../../img/clinica1.jpg";
import clinica2 from "../../img/clinica2.jpg";
import clinica3 from "../../img/clinica3.jpg";
import clinica7 from "../../img/clinica7.jpg";
import clinica5 from "../../img/clinica5.jpg";
import "../../styles/home.css";
import DatosUsuarios from "../component/datosUsuarios";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.DoctoresHome();
    actions.EspecialidadesHome();
  }, []);

  const showDoctores = store.Doctores ? store.Doctores.slice(0, 3) : [];
  const showEspecialidades = store.Especialidades ? store.Especialidades.slice(0, 3) : [];

  return (
   <div className="completo"> 
    <div className="container">
      <div className="text-center mt-5">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Hospital1} className="d-block w-100 img-fluid mx-auto" alt="Hospital 1" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={clinica2} className="d-block w-100 img-fluid mx-auto" alt="Clinica 2" />
            </div>
            <div className="carousel-item">
              <img src={clinica7} className="d-block w-100 img-fluid mx-auto" alt="Clinica 3" />
            </div>
            <div className="carousel-item">
              <img src={clinica5} className="d-block w-100 img-fluid mx-auto" alt="Clinica 3" />
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="col-12">
        <ul className="flex-nowrap d-flex flex-row list-unstyled gap-1 px-0 mx-auto">
          {showDoctores.map(item => (
            <li key={item.id} className="col-4 px-0 w-auto my-2">
              <VistaHomeDoctores nombre={item.nombre} apellido={item.apellido} imagen={item.Url_imagen} />
            </li>
          ))}
        </ul>
      </div>

      {/* <div>
        <p className="font-weight-bold display-4 me-5">Clínica</p>
        <img src={clinica1} className="img-fluid w-80 mx-auto" alt="clinica" />
      </div> */}

      <div className="col-12">
        <ul className="flex-nowrap d-flex flex-row list-unstyled gap-1 px-0 mx-auto">
          {showEspecialidades.map(item => (
            <li key={item.id} className="col-4 px-0 w-auto my-2">
              <VistaHomeEspecialidades nombre={item.nombre} descripcion={item.descripcion} imagen={item.Url_imagen} />
            </li>
          ))}
        </ul>
      </div>
    </div> 
  </div> 
  );
};

			


