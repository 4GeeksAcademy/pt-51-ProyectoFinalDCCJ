import React, { useState, useEffect, useContext} from "react";
import { Link, useParams, searchParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import CalendlyComponent from "../component/calendlyComponent";

const VistaFichaDoctor = () => {
    const [searchParams] = useSearchParams()

    return (
        <div className="col-12">
            <CalendlyComponent searchParams/>
        </div>
    );
};

export default VistaFichaDoctor;