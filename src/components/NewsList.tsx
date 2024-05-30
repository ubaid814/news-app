import React from "react";
import CustomCard from "./common/CustomCardNew";

interface NewsListProps {
    articles: TArticle[];
}

const NewsList: React.FC<NewsListProps> = ({articles}) => {

  return (
    <>
        {articles
          .map((article: TArticle) => (
            <CustomCard
              key={article.title}
              title={article.title}
              description={article.description}
              url={article.url}
              imageUrl={article.urlToImage}
              publishedAt={article.publishedAt}
              source={article.source.name}
              author={article.author}
            />
          ))}
    </>
  );
};

export default NewsList;
