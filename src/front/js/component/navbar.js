import React from "react";
import { Link } from "react-router-dom";
import LogoBarzanitas from "../../img/LogoBarzanitas.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={LogoBarzanitas} alt="Logo de Barzanitas"></img>
					<span className="navbar-brand mb-0 h1">Barzanitas</span>
				</Link>
				
				
				
				<div className="dropdown">
					
						<button type="button" className="btn btn-primary me-3">Soy Cliente</button>
						<button type="button" className="btn btn-success me-3">Soy Doctor</button>
						<button type="button" className="btn btn-danger me-5">Cerrar Sesión</button>
					
						<a className="fa fa-bars fa-2x" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						
						</a>

					<ul className="dropdown-menu dropdown-menu-end p-3 fs-5">
						<li><a className="dropdown-item fs-5 py-3" href="#">Especialidades</a></li>
						<li><a className="dropdown-item fs-5 py-3" href="#">Doctores</a></li>
						<li><a className="dropdown-item fs-5 py-3" href="#">La empresa</a></li>
						<li><a className="dropdown-item fs-5 py-3" href="#">Contáctanos</a></li>
						
					</ul>
				</div>
				
					
			</div>
		</nav>
	);
};
