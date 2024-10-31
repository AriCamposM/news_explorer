import React from "react";
import CloseIcon from '../Images/login__close.png'

function Successful ({ onClose, handleLogInPopup}) {

  const handleLogInClick = () =>{
    onClose();
    handleLogInPopup()
  }

  return(
    <>
      <div className="successful">
        <form className="successful__form">
            <img src={CloseIcon} onClick={onClose} className="successful__close"/>
            <h5 className="successful__title">¡El registro se ha <span className="successful__span">completado con éxito!</span>  </h5>
            <p onClick={handleLogInClick} className="successful__paragraph">Iniciar sesión</p>
        </form>
      </div>
    </>
  )
}

export default Successful;