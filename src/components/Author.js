import React from "react";
import ImageAutor from '../Images/autor__image.png';

function Author () {

    return (
        <>
            <div className="author">

                <img className="author__image" src={ImageAutor}/>

                <div className="author__titles">

                    <h3 className="author__title">Acerca del autor</h3>

                    <p className="author__paragrap">
                    Este bloque describe al autor del proyecto.
                    Aquí debe indicar tu nombre, a qué te dedicas y
                    qué tecnologías de desarrollo conoces.
                    </p>

                    <p className="author__paragrap-two">
                    También puedes hablar de tu experiencia con Practicum, de lo que
                    aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
                    </p>


                </div>

            </div>
        </>
    )
}

export default Author