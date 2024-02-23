import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/cardEspecialidades.scss"
import PropTypes from "prop-types";

const CardEspecialidades = props => {
    return (
<article className="postcard light blue">
                    <img className="postcard__img" src={props.url} alt="Image Title" />
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title blue">{props.titulo}</h1>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">{props.descripcion}</div>
                        <div >
                            <button type="button" className="btn btn-outline-secondary rounded-pill px-4 mt-3"><strong>Pedir Cita</strong></button>
                        </div>
                    </div>
                </article>

       
    );
};
CardEspecialidades.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    informacion: PropTypes.string,
};
export default CardEspecialidades


{/* <div className="w-75 mx-auto p-2">
<div className="card mb-3" style={{"maxWidth" : "540px"}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src={props.url} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
</div> */}
