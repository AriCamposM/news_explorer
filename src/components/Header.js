import React from "react";
import HeaderNav from "./HeaderNav";
function Header ( { handleSearchNews, handleLogInPopup }) {

  const [keyword, setKeyword] = React.useState('');

  function handleKeyword (e) {
    setKeyword(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault();
    handleSearchNews(keyword);
  }




  return(
    <>
    <div className="header">

              <HeaderNav handleLogInPopup={handleLogInPopup}/>

                <div className="header__titles">
                    <h2 className="header__title">¿Qué está pasando <span className="header__span">en el mundo?</span></h2>
                    <p className="header__subtitle">Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu<span className="header__span">cuenta personal.</span></p>
                </div>

                <div className="header__search">
                    <form className="header__form" onSubmit={handleSubmit}>
                        <input className="header__input"
                        placeholder="Introduce un tema"
                        name="keyword"
                        type="text"
                        minLength="2"
                        maxLength="30"
                        value={keyword}
                        onChange={handleKeyword}
                        required
                        />
                        <button type="submit" className="header__search-button">Buscar</button>
                    </form>

                    <form className="header__form-mobile" onSubmit={handleSubmit}>
                        <input className="header__input-mobile"
                        placeholder="Introduce un tema"
                        name="keyword"
                        type="text"
                        minLength="2"
                        maxLength="30"
                        value={keyword}
                        onChange={handleKeyword}
                        />
                        <button  type="submit" className="header__search-button-mobile">Buscar</button>
                    </form>
                </div>
    </div>
    </>
  )
}

export default Header;