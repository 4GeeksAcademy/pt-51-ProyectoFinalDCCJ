import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const NewDoctor = () => {
    const { actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await actions.CrearDoctor(email, password, nombre, apellido, telefono, dni);
            setSuccess("Doctor creado correctamente");
        } catch (error) {
            setError("Error al crear el doctor. Por favor, verifica los datos e intenta nuevamente.");
        }
    };

    return (
        <div className="w-75 mx-auto p-2">
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(event) => { setEmail(event.target.value) }} />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="floatingName" placeholder="Nombre" onChange={(event) => { setNombre(event.target.value) }} />
                            <label htmlFor="floatingName">Nombre</label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="floatingLastName" placeholder="Apellidos" onChange={(event) => { setApellido(event.target.value) }} />
                            <label htmlFor="floatingLastName">Apellidos</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-5">
                    <div className="row">
                         <div className="col-md-6">
                            <input type="tel" className="form-control" id="floatingTelephone" placeholder="Teléfono" onChange={(event) => { setTelefono(event.target.value) }} />
                            <label htmlFor="floatingTelephone">Teléfono</label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="floatingDni" placeholder="DNI" onChange={(event) => { setDni(event.target.value) }} />
                            <label htmlFor="floatingDni">DNI</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
 
    );
};

export default NewDoctor;

