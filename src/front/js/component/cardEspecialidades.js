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
    titulo: PropTypes.string,
    url: PropTypes.string,
    descripcion: PropTypes.string,
};
export default CardEspecialidades


