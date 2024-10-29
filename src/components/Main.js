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
  handleRedirectPopups }) {


    return (
        <>

            <Header handleSearchNews={handleSearchNews} handleLogInPopup={handleLogInPopup}  />

            {news ? <News news={news}/> : ''}


            { isPreloading ? <Preloader/> : ''}

            {noResults ? <NoResults/> : ''}

            <Author/>

            <Footer/>

            

            {isLogInOpen ? <Login handleLogInPopup={handleLogInPopup} handleRedirectPopups={handleRedirectPopups} /> : "" }


            { isSignUpOpen ? <Signup handleSignUpPopup={handleSignUpPopup} handleRedirectPopups={handleRedirectPopups} /> : " "}

            {/* <Successful/> */}




        </>
    )
}

export default Main