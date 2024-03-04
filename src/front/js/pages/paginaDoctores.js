// import React, { useEffect, useContext, useState } from "react";
// import { Context } from "../store/appContext";
// import InfoDoctores from "../component/infoDoctores";

// const PaginaDoctores = () => {
//     const { store, actions } = useContext(Context);
//     const [doctorInfo, setDoctorInfo] = useState(null);

//     useEffect(() => {
//         const obtenerInformacionDoctor = async () => {
//             try {
//                 // Realiza una solicitud al backend para obtener la información del médico
//                 const response = await fetch("https://congenial-fortnight-v97px99r6xhpqgx-3001.app.github.dev/login/doctor", {
//                     method: "POST",
//                     headers: {
//                         Authorization: `Bearer ${store.auth?.access_token}`
//                     }
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setDoctorInfo(data);
//                 } else {
//                     console.error("Error al obtener la información del médico");
//                 }
//             } catch (error) {
//                 console.error("Error en la solicitud al backend", error);
//             }
//         };

//         if (store.auth?.access_token) {
//             obtenerInformacionDoctor();
//         }
//     }, [store.auth?.access_token]);

//     if (!doctorInfo) {
//         return <p>Cargando información del médico...</p>;
//     }

//     return (
//         <div className="col-12">
//             {/* Renderiza la información del médico utilizando el componente InfoDoctores */}
//             <InfoDoctores
//                 nombre={doctorInfo.nombre}
//                 imagen={doctorInfo.Url_imagen}
//                 apellido={doctorInfo.apellido}
//                 email={doctorInfo.email}
//                 telefono={doctorInfo.telefono}
//                 url_Calendly={doctorInfo.url_Calendly}
//             />
//         </div>
//     );
// };

// export default PaginaDoctores;

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