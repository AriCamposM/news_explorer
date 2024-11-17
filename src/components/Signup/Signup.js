import React from "react";
import CloseIcon from '../../Images/login__close.png'

import './signup.css';

function Signup ({ handleSignUpPopup, handleRedirectPopups, handleSignUp }) {

  // Estados para cada input
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  // Estados de error
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');

  // Manejar el cambio en los inputs
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(''); // Limpiar el error al cambiar el valor
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(''); // Limpiar el error al cambiar el valor
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError(''); // Limpiar el error al cambiar el valor
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
    const usernamePattern = /^[a-zA-Z0-9]+$/; // Expresión regular para validar que el username contenga solo caracteres alfanuméricos

    // Validación de email
    if (!emailPattern.test(email)) {
      setEmailError('Dirección de correo electrónico no válida');
      return; // No proceder si el correo es inválido
    }

    // Validación de contraseña
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
      return; // No proceder si la contraseña es inválida
    }

    // Validación de nombre de usuario
    if (username.length < 2 || username.length > 30) {
      setUsernameError('El nombre de usuario debe tener entre 2 y 30 caracteres');
      return; // No proceder si el nombre de usuario no está en el rango
    }
    if (!usernamePattern.test(username)) {
      setUsernameError('El nombre de usuario solo debe contener caracteres alfanuméricos');
      return; // No proceder si el nombre de usuario tiene caracteres no válidos
    }


    handleSignUp(password ,email, username );
    setEmail('')
    setPassword('')
    setUsername('')
  };

  return(
    <>
      <div className="signup">
        <form className="signup__form" noValidate onSubmit={handleSubmit}>
          <img className="signup__close" onClick={handleSignUpPopup} src={CloseIcon} />

          <h4 className="signup__title">Inscribirse</h4>

          <label className="signup__label-email">Correo electrónico</label>
          <input
          required
          className="signup__input-email"
          placeholder="Introduce tu correo electrónico"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          />
          {emailError && <p className="signup__error">{emailError}</p>}

          <label className="signup__label-password">Contraseña</label>
          <input
          required
          className="signup__input-password"
          placeholder="Introduce tu contraseña"
          name="email"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          minLength={8}
          />
          {passwordError && <p className="signup__error">{passwordError}</p>}

          <label className="signup__label-user">Nombre de usuario</label>
          <input
          required
          className="signup__input-user"
          placeholder="Introduce tu nombre de usuario"
          name="email"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          minLength={2}
          maxLength={30}
          />
          {usernameError && <p className="signup__error">{usernameError}</p>}

          <button
          className="signup__button"
          disabled={!email.trim() || !password.trim() || !username.trim()}
          >Inscribirse
          </button>

          <p className="signup__footer">o <span className="signup__span" onClick={handleRedirectPopups}>Iniciar sesión</span></p>

        </form>
      </div>


    </>
  )
}

export default Signup;