import React, { useState, useEffect, useContext} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import VistaDoctores from "../component/vistaDoctores";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { jwtDecode } from "jwt-decode";
import "../../styles/color.css";

const DoctoresEspecialidad = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                actions.ObtenerDoctores();
                const token = localStorage.getItem("token");

                if (!token) {
                    // Si no hay token, redirige a la página de inicio de sesión
                    navigate("/login/usuarios");
                  
                    
                }

                const decodedToken = jwtDecode(token);

                // Resto del código para procesar los doctores
            } catch (error) {
                navigate("/login/usuarios");
            
                
                // Si hay algún error al decodificar el token, también redirige a la página de inicio de sesión
                
            }
        };

        fetchData();
    }, [params, actions, navigate]);
    return (
        
            <div className="col-12">
				<ul className=" d-flex justify-content-center list-unstyled gap-1 px-0 row">
					{store.Doctores.map(item => 
                        (item.especialidad == params.especialidad) &&
                        
						<li key={item.id} className="col-md-6 col-lg-4 px-0 w-auto my-2">
							<VistaDoctores especialidad={item.especialidad} id={item.id} nombre={item.nombre} imagen={item.Url_imagen} apellido={item.apellido} email={item.email} telefono={item.telefono} url_Calendly={item.url_Calendly}/>
						</li>
					)}
				</ul>
			</div>
    );
};

export default DoctoresEspecialidad;