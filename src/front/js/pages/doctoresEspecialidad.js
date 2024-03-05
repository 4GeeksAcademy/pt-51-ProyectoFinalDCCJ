import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import VistaDoctores from "../component/vistaDoctores";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { jwtDecode } from "jwt-decode";

const DoctoresEspecialidad = () => {
    const params = useParams();
    console.log(params)
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.ObtenerDoctores()
    }, []);
    
    // const token = localStorage.getItem("token");
    // const decodedToken = jwtDecode(token);
    console.log(params);
    return (
        
            <div className="col-12">
				<ul className=" d-flex justify-content-center list-unstyled gap-1 px-0">
					{store.Doctores.map(item => 
                        (item.especialidad == params.especialidad) &&
                        
						<li key={item.id} className="col-4 px-0 w-auto my-2">
							<VistaDoctores especialidad={item.especialidad} id={item.id} nombre={item.nombre} imagen={item.Url_imagen} apellido={item.apellido} email={item.email} telefono={item.telefono} url_Calendly={item.url_Calendly}/>
						</li>
					)}
				</ul>
			</div>
    );
};

export default DoctoresEspecialidad;