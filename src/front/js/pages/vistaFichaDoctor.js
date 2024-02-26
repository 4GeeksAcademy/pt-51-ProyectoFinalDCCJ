import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import FichaDoctor from "../component/fichaDoctor";
import { Context } from "../store/appContext";


const VistaFichaDoctor = (url) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.ObtenerDoctores();
    }, []);
    console.log(url);
    return (
        <div className="col-12">
                {/* <FichaDoctor url={url}/> */}
			</div>
    );
};
export default VistaFichaDoctor;