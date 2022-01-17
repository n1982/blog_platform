import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleArticle } from '../store/articleSlice';
import Article from '../components/Article';

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchSingleArticle(slug));
  }, [dispatch, slug]);

  const article = useSelector((state) => state.articles.singleArticle);
  return article && <Article article={article} />;
};

export default SingleArticle;
