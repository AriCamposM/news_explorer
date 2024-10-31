import React from "react";
import Main from "./Main";

import { CurrentUserStateContext } from "../contexts/CurrentUserState.js";
import {UsernameContext} from "../contexts/UsernameContext.js"

import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

import api from "../utils/Api.js";
import * as MainApi from '../utils/MainApi.js';

import SavedNews from "./SavedNews.js";

function App() {
  const [news, setNews] = React.useState(null);

  const [savedNews, setSavedNews] = React.useState(null)

  const [isPreloading, setIsPreloading] = React.useState(false);

  const [noResults, setNoResults] = React.useState(false);

  //Controla el contexto a los componentes si esta logeado el usuario
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  //Controla contexto del nombre de usuario
  const [username, setUsername] = React.useState('')

  const [token, setToken] = React.useState('')

  const [isLogInOpen, setisLogInOpen] = React.useState(false);

  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);

  const [ isSuccessfulOpen, setIsSuccessfulOpen] = React.useState(false);

  const [isCheckingAuth, setIsCheckingAuth] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    function handleTokenCheck () {
      if(localStorage.getItem('jwt')) {
        const token = localStorage.getItem('jwt');

        MainApi.checkToken(token).then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setToken(token);
            setUsername(res.name)
          }
        })
        .catch((err) => console.log("Token check failed", err))
        .finally(() => setIsCheckingAuth(false));
      } else {
        setIsCheckingAuth(false);
      }
    }
    // Verifica el token al cargar el componente
    handleTokenCheck();
  },[isLoggedIn])

  React.useEffect(( ) => {

    if (localStorage.getItem("news")) {
      const articlesLocal = JSON.parse(localStorage.getItem("news"));
      setNews(articlesLocal);
    }

    if(token){
      MainApi.getArticles(token)
      .then((articles) => {
        setSavedNews(articles)
      })
      .catch((err) =>{
        console.error("Error al obtener los articulos guardados:", err);
          console.log(`El error es el siguiente : ${err}`)
      })
    }

  }, [token])



//Función que maneja los inicios de sesión
  const handleSignIn = (password, email) => {
    MainApi.authorize(password,email)
    .then((data)=>{
      if(data.token){
        setIsLoggedIn(true);
      }
    })
    .catch(err => console.log(err))
  };


//Manejar salir de sesion
  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
  }

// Maneja los registros de Login
  const handleSignUp = (password, email, name) => {
    MainApi.register(password, email, name)
    .then((data) => {
      console.log(data)
      handleSignUpPopup();
      setIsSuccessfulOpen(true);
    })
    .catch(err => console.log(err))
  }

//Popup LogIn
  const handleLogInPopup = () => {
    setisLogInOpen(!isLogInOpen);
  };

//Popup Signup
  const handleSignUpPopup = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

// Pare redireccionar entre sigin y signup
  const handleRedirectPopups = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setisLogInOpen(!isLogInOpen);
  };

// Funcion para cerrar Popups
  const closeAllPopups = () => {
    setIsSignUpOpen(false)
    setisLogInOpen(false)
    setIsSuccessfulOpen(false)
  }

// Guardar Articulos
  const handleSaveArticleClick = (article) => {
  const token = localStorage.getItem('jwt'); // Suponiendo que el token está en localStorage
  if (!token) {
    console.error('Error: No token available');
    return;
  }

  const articleData = {
    keyword: article.keyword || "Default Keyword", // Asigna un valor por defecto si no existe
    title: article.title,
    description: article.description,
    date: article.publishedAt,
    source: article.source.name,
    url: article.url,
    urlToImage: article.urlToImage,
  };

  MainApi.saveArticle(token, articleData)
    .then((savedArticle) => {
      if (savedArticle.error) {
        console.error('Error al guardar el artículo');
      } else {
        console.log('Artículo guardado:', savedArticle);

        setSavedNews((prevSavedNews) => [...prevSavedNews, savedArticle]);
      }
    })
    .catch((err) => console.error(`Error al guardar el artículo: ${err}`));
  };

// Eliminar Noticias
  const handleUnSaveArticle = (article) => {
  const token = localStorage.getItem('jwt'); // Suponiendo que el token está en localStorage
  if (!token) {
    console.error('Error: No token available');
    return;
  }

  console.log(article._id)

  MainApi.unSaveArticle(token, article._id)
    .then(() => {
      setSavedNews((state) => state.filter((a) => a._id !== article._id))
    })
    .catch((err)=>{
      console.log(`Error UnSaving Article : ${err}`);
    })
  };

// Redirige a Inicio
  const handleHomeClick = () => {
    navigate('/')
  }

//Redirige a Articulos Guardados
  const handleSavedArticlesClick = () => {
    navigate('/saved-news')
  }

//Busqueda de noticias con el Search
  function handleSearchNews(keyword) {
    setIsPreloading(true);
    return api
      .searchNewsByKeyword(keyword)
      .then((newsData) => {
        setIsPreloading(false);
        console.log(newsData);
        if (newsData.totalResults > 0) {
          const updatedArticles = newsData.articles.map(article => ({
            ...article,
            keyword: keyword // Agregar la keyword a cada artículo
          }));

          // Guardar solo los artículos en el estado `news`
          setNews(updatedArticles);
          setNoResults(false);
          // Guardar solo los artículos en `localStorage`
          localStorage.setItem("news", JSON.stringify(updatedArticles));
          console.log(keyword);
          localStorage.setItem("keyword", JSON.stringify(keyword));
        } else {
          setIsPreloading(false);
          setNoResults(true);
          // Opcional: Manejar la ausencia de resultados en el estado o UI
          setNews(null); // Limpiar el estado de noticias
        }
      })
      .catch((err) => {
        setIsPreloading(false);
        console.log("Error searching news: ", err);
      });
  }

  return (
    <div>
      <UsernameContext.Provider value={username}>
      <CurrentUserStateContext.Provider value={isLoggedIn}>
      <Routes>
        <Route path="/" element={
            <>
            <Main
              news={news}
              handleSearchNews={handleSearchNews}
              isPreloading={isPreloading}
              noResults={noResults}
              handleLogInPopup={handleLogInPopup}
              isLogInOpen={isLogInOpen}
              handleSignUpPopup={handleSignUpPopup}
              isSignUpOpen={isSignUpOpen}
              handleRedirectPopups={handleRedirectPopups}
              handleSignUp={handleSignUp}
              isSuccessfulOpen={isSuccessfulOpen}
              onClose={closeAllPopups}
              handleSignIn={handleSignIn}
              handleLogOut={handleLogOut}
              handleSaveArticleClick={handleSaveArticleClick}
              handleHomeClick={handleHomeClick}
              handleSavedArticlesClick={handleSavedArticlesClick}
            />
        </>
         }
        />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} isCheckingAuth={isCheckingAuth} />} >

         <Route path="/saved-news" element={<SavedNews
          handleLogOut={handleLogOut}
          savedNews={savedNews}
          handleUnSaveArticle={handleUnSaveArticle}
          handleHomeClick={handleHomeClick}
          handleSavedArticlesClick={handleSavedArticlesClick}
         />}/>

        </Route>

      </Routes>
      </CurrentUserStateContext.Provider>
      </UsernameContext.Provider>

    </div>

  );
}

export default App;
