import React, { useState, useEffect, useContext } from "react";
import VistaHomeDoctores from "../component/vistaHomeDoctores";
import VistaHomeEspecialidades from "../component/vistaHomeEspecialidades";
import { Context } from "../store/appContext";
import Hospital1 from "../../img/Hospital1.jpg";
import "../../styles/home.css";
import clinica1 from "../../img/clinica1.jpg";



export const Home = () => {
 

  const { store, actions } = useContext(Context);

  
  useEffect(() => {
    actions.DoctoresHome();
    actions.EspecialidadesHome();
  }, []);
  

  //Verificar si Doctores y Especialidades están definidos
  const showDoctores = store.HomeDoctores ? store.HomeDoctores.slice(0, 3) : [];
  const showEspecialidades = store.HomeEspecialidades ? store.HomeEspecialidades.slice(0, 3) : [];
 

  return (
    <div className="text-center mt-5">
   
      <div>
        <img src={Hospital1} className="img-fluid w-80" alt="Hospital" />
      </div>

      <div className="col-12">
        <ul className="flex-nowrap d-flex flex-row list-unstyled gap-1 px-0 mx-auto">
          {showDoctores.map(item => (
            <li key={item.id} className="col-4 px-0 w-auto my-2">
              <VistaHomeDoctores nombre={item.nombre} imagen={item.imagen}  />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-weight-bold display-4 me-5">Clínica</p>
        <img src={clinica1} className="img-fluid w-80" alt="clinica" />
      </div>

      <div className="col-12">
        <ul className="flex-nowrap d-flex flex-row list-unstyled gap-1 px-0 mx-auto">
          {showEspecialidades.map(item => (
            <li key={item.id} className="col-4 px-0 w-auto my-2">
              <VistaHomeEspecialidades nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

// export default Home;
//  import React, { useState, useEffect, useContext } from "react";
//  import axios from "axios";
//  export const Home = () => {
// 	const[Url_imagen, setUrl_imagen] = useState("");



// const changeUploadImage = async (e) =>{
// 	const file = e.target.files[0];
	
// const data = new FormData();

// data.append("file" ,file);
// data.append("upload_preset" ,"Presents_react");

// const response = await axios.post("https://api.cloudinary.com/v1_1/dn4eqesd6/image/upload", data);


// console.log(response.data)

// setUrl_imagen(response.data.secure_url);


// };

// //Eliminar imagen:

// const FuncionDeleteImage = () => {
// 	setUrl_imagen("");
// }

// console.log(Url_imagen)
//  	return( 
// 		<>
// 			<h1>Seleccionar imagen para cloudinary</h1>
// 			<div>
// 				<input type="file" accept="image/*" onChange={changeUploadImage}/>

// 				{Url_imagen &&(

				
// 				<div>
// 					<img src={Url_imagen}/>
					
// 					<button onClick={() => FuncionDeleteImage()}>Eliminar Imagen</button>
// 				</div>
// 				)}
// 			</div>

// 		</>

// 	);
// }					


