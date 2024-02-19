import React from "react";

const LoginUsuarios = () => {
  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card  ">
            <div className="card-header text-center ">
              <h5 className="card-title">Iniciar Sesión</h5><i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div className="card-body">
              <form action="">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                  <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" />
                  <label for="rememberMe" className="form-check-label">Recordar Sesion</label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline-success rounded-pill px-4">Iniciar</button>
                </div>
              </form>
              <p className="mt-3 text-center">¿No tienes una cuenta? <a href="#">Registrate aquí</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginUsuarios;