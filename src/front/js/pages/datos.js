import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import DatosUsuarios from "../component/datosUsuarios";
import DatosDoctores from "../component/datosDoctores";
import { Context } from "../store/appContext";
import { jwtDecode } from "jwt-decode";

const Datos = () => {
    const params = useParams();
    console.log(params)
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.ObtenerDoctores()
        actions.ObtenerUsuarios()
    }, []);
    
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    
    console.log(decodedToken);
    console.log(store.Usuario);
    console.log(store.Doctores);
    return (
        
        <>
            {params.role == "usuarios" ? 
            <div className="col-12">
                <ul className="d-flex justify-content-center list-unstyled gap-1 px-0">
                    {store.Usuario?.map(item => 
                        (item.email === decodedToken.sub) &&
                        <li key={item.id} className="col-4 px-0 w-auto my-2">
                            <DatosUsuarios id={item.id} nombre={item.nombre} dni={item.dni} imagen={item.Url_imagen} apellido={item.apellido} email={item.email} telefono={item.telefono} direccion={item.direccion}/>
                        </li>
                    )}
                </ul>
            </div>
            : 
            <div className="col-12">
                <ul className="d-flex justify-content-center list-unstyled gap-1 px-0">
                    {store.Doctores.map(item => 
                        (item.email === decodedToken.sub) &&
                        <li key={item.id} className="col-4 px-0 w-auto my-2">
                            <DatosDoctores id={item.id} nombre={item.nombre} dni={item.dni} imagen={item.Url_imagen} apellido={item.apellido} email={item.email} telefono={item.telefono} url_Calendly={item.url_Calendly}/>
                        </li>
                    )}
                </ul>
            </div>}
        </>
    );
};
export default Datos;