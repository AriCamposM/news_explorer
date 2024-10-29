import React from "react";
import Card from "./Card";
function SavedCards () {


  return(
    <>
      <div className="savedcards">
          <div className="savedcards__container">
              <Card/>
              <Card/>
              <Card/>
          </div>
      </div>
    </>
  )
}

export default SavedCards;