import React from "react";
import SavedHeader from "./SavedHeader";
import SavedCards from "./SavedCards";
import Footer from "./Footer";
function SavedNews ( ) {

  return(
    <>
      <div className="savednews">
          <SavedHeader/>
          <SavedCards/>
          <Footer/>
      </div>
    </>
  )

}


export default SavedNews;