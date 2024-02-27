import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewUser = () => {
    const { actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await actions.CrearUsuario(email, password, nombre, apellido, direccion, telefono, dni);
            
            toast.success('Usuario creado correctamente', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              Navigate('/login/usuarios');
        } catch (error) {
            
            toast.error('Error al crear usuario. Por favor, verifica los datos e intenta nuevamente', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
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
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="floatingDirection" placeholder="Dirección" onChange={(event) => { setDireccion(event.target.value) }} />
                            <label htmlFor="floatingDirection">Dirección</label>
                        </div>
                        <div className="col-md-4">
                            <input type="tel" className="form-control" id="floatingTelephone" placeholder="Teléfono" onChange={(event) => { setTelefono(event.target.value) }} />
                            <label htmlFor="floatingTelephone">Teléfono</label>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="floatingDni" placeholder="DNI" onChange={(event) => { setDni(event.target.value) }} />
                            <label htmlFor="floatingDni">DNI</label>
                        </div>
                    </div>
                </div>
                
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                
                
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default NewUser;