import React from "react";
import IconNotFound from '../Images/not-found_v1.png';
function NoResults () {

  return(
    <>
      <div className="noresults">
          <img className="noresults__image" src={IconNotFound}/>
          <h6 className="noresults__title">No se encontró nada</h6>
          <p className="noresults__paragraph">Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda.</p>
      </div>
    </>
  )
}

export default NoResults;