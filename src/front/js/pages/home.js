import React, { useState, useEffect, useContext } from "react";
import VistaHomeDoctores from "../component/vistaDoctores";
import VistaHomeEspecialidades from "../component/vistaHomeEspecialidades";
import { Context } from "../store/appContext";
import Hospital1 from "../../img/Hospital1.jpg";
import "../../styles/home.css";
import clinica1 from "../../img/clinica1.jpg";


export const Home = () => {
 

  const { store, actions } = useContext(Context);

  console.log(store);
  useEffect(() => {
    actions.DoctoresHome();
    actions.EspecialidadesHome();
  }, []);
  

  // Verificar si Doctores y Especialidades están definidos
  const doctoresToShow = store.HomeDoctores ? store.HomeDoctores.slice(0, 3) : [];
  const especialidadesToShow = store.HomeEspecialidades ? store.HomeEspecialidades.slice(0, 3) : [];
 

  return (
    <div className="text-center mt-5">
      <div>
        <img src={Hospital1} className="img-fluid w-80" alt="Hospital" />
      </div>

      <div className="col-12">
        <ul className="flex-nowrap d-flex flex-row list-unstyled gap-1 px-0 mx-auto">
          {doctoresToShow.map(item => (
            <li key={item.id} className="col-4 px-0 w-auto my-2">
              <VistaHomeDoctores nombre={item.nombre} imagen={item.imagen}  />
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
          {especialidadesToShow.map(item => (
            <li key={item.id} className="col-4 px-0 w-auto my-2">
              <VistaHomeEspecialidades nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Home;