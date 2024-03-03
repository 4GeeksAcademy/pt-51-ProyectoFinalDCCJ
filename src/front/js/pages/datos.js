import React from "react";
import { Link, useParams } from "react-router-dom";
import DatosUsuarios from "../component/datosUsuarios";
import DatosDoctores from "../component/datosDoctores";


const Datos = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            {params.role == "usuarios" ? <DatosUsuarios /> : <DatosDoctores />}
        </>
    );
};
export default Datos;