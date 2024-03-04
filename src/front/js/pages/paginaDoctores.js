import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import InfoDoctores from "../component/infoDoctores";
import { Context } from "../store/appContext";
import { jwtDecode } from "jwt-decode";

const PaginaDoctores = () => {
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.ObtenerDoctores();
    }, []);
    
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);

    return (
        <div className="col-12">
            <ul className="d-flex justify-content-center list-unstyled gap-1 px-0">
                {store.Doctores.map(item => 
                    (item.email === decodedToken.sub) &&
                    <li key={item.id} className="col-4 px-0 w-auto my-2">
                        <InfoDoctores id={item.id} nombre={item.nombre} dni={item.dni} imagen={item.Url_imagen} apellido={item.apellido} email={item.email} telefono={item.telefono} url_Calendly={item.url_Calendly}/>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PaginaDoctores;