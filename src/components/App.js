import React from 'react';
import logo from '../logo.svg';
import Main from './Main';

import { CurrentUserStateContext } from '../contexts/CurrentUserState.js';

import api from '../utils/Api.js';

import SavedNews from './SavedNews.js';

function App() {

  const [ news, setNews ] = React.useState(null)

  const [ isPreloading, setIsPreloading] = React.useState(false);

  const [ noResults, setNoResults] = React.useState(false);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [ isLogInOpen, setisLogInOpen ] = React.useState(false);

  const [ isSignUpOpen, setIsSignUpOpen ] = React.useState(false)

  const handleLogInPopup = () => {
    setisLogInOpen(!isLogInOpen);
  }

  const handleLogIn = () => {
    setIsLoggedIn(true);
  }

  const handleSignUpPopup = () => {
    setIsSignUpOpen(!isSignUpOpen);
  }

  const handleRedirectPopups = () =>{
    setIsSignUpOpen(!isSignUpOpen);
    setisLogInOpen(!isLogInOpen);
  }

  function handleSearchNews(keyword){

    setIsPreloading(true)
    return api
    .searchNewsByKeyword(keyword)
    .then((newsData) => {
      setIsPreloading(false)
      console.log(newsData);
      if (newsData.totalResults > 0) {
        // Guardar solo los artículos en el estado `news`
        setNews(newsData.articles);
        setNoResults(false);
        // Guardar solo los artículos en `localStorage`
        localStorage.setItem('news', JSON.stringify(newsData.articles));
    } else {
        setIsPreloading(false);
        setNoResults(true);
        // Opcional: Manejar la ausencia de resultados en el estado o UI
        setNews(null); // Limpiar el estado de noticias
    }
    })
    .catch((err) => {
      setIsPreloading(false)
      console.log("Error searching news: ", err);
    })
  }


  return (
    <div>
      <CurrentUserStateContext.Provider value={isLoggedIn}>
      <Main

      news={news}
      handleSearchNews={handleSearchNews}

      isPreloading={isPreloading}//
      noResults={noResults}//

      handleLogInPopup={handleLogInPopup}
      isLogInOpen={isLogInOpen}

      handleSignUpPopup={handleSignUpPopup}
      isSignUpOpen={isSignUpOpen}

      handleRedirectPopups={handleRedirectPopups}

      />

    {/* <SavedNews/> */}
    </CurrentUserStateContext.Provider>
    </div>
  );
}

export default App;
