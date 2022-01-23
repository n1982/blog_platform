import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCreateArticle } from '../store/articleSlice';
import ArticleForm from '../components/ArticleForm';

const CreateArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerFormSubmit = ({ title, description, text: body }, tagList) => {
    dispatch(fetchCreateArticle({ title, description, body, tagList }));
    navigate('/articles', { replace: true });
  };

  return <ArticleForm handlerFormSubmit={handlerFormSubmit} />;
};

export default CreateArticle;
