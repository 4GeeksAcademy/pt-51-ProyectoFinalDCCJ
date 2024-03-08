import React, { useState, useEffect, useContext } from "react";
import VistaHomeDoctores from "../component/vistaHomeDoctores";
import VistaHomeEspecialidades from "../component/vistaHomeEspecialidades";
import { Context } from "../store/appContext";
import Hospital1 from "../../img/Hospital1.jpg";
import clinica1 from "../../img/clinica1.jpg";
import clinica2 from "../../img/clinica2.jpg";
import clinica3 from "../../img/clinica3.jpg";
import clinica7 from "../../img/clinica7.jpg";
import clinica5 from "../../img/clinica5.jpg";
import "../../styles/home.css";
import "../../styles/color.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.DoctoresHome();
    actions.EspecialidadesHome();
  }, []);

  const showDoctores = store.HomeDoctores ? store.HomeDoctores.slice(0, 3) : [];
  const showEspecialidades = store.Especialidades ? store.Especialidades.slice(0, 3) : [];

  return (
   <div > 
    <div className="container">
      <div className="text-center mt-5 mb-5">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Hospital1} className="d-block w-100 img-fluid mx-auto" alt="Hospital 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Su salud, nuestra prioridad</h5>
                <p>En nuestra clínica, su salud es nuestra principal prioridad. Nos dedicamos a brindarle la mejor atención posible, con un enfoque personalizado y compasivo.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={clinica2} className="d-block w-100 img-fluid mx-auto" alt="Clinica 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Atención médica personalizada a su alcance</h5>
                <p>En nuestra clínica, nos enfocamos en brindar atención médica personalizada y de alta calidad a cada uno de nuestros pacientes. Con un equipo de médicos experimentados y compasivos, nos dedicamos a comprender sus necesidades individuales y desarrollar un plan de tratamiento que se adapte a usted.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={clinica7} className="d-block w-100 img-fluid mx-auto" alt="Clinica 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tecnología de vanguardia para su bienestar</h5>
                <p>Estamos orgullosos de ofrecer la tecnología médica más avanzada para el diagnóstico y tratamiento de una amplia gama de afecciones. Nuestro equipo está altamente capacitado en el uso de estas tecnologías para garantizar que reciba la mejor atención posible.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={clinica5} className="d-block w-100 img-fluid mx-auto" alt="Clinica 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cuidando tu Salud, Inspirando Confianza</h5>
                <p>Buscamos ser un socio en el viaje hacia la salud y el bienestar</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Hospital1} className="d-block w-100 img-fluid mx-auto" alt="Hospital 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={clinica2} className="d-block w-100 img-fluid mx-auto" alt="Clinica 2" />
            </div>
            <div className="carousel-item">
              <img src={clinica7} className="d-block w-100 img-fluid mx-auto" alt="Clinica 3" />
            </div>
            <div className="carousel-item">
              <img src={clinica5} className="d-block w-100 img-fluid mx-auto" alt="Clinica 3" />
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>

      <div className="col-12 text-center">
        <ul className="row list-unstyled">
          {showDoctores.map(item => (
            <li key={item.id} className="col-lg-4 col-md-6 mb-2">
              <VistaHomeDoctores nombre={item.nombre} apellido={item.apellido} imagen={item.Url_imagen} />
            </li>
          ))}
        </ul>
      </div>

      {/* <div>
        <p className="font-weight-bold display-4 me-5">Clínica</p>
        <img src={clinica1} className="img-fluid w-80 mx-auto" alt="clinica" />
      </div> */}

      <div className="col-12">
        <ul className="row list-unstyled">
          {showEspecialidades.map(item => (
            <li key={item.id} className="col-lg-4 col-md-6 mb-2">
              <VistaHomeEspecialidades nombre={item.nombre} descripcion={item.descripcion} imagen={item.Url_imagen} />
            </li>
          ))}
        </ul>
      </div>
    </div> 
  </div> 
  );
};

// className="col-4 px-0 w-auto my-2"			
// className="flex-nowrap d-flex flex-row list-unstyled gap-1 px-0 mx-auto"
// className="col-12"
