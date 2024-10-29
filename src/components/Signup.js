import React from "react";
import CloseIcon from '../Images/login__close.png'

function Signup ({ handleSignUpPopup, handleRedirectPopups }) {


  return(
    <>
      <div className="signup">
        <form className="signup__form">
          <img className="signup__close" onClick={handleSignUpPopup} src={CloseIcon} />

          <h4 className="signup__title">Inscribirse</h4>

          <label className="signup__label-email">Correo electrónico</label>
          <input
          className="signup__input-email"
          placeholder="Introduce tu correo electrónico"
          name="email"
          type="email"
          />

          <label className="signup__label-password">Contraseña</label>
          <input
          className="signup__input-password"
          placeholder="Introduce tu contraseña"
          name="email"
          type="password"
          />

          <label className="signup__label-user">Nombre de usuario</label>
          <input
          className="signup__input-user"
          placeholder="Introduce tu nombre de usuario"
          name="email"
          type="password"
          />

          <button className="signup__button">Inscribirse</button>

          <p className="signup__footer">o <span className="signup__span" onClick={handleRedirectPopups}>Iniciar sesión</span></p>

        </form>
      </div>


    </>
  )
}

export default Signup;