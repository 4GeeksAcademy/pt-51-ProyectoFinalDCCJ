import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import VistaDoctores from "../component/vistaDoctores";
import { Context } from "../store/appContext";

const Doctores = () => {
    const { store, actions } = useContext(Context);
    console.log(store);
    useEffect(() => {
        actions.ObtenerDoctores();
    }, []);
    console.log(store.Doctores);
    return (
        <div className="col-12">
				<ul className="flex-nowrap d-flex flex-row overflow-scroll list-unstyled gap-1 px-0">
					{store.Doctores.map(item => (
						<li key={item.id} className="col-4 px-0 w-auto my-2">
							<VistaDoctores nombre={item.nombre} imagen={item.imagen}  />
						</li>
					))}
				</ul>
			</div>
    );
};
export default Doctores;