import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import CalendlyComponent from "../component/calendlyComponent";

const VistaFichaDoctor = () => {


    return (
        <div className="col-12">
            <CalendlyComponent useParams/>
        </div>
    );
};

export default VistaFichaDoctor;