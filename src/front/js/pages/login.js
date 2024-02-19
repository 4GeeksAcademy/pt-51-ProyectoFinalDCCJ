import React from "react";
import { Link, useParams } from "react-router-dom";
import LoginUsuarios from "../component/loginUsuarios";
import LoginDoctores from "../component/loginDoctores";


const Login = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            {params.role == "usuario" ? <LoginUsuarios /> : <LoginDoctores />}
        </>
    );
};
export default Login;