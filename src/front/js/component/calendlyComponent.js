import React from "react";
import { InlineWidget } from "react-calendly";
import PropTypes from "prop-types";
import { useParams, useSearchParams } from "react-router-dom";

const CalendlyComponent = () => {
  console.log(searchParams.set(url));
  console.log(useSearchParams());
  const [searchParams] = useSearchParams()
  return (   
    <div>
      <h1 className="ms-5">Agenda una cita</h1>
      <InlineWidget url="https://calendly.com/diegoavila87/citas" />
    </div>
  )
  };  

  CalendlyComponent.propTypes = {
	  nombre: PropTypes.string,
    email: PropTypes.string,
    apellido: PropTypes.string,
    telefono: PropTypes.number,
    dni: PropTypes.string,
    imagen: PropTypes.string,
    calendlyUrl: PropTypes.string

};  


export default CalendlyComponent;