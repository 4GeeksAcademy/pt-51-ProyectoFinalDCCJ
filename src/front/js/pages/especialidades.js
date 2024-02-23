import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import CardEspecialidades from "../component/cardEspecialidades";
import { Context } from "../store/appContext";

const VistaEspecialidades = () => {
    const { store, actions } = useContext(Context);

    const infoEspecialidades = [
        {
            id: 1,
          titulo: "Juan",
          descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          url: "https://augesalus.com/wp-content/uploads/2022/10/auge-salus-nutricionista.jpg"
        },
        {
            id: 2,
            titulo: "Juan",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            url: "https://www.vitalconsultorios.com/images/medicina-interna-2.png"
        },
        {
            id: 3,
            titulo: "Juan",
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            url: "https://drapatriciasaintamand.com/wp-content/uploads/2021/05/sobre-Pediatria.jpg"
        }
      ];

    // console.log(store);
    // useEffect(() => {
    //     actions.obtenerEspecialidades();
    // }, []);
    // console.log(store.CardEspecialidades);
    return (
        <div className="container pt-5">
				{/* <ul className="flex-nowrap d-flex flex-row overflow-scroll list-unstyled gap-1 px-0"> */}
					{infoEspecialidades.map(item => (
						// <li key={item.id} className="col-4 px-0 w-auto my-2">
							<CardEspecialidades key={item.id} titulo={item.titulo} descripcion={item.descripcion} url={item.url}  />
						// </li>
					))}
				{/* </ul> */}
			</div>
    );
};
export default VistaEspecialidades;

{/* <div className="col p-5" key={item.uid}>
//         <div className="p-2 g-col-6" style={{ width: "250px" }}>
//             <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
//             <div className="card-body p-7">
//                 <h5 className="card-title text-center">{item.name}</h5>
//                 <p>{store.detallespersonaje.gender}</p>
//                 <Link className='btn btn-primary mx-3' to={`/detailview/personaje/${item.uid}`}>Learn more!</Link>
//                 <button className='btn btn-warning'
//                     onClick={() => {
//                         let name = item.name
//                         actions.setFavorites(name)
//                     }}
//                 ><i className="fa fa-heart text-light"></i></button>
//             </div>
//         </div>
//     </div> */}