import React from "react";
import PropTypes from "prop-types";

const VistaHomeDoctores = (props) => {
  console.log(props); 
  return (
    <div className="card mb-3 w-75 mx-auto p-2" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          {props.imagen ? (
            <img src={props.imagen} className="img-fluid rounded-start" alt={`Foto de ${props.nombre}`} />
          ) : (
            <span>No hay imagen disponible</span>
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text"></p>
            <p className="card-text"></p>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

VistaHomeDoctores.propTypes = {
  nombre: PropTypes.string,
  imagen: PropTypes.string,
};

export default VistaHomeDoctores;