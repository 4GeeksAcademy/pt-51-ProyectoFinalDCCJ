import React from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-5 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <p>Oficinas centrales</p>
          <p className="text-primary">+34 935 351 260</p>
          <p>Atención al paciente</p>
          <p className="text-primary">+34 935 351 260</p>
          <p className="text-primary">info@barzanitas.es</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <p>Horarios</p>
          <p>
            <strong>Lunes a Viernes de 9:00-14:00 y 16:00-20:00</strong>
          </p>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-end align-items-end">
          <div className="mb-2">
            <p>Síguenos en:</p>
          </div>
          <div>
            <i className="fab fa-instagram fa-2x me-2"></i>
            <i className="fab fa-twitter fa-2x me-2"></i>
            <i className="fab fa-facebook fa-2x me-2"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
