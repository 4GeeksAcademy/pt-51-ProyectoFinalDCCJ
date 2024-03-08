import React from "react";
import PropTypes from "prop-types";
import "../../styles/color.css";

const VistaHomeEspecialidades = (props) => {
  return (
        <div className=" p-2">
          <div className="card text-center mb-3 rounded-3" style={{width: "26rem" , height: "200px"}}>
            <div className="card-body color3 rounded-3">
              <h5 className="card-title color-text1">{props.nombre}</h5>
              <p className="card-text text-center color-text1">{props.descripcion}</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
          {/* <div className="card m-3 w-100 color2" style={{ Width: "500px", height: "200px" }}>
            
              
                <div className="card mb-3 mx-5" >
                
                    <h5 className="card-title text-center color1">{props.nombre}</h5>
                    <p className="card-title text-center ">{props.descripcion}</p>
                  
                </div>
              
            
          </div> */}
        </div>
  );
};

VistaHomeEspecialidades.propTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  // Url_imagen: PropTypes.string,
};

export default VistaHomeEspecialidades;
