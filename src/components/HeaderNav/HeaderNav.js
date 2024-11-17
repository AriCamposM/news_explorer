import React from "react";
import MenuHeader from '../../Images/header__menu.png';
import { CurrentUserStateContext } from "../../contexts/CurrentUserState.js";
import {UsernameContext} from "../../contexts/UsernameContext.js"
import LogOutIcon from '../../Images/header__logout.png';

import './header.css';

function HeaderNav ({ handleLogInPopup , handleLogOut , handleHomeClick, handleSavedArticlesClick}) {
  const CurrentUserState = React.useContext(CurrentUserStateContext);
  const Username = React.useContext(UsernameContext);

  const [ menuOpen, isMenuOpen] = React.useState(false);

  const  handleMenuButtonClick = () => {
      isMenuOpen(!menuOpen);
  }

  const handleHome = () =>{
    handleHomeClick();
  }

  const handleSavedArticles = () => {
    handleSavedArticlesClick();
  }

  const MenuBackground = `header__bar ${menuOpen ? "header__background" : ""}`;

  return(
    <>
      <div className={MenuBackground} >

                    <h1 className="header__logo">NewsExplorer</h1>
                    <div className="header__nav">
                        <p className="header__home" onClick={handleHome}>Inicio</p>

                        {CurrentUserState ? (
                          <p className="header__save" onClick={handleSavedArticles}>Artículos guardados</p>
                        ) : ''}

                        { CurrentUserState ? (
                          <button className="header__button-user">
                          {Username ? Username : ''}
                          <img  onClick={handleLogOut} className="header__logout-icon" src={LogOutIcon}/>
                        </button>
                        ) :(
                          <button className="header__button" onClick={handleLogInPopup}>Iniciar sesión</button>
                        )
                        }



                        <img className="header__menu" src={MenuHeader} onClick={handleMenuButtonClick}/>

                    </div>

                </div>
                {menuOpen ?
                <div className="header__menu-open">

                  <p className="header__menu-paragraph" onClick={handleHome}>Inicio</p>

                  {CurrentUserState ? (
                          <p className="header__menu-save" onClick={handleSavedArticles}>Artículos guardados</p>
                        ) : ''}

                  {CurrentUserState ?(
                    <button className="header__menu-user">
                      {Username ? Username : ''}
                      <img className="header__logout-icon" src={LogOutIcon}/>
                    </button>
                  ) : (
                    <button className="header__menu-button" onClick={handleLogInPopup}>Iniciar sesión</button>
                  )}


                </div> : ""}
    </>
  )
}

export default HeaderNav;