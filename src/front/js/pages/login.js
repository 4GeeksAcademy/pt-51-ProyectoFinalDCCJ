import React from "react";
import LoginUsuario from "../component/loginUsuario";
import { Link, useParams } from "react-router-dom";
import LoginDoctores from "../component/loginDoctores";


const Login = () => {
    const params = useParams();
    console.log(params)
    return(
        <>
        { params.role == "cliente"?  <LoginUsuario/>: <LoginDoctores/> }
        </>
        );
};
export default Login;