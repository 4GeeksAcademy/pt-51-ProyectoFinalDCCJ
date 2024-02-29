import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NuevaContraseña = () => {
  const { actions } = useContext(Context);

  // validacion de formulario 
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      recoveredpassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address'),
      password: Yup.string()
        .min(8, 'Debe tener al menos 8 caracteristicas')
        .max(20, 'Debe tener un maximo de 20 caracteristicas'),

      recoveredpassword: Yup.string()
        .min(8, 'Debe tener al menos 8 caracteristicas')
        .max(20, 'Debe tener un maximo de 20 caracteristicas'),
    }),
    onSubmit: values => {
      actions.changePassword(values.email, values.password, values.recoveredpassword)
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card  ">
            <div className="card-header text-center ">
              <h5 className="card-title">Nueva Contraseña</h5><i className="fa-solid fa-house-medical-circle-check"></i>
            </div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />

                  <label for="floatingInput">Email</label>
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <div className="text pb-3">{formik.errors.email}</div>
                ) : null}

                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />

                  <label for="floatingPassword">Antigua Contraseña</label>
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <div className="text pb-3">{formik.errors.password}</div>
                ) : null}

                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" name="recoveredpassword" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.recoveredpassword} />

                  <label for="floatingPassword">Nueva Contraseña</label>
                </div>

                {formik.touched.recoveredpassword && formik.errors.recoveredpassword ? (
                  <div className="text pb-3">{formik.errors.recoveredpassword}</div>
                ) : null}

                <div className="d-flex justify-content-center">
                  <button type="submit" class="btn btn-outline-success rounded-pill px-4">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NuevaContraseña;