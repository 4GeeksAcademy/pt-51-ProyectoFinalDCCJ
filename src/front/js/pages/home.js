import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import Hospital1 from "../../img/Hospital1.jpg";
import "../../styles/home.css";
import Doctor1 from "../../img/Doctor1.jpg";
import Doctor3 from "../../img/Doctor3.png";
import clinica1 from "../../img/clinica1.jpg";
import medico1 from "../../img/medico1.jpg";
import pediatria from "../../img/pediatria.jpg";
import medicinaInterna from "../../img/medicinaInterna.jpg";
import Nutriología from "../../img/Nutriología.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);
      

  return (
    <div className="text-center mt-5">
      <div>
        <img src={Hospital1} className="img-fluid w-80" alt="Hospital" />
      </div>

      <div className="text-center mt-5">
        <p className="font-weight-bold display-4">Doctores</p>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 mb-4">
            <div className="card text-center w-50 mx-auto">
              <img src={Doctor1} className="card-img-top img-fluid" alt="Doctor1" />
              <div className="card-body">
                <h5 className="card-title">Doctor 1</h5>
                <p className="card-text">Información sobre el Doctor 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center w-50 mx-auto">
              <img src={medico1} className="card-img-top img-fluid" alt="Doctor2" />
              <div className="card-body">
                <h5 className="card-title">Doctor 2</h5>
                <p className="card-text">Información sobre el Doctor 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center w-50 mx-auto">
              <img src={Doctor3} className="card-img-top img-fluid" alt="Doctor3" />
              <div className="card-body">
                <h5 className="card-title">Doctor 3</h5>
                <p className="card-text">Información sobre el Doctor 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-weight-bold display-4 me-5">Clínica</p>
        <img src={clinica1} className="img-fluid w-80" alt="clinica" />
      </div>

      <div className="text-center mt-5">
        <p className="font-weight-bold display-4">Especialidades</p>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 mb-4">
            <div className="card text-center w-50 mx-auto">
              <img src={pediatria} className="card-img-top img-fluid" alt="Pediatría" />
              <div className="card-body">
                <h5 className="card-title">Pediatría</h5>
                <p className="card-text">La atención médica de bebés, niños y adolescentes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center w-50 mx-auto">
              <img src={medicinaInterna} className="card-img-top img-fluid" alt="Medicina Interna" />
              <div className="card-body">
                <h5 className="card-title">Medicina interna</h5>
                <p className="card-text">Atiende los problemas de salud en pacientes adultos.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center w-50 mx-auto">
              <img src={Nutriología} className="card-img-top img-fluid" alt="Nutriología" />
              <div className="card-body">
                <h5 className="card-title">Nutriología</h5>
                <p className="card-text">Es la ciencia que estudia el proceso de alimentación.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};