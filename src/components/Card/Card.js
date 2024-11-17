import React, { useState } from "react";
import Bookmark from '../../Images/card__bookmark-active.png';
import TrashIcon from '../../Images/card__trash.png';
import { CurrentUserStateContext } from "../../contexts/CurrentUserState";
import BookmarkActive from '../../Images/card__bookmark-true.png';
import imageNotFound from '../../Images/404__image.jpg';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

import './card.css';

function Card({ article, keyword, source, title, publishedAt, description, urlToImage, url, newsPage, favoritePage, handleSaveArticleClick, handleUnSaveArticle }) {
  const CurrentUserState = React.useContext(CurrentUserStateContext);

  // Function to validate the date
  const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
  };

  // Formatear fecha
  const date = new Date(publishedAt);
  const formattedDate = isValidDate(date)
    ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: es })
    : "Fecha no válida";

  // Estado local para manejar si el cursor está sobre el icono de favorito
  const [isHovering, setIsHovering] = useState(false);

  const [ isFavorite, setIsFavorite] = React.useState(false)


  const handleFavoriteClick = () => {
    if(CurrentUserState){
      setIsFavorite(true)
      handleSaveArticleClick(article);
    }
  }

  const handleDeleteClick = ( ) =>{
    if(CurrentUserState){
      handleUnSaveArticle(article)
    }
  }

  React.useEffect(() =>{
    setIsFavorite(false)
  },[article])

  return (
    <>
      <div className="card">
        <div className="card__container">
          <img className="card__image"
          onError={(e) => e.target.src = imageNotFound}
          src={urlToImage || imageNotFound}
          alt="Article" />

          {newsPage && (
            <div
              className="card__favorite"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {isFavorite ?  <img onClick={handleFavoriteClick} className="card__bookmark-favorite" src={BookmarkActive} alt="Bookmark" /> : <img onClick={handleFavoriteClick} className="card__bookmark" src={Bookmark} alt="Bookmark" />}

            </div>
          )}

          {/* Mostrar mensaje de inicio de sesión si el usuario no está logueado y está sobre el ícono */}
          {!CurrentUserState && isHovering && (
            <div className="card__signin">
              <p className="card__signin-text">Inicia sesión para guardar artículos</p>
            </div>
          )}

         {favoritePage && (
          <div className="card__topic">
            <p className="card__topic-text">{keyword ? keyword : "NotFound"}</p>
          </div>
        )}

          {favoritePage && (
            <div className="card__trash">
            <img className="card__trash-icon" onClick={handleDeleteClick} src={TrashIcon} alt="Trash" />
          </div>
        )}

          <div className="card__removed">
            <p className="card__removed-text">Remove from saved</p>
          </div>
        </div>

        <p className="card__date">{formattedDate}</p>
        <h6 className="card__title">
          <a className="card__ref" href={url} target="_blank" rel="noopener noreferrer">
            {title ==="[Removed]" ? "Articulo Eliminado" : title}
          </a>
        </h6>
        <p className="card__content">{description  ==="[Removed]" ? "Lamentamos las molestias, este artículo ha sido eliminado y no está disponible en este momento." : description}</p>
        <p className="card__author">
          {source  ==="[Removed]" ? "Información del autor no disponible": source}</p>
      </div>
    </>
  );
}

export default Card;
