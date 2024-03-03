import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/infoDoctores.css";

const InfoDoctores = (props) => {
    return (
        <div>
            <img src={props.imagen} className="img-fluid rounded-start ps-5" alt="..." />
    

        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="mt-3 pe-5  table table-stripe table-hover table-primary border-dark table-bordere align-center">
                        <thead>
                            <tr className="">
                                <th>Nombre</th>
                                <th>{props.nombre}</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th>Apellido</th>
                                <th>{props.apellido}</th>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{props.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">DNI</th>
                                <td colSpan="2">{props.dni}</td>
                            </tr>
                            <tr>
                                <th scope="row">Teléfono</th>
                                <td colSpan="2">{props.telefono}</td>
                            </tr>
                            <tr>

                                <th scope="row">url_Calendly</th>
                                 
                                <td colSpan="2">{props.url_Calendly}</td>
                                


   
//     return (
//         <div className="w-100 p-2">
//             <div className="card mb-3">
//                 <div className="row g-0">
//                     <div className="col-6 col-md-4">
//                         <img src={props.Url_imagen} className="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title">{props.nombre} </h5>
//                             <p className="card-text">{props.apellido}</p>
//                             <p className="card-text">{props.url_Calendly}</p>
//                             <p className="card-text">{props.email}</p>
//                             <p className="card-text"><small className="text-body-secondary">{props.telefono}</small></p>
//                             {/* <Link to={`/fichadoctor?${props.url_Calendly}`}>
//                                 <button type="button" className="btn btn-primary">Pedir Cita</button>
//                             </Link> */}
//                         </div>
//                     </div>
// =======
                            </tr>
                            
                            
                                <th className="table-primary" scope="row">Pinche en el enlace para ver sus citas</th>
                                <Link to = "/fichadoctor">
                                <td colSpan="2">{props.url_Calendly}</td>
                                </Link>
                           
                                
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </div>
    );
};

InfoDoctores.propTypes = {
    nombre: PropTypes.string,
    email: PropTypes.string,
    apellido: PropTypes.string,
    telefono: PropTypes.number,
    dni: PropTypes.string,
    Url_imagen: PropTypes.string,
    url_Calendly: PropTypes.string,
};

export default InfoDoctores;