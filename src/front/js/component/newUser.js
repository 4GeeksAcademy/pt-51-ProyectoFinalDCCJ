import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewUser = () => {
    const {store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [dni, setDni] = useState("");
    const [Url_imagen, setUrl_imagen] = useState("");
    const Navigate = useNavigate();

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "Presents_react");
        
        
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dn4eqesd6/image/upload", data);
            setUrl_imagen(response.data.secure_url);
        } catch (error) {
            console.error("Error al cargar la imagen a Cloudinary:", error);
        }
    };
    console.log(Url_imagen);
    const FuncionDeleteImage = () => {
        setUrl_imagen("");
    };
    console.log(Url_imagen);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(Url_imagen);
        try {
            await actions.CrearUsuario(email, password, nombre, apellido, telefono, direccion, Url_imagen);
           
          

            Navigate('/login/usuarios');
        } catch (error) {
            console.error("Error al crear el usuario:", error);
        
        }
    };

    return (
        <div className="w-75 mx-auto p-2">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fileInput" className="btn btn-primary">
                        Seleccionar Archivo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            id="fileInput"
                            style={{ display: 'none' }}
                        />
                    </label>
                    {Url_imagen && (
                        <div className="ml-2">
                            <button className="btn btn-danger" type="button" onClick={FuncionDeleteImage}>
                                Eliminar Imagen
                            </button>
                        </div>
                    )}
                </div>
                
                {Url_imagen && (
                    <div>
                        <img src={Url_imagen} alt="Subida" className="mb-3" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    </div>
                )}
             
            
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
                            <input type="text" className="form-control" id="floatingDireccion" placeholder="Dirección" onChange={(event) => { setDireccion(event.target.value) }} />
                            <label htmlFor="floatingDireccion">Dirección</label>
                        </div>
                        <div className="col-md-4">
                            <input type="tel" className="form-control" id="floatingTelefono" placeholder="Teléfono" onChange={(event) => { setTelefono(event.target.value) }} />
                            <label htmlFor="floatingTelefono">Teléfono</label>
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

