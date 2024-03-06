import React from "react";
import { Link, useParams } from "react-router-dom";
import LoginUsuarios from "../component/loginUsuarios";
import LoginDoctores from "../component/loginDoctores";
import "../../styles/color.css";


const Login = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            {params.role == "usuarios" ? <LoginUsuarios /> : <LoginDoctores />}
        </>
    );
};
export default Login;