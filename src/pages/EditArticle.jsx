import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchEditArticle, fetchSingleArticle } from '../store/articleSlice';
import ArticleForm from '../components/ArticleForm';

const EditArticle = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const article = useSelector((state) => state.articles.singleArticle);

  useEffect(() => {
    dispatch(fetchSingleArticle(slug));
  }, [dispatch, slug]);

  const handlerFormSubmit = ({ title, description, text: body }, tagList) => {
    dispatch(fetchEditArticle({ slug, title, description, body, tagList }));
    navigate(fromPage, { replace: true });
  };

  return <ArticleForm article={article} handlerFormSubmit={handlerFormSubmit} />;
};

export default EditArticle;
