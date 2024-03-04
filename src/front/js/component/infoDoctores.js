import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/infoDoctores.css";

const InfoDoctores = (props) => {
  return (
    <div>
      <img src={props.imagen} className="img-fluid rounded-start ps-5" alt="..." />

      <div className="container">
        <div className="row">
          <div className="col">
            <table className="mt-3 pe-5 table table-stripe table-hover table-primary border-dark table-bordere align-center">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>{props.nombre}</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>Apellido</th>
                  <th>{props.apellido}</th>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{props.email}</td>
                </tr>
                <tr>
                  <th scope="row">DNI</th>
                  <td colSpan="2">{props.dni}</td>
                </tr>
                <tr>
                  <th scope="row">Teléfono</th>
                  <td colSpan="2">{props.telefono}</td>
                </tr>
                <tr>
                  <th className="table-primary" scope="row">Pinche en el enlace para ver sus citas</th>
                  <td colSpan="2">
                    <Link to="/ficha">
                      <iframe
                        src="https://calendar.google.com/calendar/embed?src=diegoavila87%40gmail.com&ctz=Europe%2FMadrid"
                        style={{ border: "solid 1px #777", width: "800px", height: "600px" }}
                        frameborder="0"
                        
                      />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoDoctores.propTypes = {
  nombre: PropTypes.string,
  email: PropTypes.string,
  apellido: PropTypes.string,
  telefono: PropTypes.number,
  dni: PropTypes.string,
  Url_imagen: PropTypes.string,
  url_Calendly: PropTypes.string,
};

export default InfoDoctores;