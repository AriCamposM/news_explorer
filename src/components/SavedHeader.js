import React from "react";
import MenuHeader from '../Images/savednewsheader__menu.png';

import LogOutIcon from '../Images/header__logout-saved.png';
import {UsernameContext} from "../contexts/UsernameContext.js"


function SavedHeader ( { handleLogOut,
  savedNews,
  handleHomeClick,
  handleSavedArticlesClick, }) {

  const Username = React.useContext(UsernameContext)
  const [ menuOpen, isMenuOpen] = React.useState(false);

  const  handleMenuButtonClick = () => {
      isMenuOpen(!menuOpen);
  }

  const handleLogOutClick = () =>{
    handleLogOut()
  }

  const handleHome = () =>{
    handleHomeClick();
  }

  const handleSavedArticles = () => {
    handleSavedArticlesClick();
  }


  console.log(savedNews)

  // Contar palabras clave
  const keywordCounts = {};

  if (savedNews && Array.isArray(savedNews)) {
    savedNews.forEach(news => {
      // Verifica que keyword exista y sea una cadena
      if (news.keyword && typeof news.keyword === 'string') {
        const keyword = news.keyword; // Asignar la palabra clave
        keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1; // Contar la palabra clave
      }
    });
  }

  // Convertir el objeto a un arreglo y ordenarlo
  const sortedKeywords = Object.entries(keywordCounts)
    .sort((a, b) => b[1] - a[1]) // Ordenar por el conteo
    .map(([keyword]) => keyword); // Obtener solo las palabras clave

  // Preparar las palabras clave para mostrar
  const displayedKeywords = sortedKeywords.slice(0, 2); // Dos palabras clave
  const remainingCount = sortedKeywords.length > 2 ? sortedKeywords.length - 2 : 0; // Contar las restantes

  const MenuBackground = `savedheader__bar ${menuOpen ? "savedheader__background" : ""}`;

  return(
  <>
          <div className={MenuBackground}>

                    <h1 className="savedheader__logo">NewsExplorer</h1>
                    <div className="savedheader__nav">
                        <p className="savedheader__home" onClick={handleHome}>Inicio</p>
                        <p className="savedheader__save" onClick={handleSavedArticles}>Artículos guardados</p>
                        <button className="savedheader__button">{Username}
                          <img className="savedheader__user-icon" onClick={handleLogOutClick} src={LogOutIcon}/>
                        </button>
                        <img className="savedheader__menu" src={MenuHeader} onClick={handleMenuButtonClick}/>

                    </div>

                </div>
                {menuOpen ?
          <div className="savedheader__menu-open">
            <p className="savedheader__menu-paragraph" onClick={handleHome}>Inicio</p>
            <p className="savedheader__menu-save" onClick={handleSavedArticles}>Artículos guardados</p>
            <button className="savedheader__menu-button">{Username}
            <img className="savedheader__user-icon" onClick={handleLogOutClick} src={LogOutIcon}/>
            </button>
          </div> : ""}

        <div className="savedheader__info">
            <p className="savedheader__articles-saved">Artículos guardados</p>
            <h6 className="savedheader__articles-text">{Username}, tienes {savedNews ? savedNews.length : ''} artículos guardados</h6>
            <p className="savedheader__keywords">
            Por palabras clave: <b>{displayedKeywords.join(', ')}{remainingCount > 0 ? ` y ${remainingCount} más` : ''}</b>
              </p>
        </div>
  </>
 )
}

export default SavedHeader;