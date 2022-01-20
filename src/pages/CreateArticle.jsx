// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCreateArticle } from '../store/articleSlice';
import ArticleForm from '../components/ArticleForm';

const CreateArticle = () => {
  console.log('CreateArticle');
  const dispatch = useDispatch();

  const handleClickSendButton = (event, title, description, text, tagList) => {
    event.preventDefault();
    const body = text;
    dispatch(fetchCreateArticle({ title, description, body, tagList }));
  };

  return <ArticleForm article="" handleClickSendButton={handleClickSendButton} />;
};

export default CreateArticle;
