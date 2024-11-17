import React from "react";

import './preloader.css';

function Preloader () {

  return(
    <>
      <div className="preloader">
          <i className="preloader-circle"></i>
          <p className="preloader-text">Buscando noticias...</p>
      </div>
    </>
  )
}

export default Preloader