import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../../styles/color.css";

const NewDoctor = () => {
    const { store, actions } = useContext(Context);

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [dni, setDni] = useState("");
    const [url_Calendly, setUrl_Calendly] = useState("");
    const [especialidad, setEspecialidad] = useState("");
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

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            telefono: '',
            dni: '',

        },
        validationSchema: Yup.object({
            email: Yup.string().email('Dirección de correo inválida').required('Requerido'),
            password: Yup.string()
                .min(8, 'Debe tener al menos 8 caracteres')
                .max(15, 'No puede tener más de 15 caracteres')
                .required('Requerido'),
            telefono: Yup.string()
                .matches(/^[0-9]+$/, "Debe ser solo números")
                .min(9, 'Debe tener exactamente 9 caracteres')
                .max(9, 'Debe tener exactamente 9 caracteres')
                .required('Requerido'),
            dni: Yup.string()
                // .matches(/^[0-9]+$/, "Debe ser solo números")
                .min(9, 'Debe tener exactamente 9 caracteres')
                .max(9, 'Debe tener exactamente 9 caracteres')
                .required('Requerido'),
            // Validaciones para otros campos como necesites
        }),
        onSubmit: async (values) => {

            // console.log(values, nombre, apellido, direccion, Url_imagen)

            try {
                await actions.CrearDoctor(values.email, values.password, nombre, apellido, values.telefono, values.dni, Url_imagen, url_Calendly);
                
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

                Navigate('/login/doctores');
            } catch (error) {
                console.error("Error al crear el usuario doctor:", error);
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
        },
    })
    // console.log(especialidad);
    // useEffect(() => {
    //     actions.EspecialidadesHome();
    // }, []);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //      try {
    //         await actions.CrearDoctor(email, password, nombre, apellido, telefono, dni, Url_imagen,url_Calendly)


    //         Navigate('/login/doctor');
    //      } catch (error) {
    //         //console.error("Error al crear el doctor:", error);

    //      }
    // };
    // const especialidades = () => {
    //     let datos = store.Especialidades.map
    // }

    return (
        <div className="w-75 mx-auto p-2">
            <form onSubmit={formik.handleSubmit}>
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
                            <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                            <label htmlFor="floatingEmail">Email</label>
                        
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        
                        </div>
                        <div className="col-md-6">
                            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                            <label htmlFor="floatingPassword">Password</label>
                        
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-danger">{formik.errors.password}</div>
                            ) : null}
                        
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
                            <input type="tel" name="telefono" className="form-control" id="floatingTelephone" placeholder="Teléfono" onChange={formik.handleChange} value={formik.values.telefono} onBlur={formik.handleBlur} />
                            <label htmlFor="floatingTelephone">Teléfono</label>
                       
                            {formik.touched.telefono && formik.errors.telefono ? (
                                <div className="text-danger">{formik.errors.telefono}</div>
                            ) : null}
                       
                        </div>
                        <div className="col-md-4">
                            <input type="text" name="dni" className="form-control" id="floatingDni" placeholder="DNI" onChange={formik.handleChange} value={formik.values.dni} onBlur={formik.handleBlur} />
                            <label htmlFor="floatingDni">DNI</label>
                        
                            {formik.touched.dni && formik.errors.dni ? (
                                <div className="text-danger">{formik.errors.dni}</div>
                            ) : null}
                        
                        </div>
                        <div className="col-md-4">
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


