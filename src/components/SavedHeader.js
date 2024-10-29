import React from "react";
import MenuHeader from '../Images/savednewsheader__menu.png';
function SavedHeader ( ) {
  const [ menuOpen, isMenuOpen] = React.useState(false);

  const  handleMenuButtonClick = () => {
      isMenuOpen(!menuOpen);
  }

  const MenuBackground = `savedheader__bar ${menuOpen ? "savedheader__background" : ""}`;

  return(
  <>
          <div className={MenuBackground}>

                    <h1 className="savedheader__logo">NewsExplorer</h1>
                    <div className="savedheader__nav">
                        <p className="savedheader__home">Inicio</p>
                        <button className="savedheader__button">Iniciar sesión</button>
                        <img className="savedheader__menu" src={MenuHeader} onClick={handleMenuButtonClick}/>

                    </div>

                </div>
                {menuOpen ?
          <div className="savedheader__menu-open">
            <p className="savedheader__menu-paragraph">Inicio</p>
            <button className="savedheader__menu-button">Iniciar sesión</button>
          </div> : ""}

        <div className="savedheader__info">
            <p className="savedheader__articles-saved" >Artículos guardados</p>
            <h6 className="savedheader__articles-text">Elise, tienes 5 artículos guardados</h6>
            <p className="savedheader__keywords">Por palabras clave: <b>Naturaleza, Yellowstone, y 2 más</b></p>
        </div>
  </>
 )
}

export default SavedHeader;