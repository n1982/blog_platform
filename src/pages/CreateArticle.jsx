// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCreateArticle } from '../store/articleSlice';
import ArticleForm from '../components/ArticleForm';

const CreateArticle = () => {
  console.log('CreateArticle');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const handlerFormSubmit = ({ title, description, text: body }, tagList) => {
    dispatch(fetchCreateArticle({ title, description, body, tagList }));
    navigate(fromPage, { replace: true });
  };

  return <ArticleForm handlerFormSubmit={handlerFormSubmit} />;
};

export default CreateArticle;
