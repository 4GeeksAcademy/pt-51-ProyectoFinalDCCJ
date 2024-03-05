import React from "react";
import PropTypes from "prop-types";

const VistaHomeEspecialidades = (props) => {
  return (
    <div className="w-75 mx-auto p-2">
      <div className="card mb-3 mx-5" style={{ marginLeft: "75px" ,maxWidth: "500px", height: "200px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">{props.nombre}</h5>
          <p className="card-title text-center">{props.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

VistaHomeEspecialidades.propTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  // Url_imagen: PropTypes.string,
};

export default VistaHomeEspecialidades;
