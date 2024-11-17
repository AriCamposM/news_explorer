import React from "react";
import myImage from '../../Images/Photocv.jpg';
import './autor.css';

function Author () {

    return (
        <>
            <div className="author">
                <div className="author__image-container">
                    <img className="author__image" alt="Author" src={myImage}/>
                </div>
                <div className="author__titles">

                    <h3 className="author__title">Acerca del autor</h3>

                    <p className="author__paragrap">
                        Soy desarrollador Fullstack con experiencia en tecnologías como React.js
                        , JavaScript, Node.js, Express.js y MongoDB. He trabajado en proyectos 
                        personales, creando aplicaciones web interactivas y eficientes. También 
                        tengo experiencia con herramientas como Figma, Webpack, Jest y plataformas
                        en la nube como Google Cloud.
                    </p>

                    <p className="author__paragrap-two">
                    Me enfoco en el aprendizaje continuo y en mejorar la experiencia del usuario, 
                    optimizando rendimiento y escalabilidad. Busco aplicar mis habilidades técnicas en un entorno profesional y contribuir a soluciones innovadoras.
                    </p>


                </div>

            </div>
        </>
    )
}

export default Author