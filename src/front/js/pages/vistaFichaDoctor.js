import React, { useState, useEffect, useContext} from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { InlineWidget } from "react-calendly";

import { Context } from "../store/appContext";
import CalendlyComponent from "../component/calendlyComponent";

const VistaFichaDoctor = () => {
    //console.log(URLSearchParams.toString());
    //console.log(useSearchParams());
    const [searchParams] = useSearchParams()
    return (   
     <div>
      <h1 className="ms-5">Agenda una cita</h1>
      <InlineWidget url="https://calendly.com/diegoavila87/citas" />
    </div>
  )
    // const [searchParams] = useSearchParams()

    // return (
    //     <div className="col-12">
    //         <CalendlyComponent />
    //     </div>
    // );
};

export default VistaFichaDoctor;