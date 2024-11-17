import React from "react";
import Card from "../Card/Card";

import './news.css';

function News({ news, handleSaveArticleClick }) {
  // Estado para llevar el conteo de artículos visibles
  const [visibleCount, setVisibleCount] = React.useState(3);

  React.useEffect(() => {
    setVisibleCount(3);
  }, [news]);

  // Función para cargar más artículos
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Artículos actualmente visibles
  const visibleNews = news.slice(0, visibleCount);

  return (
    <>
      <div className="news">
        <h5 className="news__title">Resultados de la búsqueda</h5>

        <div className="news__container">
          {visibleNews.map((article, index) => (
            <Card
              article={article}
              keyword={article.keyword}
              key={index}
              source={article.source.name}
              title={article.title}
              publishedAt={article.publishedAt}
              description={article.description}
              urlToImage={article.urlToImage}
              url={article.url}
              newsPage={true}
              favoritePage={false}
              handleSaveArticleClick={handleSaveArticleClick}
            />
          ))}
        </div>

        {/* Condición para mostrar el botón "Ver más" solo si hay artículos restantes */}
        {visibleCount < news.length && (
          <div className="news__button-container">
            <button onClick={handleLoadMore} className="news__button">
              Ver más
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default News;
