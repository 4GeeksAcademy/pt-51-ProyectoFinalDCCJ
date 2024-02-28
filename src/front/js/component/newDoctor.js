import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewDoctor = () => {
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [dni, setDni] = useState("");
    const [url_Calendly, setUrl_Calendly] = useState("");
    const [especialidad, setEspecialidad] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const Navigate = useNavigate();

    console.log(especialidad);
    useEffect(() => {
        actions.EspecialidadesHome();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await actions.CrearDoctor(email, password, nombre, apellido, telefono, dni, url_Calendly, especialidad);
            setSuccess("Doctor creado correctamente");
            toast.success('Inicio de sesión exitoso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              Navigate('/login/doctor');
        } catch (error) {
            setError("Error al crear el doctor. Por favor, verifica los datos e intenta nuevamente.");
            toast.error('Inicio de sesión fallido. Verifica tus credenciales.', {
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
    // const especialidades = () => {
    //     let datos = store.Especialidades.map
    // }

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
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="floatingUrl_Calendly" placeholder="url_Calendly" onChange={(event) => { setUrl_Calendly(event.target.value) }} />
                            <label htmlFor="floatingDni">url_Calendly</label>
                        </div>
                        <div className="col-md-6">
                            {/* <select className="form-select"  id="floatingEspecialidad" placeholder="especialidad" onSelect={(event) => { setEspecialidad(event.target.value) }}>
                                <option selected>Selecciona especialidad...</option>
                                for (let index = 0; index < datos.length; index++) {
                                    const element = array[index];
                                    <option defaultValue={datos.id}>{datos.npmbre}erf</option>
                                }
                                {store.Especialidades.map(especialidad => (
                                // <li key={item.id} className="col-4 px-0 w-auto my-2">
                                
                                //<CardEspecialidades key={especialidad.id} titulo={especialidad.email} descripcion={especialidad.descripcion} url={especialidad.imagen} />
                                // </li>
                                ))}
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                            </select>
                            <label className="input-group-text" htmlFor="floatingEspecialidad">Especialidad</label>
                             */}
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

export default NewDoctor;

