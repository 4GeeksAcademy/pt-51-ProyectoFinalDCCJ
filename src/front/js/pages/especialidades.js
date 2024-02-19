import React from "react";
import { Link, useParams } from "react-router-dom";
import VistaEspecialidades from "../component/vistaEspecialidades";

const Especialidades = () => {
    const params = useParams();
    console.log(params)
    return (
         <VistaEspecialidades />
    );
};
export default Especialidades;