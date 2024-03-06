import React from "react";
import { Link, useParams } from "react-router-dom";
import NuevaContraseña from "../component/vistaNuevaContraseña";
import "../../styles/color.css";

const NewPassword = () => {

    return (
        <>
            <NuevaContraseña />
        </>
    );
};
export default NewPassword;