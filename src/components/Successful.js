import React from "react";
import CloseIcon from '../Images/login__close.png'

function Successful () {


  return(
    <>
      <div className="successful">
        <form className="successful__form">
            <img src={CloseIcon} className="successful__close"/>
            <h5 className="successful__title">¡El registro se ha <span className="successful__span">completado con éxito!</span>  </h5>
            <p className="successful__paragraph">Inscribirse</p>
        </form>
      </div>
    </>
  )
}

export default Successful;