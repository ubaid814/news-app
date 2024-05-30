import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/thunks';


const useArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state: TReduxState) => state.entities.app.articles);
    const filters = useSelector((state: TReduxState) => state.features.filters);

    useEffect(() => {
        dispatch(fetchArticles(filters));
    }, [dispatch, filters]);

    const curatedArticles = useMemo(() => {
        if (articles.length !== 0) {
            return articles.filter((article: TArticle) => article.title !== "[Removed]")
        } else return articles;
    }, [articles]);
    return curatedArticles;
};

export default useArticles;