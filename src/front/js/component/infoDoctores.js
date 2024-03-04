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
                                

                            </tr>
                            
                            
                                <th className="table-primary" scope="row">Pinche en el enlace para ver sus citas</th>
                                <Link to = {`/fichadoctor/${props.url_Calendly}`}>calendly
                                {/* <td colSpan="2">{props.url_Calendly}</td> */}
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