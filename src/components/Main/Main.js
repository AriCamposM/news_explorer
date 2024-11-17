import React from "react";
import Author from "../Author/Author";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Successful from "../Successful/Successful";
import News from "../News/News";

import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";

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
  handleSavedArticlesClick}) {


    return (
        <>

            <Header
            handleSearchNews={handleSearchNews}
            handleLogInPopup={handleLogInPopup}
            handleLogOut={handleLogOut}
            handleHomeClick={handleHomeClick}
            handleSavedArticlesClick={handleSavedArticlesClick}
            />

            {news ? <News news={news} handleSaveArticleClick={handleSaveArticleClick}/> : ''}


            { isPreloading ? <Preloader/> : ''}

            {noResults ? <NoResults/> : ''}

            <Author/>

            <Footer handleHomeClick={handleHomeClick}/>



            {isLogInOpen ? <Login handleLogInPopup={handleLogInPopup} handleRedirectPopups={handleRedirectPopups} handleSignIn={handleSignIn} /> : "" }


            { isSignUpOpen ? <Signup handleSignUpPopup={handleSignUpPopup} handleRedirectPopups={handleRedirectPopups} handleSignUp={handleSignUp} /> : " "}

            { isSuccessfulOpen ? <Successful onClose={onClose} handleLogInPopup={handleLogInPopup}  /> : "" }




        </>
    )
}

export default Main