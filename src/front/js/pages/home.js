import React, { useState, useEffect, useContext } from "react";
import VistaHomeDoctores from "../component/vistaHomeDoctores";
import VistaHomeEspecialidades from "../component/vistaHomeEspecialidades";
import { Context } from "../store/appContext";
import Hospital1 from "../../img/Hospital1.jpg";
import "../../styles/home.css";
import clinica1 from "../../img/clinica1.jpg";



export const Home = () => {
 

  const { store, actions } = useContext(Context);

  
  useEffect(() => {
    actions.DoctoresHome();
    actions.EspecialidadesHome();
  }, []);
  

  //Verificar si Doctores y Especialidades están definidos
  const showDoctores = store.Doctores ? store.Doctores.slice(0, 3) : [];
  const showEspecialidades = store.Especialidades ? store.Especialidades.slice(0, 3) : [];
 

  return (
    <div className="text-center mt-5">
   
      <div>
        <img src={Hospital1} className="img-fluid w-80" alt="Hospital" />
      </div>

      <div className="col-12">
        <ul className="flex-nowrap d-flex flex-row list-unstyled gap-1 px-0 mx-auto">
          {showDoctores.map(item => (
            <li key={item.id} className="col-4 px-0 w-auto my-2">
              <VistaHomeDoctores nombre={item.nombre} imagen={item.Url_imagen}  />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-weight-bold display-4 me-5">Clínica</p>
        <img src={clinica1} className="img-fluid w-80" alt="clinica" />
      </div>

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
  );
};

			


