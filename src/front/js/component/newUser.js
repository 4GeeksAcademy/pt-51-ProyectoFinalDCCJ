import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const NewUser = () => {
    const { store, actions } = useContext(Context)
    
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [nombre, setNombre] = useState([]);
    const [apellido, setApellido] = useState([]);
    const [direccion, setDireccion] = useState([]);
    const [telefono, setTelefono] = useState([]);
    const [dni, setDni] = useState([]);
    console.log(email);

    
    return(
        <div className="w-75 mx-auto p-2">
        <form onSubmit={() =>
            // event => {
            // event.preventDefault();
            actions.CrearUsuario(email, password, nombre, apellido, direccion, telefono, dni)}>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={event=> {setEmail(event.target.value)}}/>
                <label htmlFor="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={event=> {setPassword(event.target.value)}}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="name" className="form-control" id="floatingName" placeholder="Nombre" onChange={event=> {setNombre(event.target.value)}}/>
                <label htmlFor="floatingName">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input type="lastName" className="form-control" id="floatingLastName" placeholder="Apellidos" onChange={event=> {setApellido(event.target.value)}}/>
                <label htmlFor="floatingLastName">Apellidos</label>
            </div>
            <div className="form-floating mb-3">
                <input type="direction" className="form-control" id="floatingDirection" placeholder="Dirección" onChange={event=> {setDireccion(event.target.value)}}/>
                <label htmlFor="floatingDirection">Dirección</label>
            </div>
            <div className="form-floating mb-3">
                <input type="telephone" className="form-control" id="floatingTelephone" placeholder="Teléfono" onChange={event=> {setTelefono(event.target.value)}}/>
                <label htmlFor="floatingTelephone">Teléfono</label>
            </div>
            <div className="form-floating mb-3">
                <input type="dni" className="form-control" id="floatingDni" placeholder="DNI" onChange={event=> {setDni(event.target.value)}}/>
                <label htmlFor="floatingDni">DNI</label>
            </div>
            <button type="submit" className="btn btn-primary" >Registrarse</button>
        </form>
        </div>
        
    );
    
};
export default NewUser;