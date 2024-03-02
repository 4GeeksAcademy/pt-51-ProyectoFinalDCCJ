



import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import VistaDoctores from "../component/vistaDoctores";
import { Context } from "../store/appContext";
import VistaHomeDoctores from "../component/vistaHomeDoctores";
import InfoDoctores from "../component/infoDoctores";
const PaginaDoctores = () => {
//     return (
//         <div className='ms-5 me-5'>
//           <h1 className='text-center mt-5 mb-5'>Barzanitas: Doctores</h1>
//           <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>


// const Doctores = () => {
    const { store, actions } = useContext(Context);
    console.log(store);
    // useEffect(() => {
    //     actions.ObtenerDoctores();
    // }, []);
    // console.log(store.Doctores);
    return (
        <div className="col-12">
				<ul className=" d-flex justify-content-center list-unstyled gap-1 px-0">
					{store.Doctores.map(item => (
						<li key={item.id} className="col-4 px-0 w-auto my-2">
							<InfoDoctores id={item.id} nombre={item.nombre} imagen={item.Url_imagen} apellido={item.apellido} email={item.email} telefono={item.telefono} url_Calendly={item.url_Calendly}/>
						</li>
					))}
				</ul>
			</div>
    );
};
export default PaginaDoctores;
     

