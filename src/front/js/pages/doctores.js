import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import VistaDoctores from "../component/vistaDoctores";
import { Context } from "../store/appContext";
import VistaHomeDoctores from "../component/vistaHomeDoctores";
import "../../styles/color.css";

const Doctores = () => {
    const { store, actions } = useContext(Context);
    console.log(store);
    useEffect(() => {
        actions.ObtenerDoctores();
    }, []);
    console.log(store.Doctores);
    return (
        <div className="col-12 container-fluid ">
				<ul className="d-flex list-unstyled justify-content-center gap-1 px-0 overflow-auto row">
					{store.Doctores.map(item => (
						<li key={item.id} className="col-12 col-md-6 col-lg-4 px-0 w-auto my-2">
							<VistaDoctores id={item.id} nombre={item.nombre} imagen={item.Url_imagen} apellido={item.apellido} email={item.email} telefono={item.telefono} url_Calendly={item.url_Calendly}/>
						</li>
					))}
				</ul>
			</div>
    );
};
export default Doctores;

