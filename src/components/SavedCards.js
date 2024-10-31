import React from "react";
import Card from "./Card";
function SavedCards ({ savedNews, handleUnSaveArticle }) {


  return(
    <>
      <div className="savedcards">
          <div className="savedcards__container">
          {savedNews ? (
            savedNews.map((article, index) => (
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
                favoritePage={true}
                handleUnSaveArticle={handleUnSaveArticle}
              />
            ))
          ) : (
           ''
          )}
          </div>
      </div>
    </>
  )
}

export default SavedCards;