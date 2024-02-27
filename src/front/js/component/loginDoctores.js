import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginDoctores = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate =useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Llama a la función LoginDoctor del contexto
        const success = await actions.LoginDoctor(email, password);

        if (success) {
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
            Navigate('/especialidades');//cambiar a la página de ver sus citas con los pacientes
          } else {
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
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h5 className="card-title">Iniciar Sesión</h5><i className="fa-solid fa-stethoscope"></i>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={(event) => { setEmail(event.target.value) }} />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={(event) => { setPassword(event.target.value) }} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" />
                                    <label htmlFor="rememberMe" className="form-check-label">Recordar Sesión</label>
                                </div>
                                <div className="d-flex justify-content-center">
                                
                                    <button type="submit" className="btn btn-outline-success rounded-pill px-4">
                                        Iniciar
                                    </button>
                               
                                </div>
                            </form>
                            <p className="mt-3 text-center">
                                ¿No tienes una cuenta? <Link to="/registro/doctores" className="nav-link">Regístrate aquí</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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

export default LoginDoctores;