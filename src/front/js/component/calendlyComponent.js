import React from "react";
import { InlineWidget } from "react-calendly";
import PropTypes from "prop-types";
import { useParams, searchParams } from "react-router-dom";

const CalendlyComponent = () => {
  console.log(searchParams);
  const [searchParams] = useSearchParams()
  return (   
    <div>
      <h1 className="ms-5">Agenda una cita</h1>
      <InlineWidget url={searchParams} />
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