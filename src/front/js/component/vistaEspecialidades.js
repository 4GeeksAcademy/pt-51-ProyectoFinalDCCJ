import React from "react";

const VistaEspecialidades = () => {
    return (
        <div className="accordion" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                       <h3>Pediatría</h3>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <strong>Consulta Pediátrica de Excelencia:</strong> Un Equipo de Expertos Compasivos.
                        Más de 15 años de experiencia: La consulta está dirigida por un equipo de pediatras altamente cualificados con más de 15 años de experiencia en el cuidado de niños desde el nacimiento hasta la adolescencia. Son reconocidos por su profunda expertise en la atención médica infantil y su compromiso con la excelencia.
                        Excelencia profesional: Todos los pediatras del equipo están certificados por la junta médica y poseen formación en las mejores universidades y hospitales del país. Se mantienen actualizados con las últimas investigaciones y avances en la medicina pediátrica para brindar la mejor atención posible a sus pacientes.
                        Un enfoque cálido y compasivo: Los pediatras se caracterizan por su trato cálido y compasivo con los niños. Saben cómo crear un ambiente seguro y acogedor para que los niños se sientan cómodos y puedan expresar sus necesidades y preocupaciones.
                        Atención integral y personalizada: La consulta ofrece una atención integral que abarca todos los aspectos de la salud del niño, desde el crecimiento y desarrollo hasta la prevención de enfermedades, la detección de problemas de salud y el tratamiento de enfermedades agudas y crónicas. El equipo de pediatras trabaja en estrecha colaboración con los padres para desarrollar un plan de cuidado personalizado para cada niño.
                        Tecnología de última generación: La consulta está equipada con tecnología de última generación para garantizar un diagnóstico preciso y un tratamiento eficaz.
                        Compromiso con la comunidad: La consulta participa activamente en la comunidad ofreciendo charlas informativas, talleres y eventos para promover la salud infantil.
                        En resumen, la Consulta Pediátrica de Excelencia ofrece una atención médica excepcional a los niños y sus familias. El equipo de pediatras altamente cualificados, su enfoque cálido y compasivo, sus habilidades de comunicación excepcionales y su compromiso con la atención integral y personalizada hacen de esta consulta una opción ideal para el cuidado de la salud de sus hijos.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Medicina interna
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Nutriología
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VistaEspecialidades