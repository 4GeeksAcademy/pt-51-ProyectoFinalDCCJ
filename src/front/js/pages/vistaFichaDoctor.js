import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import CalendlyComponent from "../component/calendlyComponent";

const VistaFichaDoctor = () => {
    const { url } = useParams(); // Utilizo useParams para obtener el parámetro de la URL
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.ObtenerDoctores();
    }, []);

    console.log(url);

    return (
        <div className="col-12">
            <CalendlyComponent url={url}/>
        </div>
    );
};

export default VistaFichaDoctor;