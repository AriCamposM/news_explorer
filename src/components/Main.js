import React from "react";
import Author from "./Author";
import Footer from "./Footer";
import Header from "./Header";

import Login from "./Login";
import Signup from "./Signup";
import Successful from "./Successful";
import News from "./News";

import Preloader from "./Preloader";
import NoResults from "./NoResults";

function Main ({
  news,
  handleSearchNews ,
  isPreloading,
  noResults,
  handleLogInPopup,
  isLogInOpen,
  handleSignUpPopup,
  isSignUpOpen,
  handleRedirectPopups,
  handleSignUp,
  isSuccessfulOpen,
  onClose,
  handleSignIn,
  handleLogOut,
  handleSaveArticleClick,
  handleHomeClick,
  handleSavedArticlesClick }) {


    return (
        <>

            <Header handleSearchNews={handleSearchNews} handleLogInPopup={handleLogInPopup} handleLogOut={handleLogOut} handleHomeClick={handleHomeClick} handleSavedArticlesClick={handleSavedArticlesClick}/>

            {news ? <News news={news} handleSaveArticleClick={handleSaveArticleClick}/> : ''}


            { isPreloading ? <Preloader/> : ''}

            {noResults ? <NoResults/> : ''}

            <Author/>

            <Footer/>



            {isLogInOpen ? <Login handleLogInPopup={handleLogInPopup} handleRedirectPopups={handleRedirectPopups} handleSignIn={handleSignIn} /> : "" }


            { isSignUpOpen ? <Signup handleSignUpPopup={handleSignUpPopup} handleRedirectPopups={handleRedirectPopups} handleSignUp={handleSignUp} /> : " "}

            { isSuccessfulOpen ? <Successful onClose={onClose} handleLogInPopup={handleLogInPopup}  /> : "" }




        </>
    )
}

export default Main