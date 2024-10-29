import React from "react";
import CloseIcon from '../Images/login__close.png'
function Login ({handleLogInPopup, handleRedirectPopups}) {

  return(
    <>
      <div className="login">
        <form className="login__form">
          <img className="login__close"  onClick={handleLogInPopup} src={CloseIcon}/>
          <h4 className="login__title">Iniciar sesión</h4>

          <label className="login__label-email">Correo electrónico</label>
          <input
          className="login__input-email"
          placeholder="Introduce tu correo electrónico"
          name="email"
          type="email"
          />

          <label className="login__label-password">Contraseña</label>
          <input
          className="login__input-password"
          placeholder="Introduce tu contraseña"
          name="email"
          type="password"
          />

          <button className="login__button">Iniciar sesión</button>

          <p className="login__footer">o <span className="login__span" onClick={handleRedirectPopups}>inscribirse</span></p>

        </form>
      </div>
    </>
  )
}

export default Login