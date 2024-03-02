import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const InfoDoctores = (props) => {

    const [searchParams] = useSearchParams()

    console.log(searchParams.get(""));


   
    return (
        <div className="w-100 p-2">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-6 col-md-4">
                        <img src={props.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.nombre} </h5>
                            <p className="card-text">{props.apellido}</p>
                            <p className="card-text">{props.url_Calendly}</p>
                            <p className="card-text">{props.email}</p>
                            <p className="card-text"><small className="text-body-secondary">{props.telefono}</small></p>
                            {/* <Link to={`/fichadoctor?${props.url_Calendly}`}>
                                <button type="button" className="btn btn-primary">Pedir Cita</button>
                            </Link> */}
                        </div>
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
    url_Calendly: PropTypes.string

};
export default InfoDoctores;