/*
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCreateArticle } from '../../store/articleSlice';
import ArticleForm from '../ArticleForm';

const ArticleCreateEdit = () => {
  const dispatch = useDispatch();

  const handleClickSendButton = (event, title, description, text, tagList) => {
    event.preventDefault();
    const body = text;
    dispatch(fetchCreateArticle({ title, description, body, tagList }));
  };

  return <ArticleForm handleClickSendButton={handleClickSendButton} />;
};

export default ArticleCreateEdit;
*/
