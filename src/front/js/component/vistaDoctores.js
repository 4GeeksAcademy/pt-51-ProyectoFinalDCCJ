import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { PopupButton } from "react-calendly";

const VistaDoctores = (props) => {
    const { store } = useContext(Context);

    // Verifica si hay un token almacenado
    const isUserAuthenticated = !!localStorage.getItem("token");

    return (
        <div className="w-100 p-2">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-6 col-md-4">
                        <img src={props.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.nombre}</h5>
                            <p className="card-text">{props.apellido}</p>
                            <p className="card-text">{props.url_Calendly}</p>
                            <p className="card-text">{props.email}</p>
                            <p className="card-text">{props.especialidad}</p>
                            <p className="card-text">
                                <small className="text-body-secondary">{props.telefono}</small>
                            </p>
                            {isUserAuthenticated ? (
                                <Link to={`/fichadoctor/${props.url_Calendly}`}>Pedir Cita</Link>
                            ) : (
                                <>
                                <span><strong>INICIA SESIÓN PARA PEDIR CITA</strong></span>
                                <Link to="/login/usuarios">
                                        <button className="btn btn-primary ms-3">Iniciar Sesión</button>
                                </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

VistaDoctores.propTypes = {
    nombre: PropTypes.string,
    email: PropTypes.string,
    apellido: PropTypes.string,
    especialidad: PropTypes.string,
    telefono: PropTypes.number,
    dni: PropTypes.string,
    Url_imagen: PropTypes.string,
    url_Calendly: PropTypes.string,
};

export default VistaDoctores;
    


   
//     return (
        
//         <div className="w-100 p-2">
//             <div className="card mb-3">
//                 <div className="row g-0">
//                     <div className="col-6 col-md-4">
//                         <img src={props.imagen} className="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title">{props.nombre} </h5>
//                             <p className="card-text">{props.apellido}</p>
//                             <p className="card-text">{props.url_Calendly}</p>
//                             <p className="card-text">{props.email}</p>
//                             <p className="card-text">{props.especialidad}</p>
//                             <p className="card-text"><small className="text-body-secondary">{props.telefono}</small></p>
//                             <Link to={`/fichadoctor/${props.url_Calendly}`}>Pedir Cita
//                                 {/* <button type="button" className="btn btn-primary"></button> */}
//                             </Link>
//                             {/* {createPortal(
//                             <PopupButton
//                             url="https://calendly.com/diegoavila87/citas"
                                
//                                 // react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//                                 // specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                
//                             rootElement={document.getElementById("root")}
//                              text="Click here to schedule!"
//                             />)} */}
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// VistaDoctores.propTypes = {
//     nombre: PropTypes.string,
//     email: PropTypes.string,
//     apellido: PropTypes.string,
//     especialidad: PropTypes.string,
//     telefono: PropTypes.number,
//     dni: PropTypes.string,
//     Url_imagen: PropTypes.string,
//     url_Calendly: PropTypes.string

// };
// export default VistaDoctores;