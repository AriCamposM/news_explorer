import React from "react";
import SavedHeader from "./SavedHeader";
import SavedCards from "./SavedCards";
import Footer from "./Footer";
function SavedNews ( { handleLogOut ,savedNews, handleUnSaveArticle, handleHomeClick, handleSavedArticlesClick }) {

  return(
    <>
      <div className="savednews">

          <SavedHeader
           handleLogOut={handleLogOut}
           savedNews={savedNews}
           handleHomeClick={handleHomeClick}
           handleSavedArticlesClick={handleSavedArticlesClick}/>

          <SavedCards
          savedNews={savedNews}
          handleUnSaveArticle={handleUnSaveArticle}
          />

          <Footer handleHomeClick={handleHomeClick}/>
      </div>
    </>
  )

}


export default SavedNews;