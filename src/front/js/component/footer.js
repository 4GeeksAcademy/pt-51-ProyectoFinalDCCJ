import React from "react";
import "../../styles/footer.css";
import "../../styles/color.css";

export const Footer = () => (
  <footer className="footer mt-auto py-5 color2">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5 className="color-text1"><strong>Oficinas centrales</strong></h5>
          <a className="color-text1">+34 935 351 260</a>
          <h5 className="color-text1"><strong>Atención al paciente</strong></h5>
          <p className="color-text1">+34 935 351 260</p>
          <p className="color-text1">barzanitas@outlook.com</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
        <h5 className="color-text1"><strong>Horarios</strong></h5>
          <p className="color-text1">
            <strong>Lunes a Viernes de 9:00-14:00 y 16:00-20:00</strong>
          </p>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-end align-items-end">
          <div className="mb-2">
            <h5 className="color-text1">Síguenos en:</h5>
          </div>
          <div>
            <i className="fab fa-instagram fa-2x me-2 color-text1"></i>
            <i className="fab fa-twitter fa-2x me-2 color-text1"></i>
            <i className="fab fa-facebook fa-2x me-2 color-text1"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
