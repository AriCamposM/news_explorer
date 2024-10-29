import React from "react";
import MenuHeader from '../Images/header__menu.png';

function HeaderNav ({ handleLogInPopup}) {

  const [ menuOpen, isMenuOpen] = React.useState(false);

  const  handleMenuButtonClick = () => {
      isMenuOpen(!menuOpen);
  }

  const MenuBackground = `header__bar ${menuOpen ? "header__background" : ""}`;


  return(
    <>
      <div className={MenuBackground}>

                    <h1 className="header__logo">NewsExplorer</h1>
                    <div className="header__nav">
                        <p className="header__home">Inicio</p>
                        <button className="header__button" onClick={handleLogInPopup}>Iniciar sesión</button>
                        <img className="header__menu" src={MenuHeader} onClick={handleMenuButtonClick}/>

                    </div>

                </div>
                {menuOpen ?
                <div className="header__menu-open">
                  <p className="header__menu-paragraph">Inicio</p>
                  <button className="header__menu-button" onClick={handleLogInPopup}>Iniciar sesión</button>
                </div> : ""}
    </>
  )
}

export default HeaderNav;