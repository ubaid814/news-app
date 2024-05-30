import React from "react";
import { Box, styled } from "@mui/material";
import useArticles from "../Hooks/useArticles";
import NewsPagination from "./NewsPagination";
import NewsList from "./NewsList";

interface NewsProps {
    articles: TArticle[];
}
type UseArticlesFunction = () => TArticle[];

const ContainerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1rem",
  marginTop: "1rem",
});

const withArticles = (Component: React.FC<NewsProps>, useArticles: UseArticlesFunction) => {
        return function WrappedComponent(props: NewsProps) {
            const articles = useArticles();
            return <Component {...props} articles={articles} />;
        }
    }

const News: React.FC<NewsProps> = ({articles}) => {
    return (
        <>
            <ContainerBox style={{ display: "flex", flexDirection: "row" }}>
                <NewsList articles={articles} />
            </ContainerBox>
            <NewsPagination />
        </>
    );
};

const NewsWithArticles = withArticles(News, useArticles);
export default NewsWithArticles;
