import React from "react";
import PropTypes from "prop-types";

const VistaHomeEspecialidades = (props) => {
    console.log(props); 
  return (
    <div className="w-75 mx-auto p-2">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            {props.Url_imagen ? (
              <img src={props.Url_imagen} className="img-fluid rounded-start" alt={`Imagen de ${props.nombre}`} />
            ) : (
              <span>No hay imagen disponible</span>
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.nombre}</h5>
              <p className="card-text">Descripción: {props.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VistaHomeEspecialidades.propTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  Url_imagen: PropTypes.string,
};

export default VistaHomeEspecialidades;