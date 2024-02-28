import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const VistaEmail = () => {
    const { actions } = useContext(Context);

    // validacion de formulario 
    const formik = useFormik({
        initialValues: {
            email: '',
            // recoveredemail: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address'),
            // recoveredemail: Yup.string().email('Invalid email address')

        }),
        onSubmit: values => {
            actions.sendEmail(values.email)
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h5 className="card-title">Escriba Su Correo Electronico</h5><i className="fa-solid fa-file-waveform"></i>
                        </div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit} >
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>

                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text pb-3">{formik.errors.email}</div>
                                ) : null}

                                {/* <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" name="recoveredemail" placeholder="name@example.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.recoveredemail} />
                                    <label htmlFor="floatingInput">Repetir Email</label>
                                </div>

                                {formik.touched.recoveredemail && formik.errors.recoveredemail ? (
                                    <div className="text pb-3">{formik.errors.recoveredemail}</div>
                                ) : null} */}

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-outline-success rounded-pill px-4">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VistaEmail



// onChange={(event) => { setPassword(event.target.value) }}