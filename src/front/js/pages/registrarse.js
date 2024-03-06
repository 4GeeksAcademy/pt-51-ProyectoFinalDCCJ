import React from "react";
import { Link, useParams } from "react-router-dom";
import NewUser from "../component/newUser";
import NewDoctor from"../component/newDoctor";
import "../../styles/color.css";


const Registrarse = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            {params.role == "usuarios" ? <NewUser /> : <NewDoctor />}
        </>
    );
};
export default Registrarse;