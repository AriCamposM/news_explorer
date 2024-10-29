import React, { useState } from "react";
import Bookmark from '../Images/card__bookmark-active.png';
import TrashIcon from '../Images/card__trash.png';
import { CurrentUserStateContext } from "../contexts/CurrentUserState";

function Card({ source, title, publishedAt, description, urlToImage, url, newsPage }) {
  const CurrentUserState = React.useContext(CurrentUserStateContext);

  // Estado local para manejar si el cursor está sobre el icono de favorito
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card__container">
          <img className="card__image" src={urlToImage} alt="Article" />

          {newsPage && (
            <div
              className="card__favorite"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img className="card__bookmark" src={Bookmark} alt="Bookmark" />
            </div>
          )}

          {/* Mostrar mensaje de inicio de sesión si el usuario no está logueado y está sobre el ícono */}
          {!CurrentUserState && isHovering && (
            <div className="card__signin">
              <p className="card__signin-text">Inicia sesión para guardar artículos</p>
            </div>
          )}

          <div className="card__topic">
            <p className="card__topic-text">{ "null"}</p>
          </div>

          <div className="card__trash">
            <img className="card__trash-icon" src={TrashIcon} alt="Trash" />
          </div>

          <div className="card__removed">
            <p className="card__removed-text">Remove from saved</p>
          </div>
        </div>

        <p className="card__date">{publishedAt}</p>
        <h6 className="card__title">
          <a className="card__ref" href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h6>
        <p className="card__content">{description}</p>
        <p className="card__author">{source}</p>
      </div>
    </>
  );
}

export default Card;
