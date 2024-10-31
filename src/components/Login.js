import React from "react";
import CloseIcon from '../Images/login__close.png'
function Login ({handleLogInPopup, handleRedirectPopups, handleSignIn}) {

  // Estados para cada input
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //Estados de error
  const [emailError, setEmailError] = React.useState('');

  const [passwordError, setPasswordError] = React.useState('');

  // Manejar el cambio en los inputs
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('')
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('')
  };

  function handleSubmit (event) {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
    if (!emailPattern.test(email)) {
      setEmailError('Dirección de correo electrónico no válida');
      return; // No proceder si el correo es inválido
    }

    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
      return; // No proceder si la contraseña es inválida
    }


    console.log(`This is Password: ${password} , This is Email : ${email}`)
    handleSignIn(password, email)


    setEmail('');
    setPassword('');
    handleLogInPopup();
  }

  return(
    <>
      <div className="login">
        <form className="login__form" noValidate onSubmit={handleSubmit}>
          <img className="login__close"  onClick={handleLogInPopup} src={CloseIcon}/>
          <h4 className="login__title">Iniciar sesión</h4>

          <label className="login__label-email">Correo electrónico</label>
          <input
          required
          className="login__input-email"
          placeholder="Introduce tu correo electrónico"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          />
          {emailError && <p className="login__error">{emailError}</p>}

          <label className="login__label-password">Contraseña</label>
          <input
          required
          className="login__input-password"
          placeholder="Introduce tu contraseña"
          name="email"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          />
          {passwordError && <p className="login__error">{passwordError}</p>}

          <button
          className="login__button"
          disabled={!email.trim() || !password.trim()}
          >Iniciar sesión
          </button>

          <p className="login__footer">o <span className="login__span" onClick={handleRedirectPopups}>inscribirse</span></p>

        </form>
      </div>
    </>
  )
}

export default Login