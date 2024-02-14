import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Hospital1 from "../../img/Hospital1.jpg";
import "../../styles/home.css";
import Doctor1 from "../../img/Doctor1.jpg";
import Doctor2 from "../../img/Doctor2.png";
import Doctor3 from "../../img/Doctor3.png";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<p>
				<img src={Hospital1} />
			</p>
			<p>Doctores</p>
						<div class="row row-cols-1 row-cols-md-3 g-4">
							<div class="col">
								<div class="card h-100 w-50">
									<img src={Doctor1} class="card-img-top" alt="..."/>
							
								</div>
							</div>
							<div class="col">
								<div class="card h-100 w-50">
									<img src={Doctor2} class="card-img-top" alt="..."/>
							
							</div>
						</div>
						<div class="col">
							<div class="card h-100 w-50">
							<img src={Doctor3} class="card-img-top" alt="..."/>
							
							</div>
							</div>
						</div>
						</div>
		
				
	);
};
