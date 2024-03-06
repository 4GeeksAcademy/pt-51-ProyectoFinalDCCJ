import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import "../../styles/color.css";

const VistaHomeDoctores = (props) => {
  return (
    <div className="container mt-3 ms-3">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="card mx-2" style={{  marginLeft: "50px" , maxWidth: "800px" }}>
            <div className="row g-0">
              <div className="col-md-6">
                {props.imagen ? (
                  <img src={props.imagen} className="img-fluid rounded-start" alt={`Foto de ${props.nombre}`} />
                ) : (
                  <span>No hay imagen disponible</span>
                )}
              </div>
              <div className="col-md-6 d-flex align-items-center text-center">
                <div className="card-body">
                  <h5 className="card-title text-dark">{props.nombre}</h5>
                  <p className="card-title text-dark">{props.apellido}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VistaHomeDoctores.propTypes = {
  nombre: PropTypes.string,
  Url_imagen: PropTypes.string,
  apellido: PropTypes.string,
};

export default VistaHomeDoctores;


