import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEditArticle, fetchSingleArticle } from '../store/articleSlice';
import ArticleForm from '../components/ArticleForm';

const EditArticle = () => {
  console.log('EditArticle');
  const dispatch = useDispatch();
  const { slug } = useParams();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const article = useSelector((state) => state.articles.singleArticle);

  useEffect(() => {
    dispatch(fetchSingleArticle(slug));
  }, [dispatch, slug]);

  const handleClickSendButton = (event, title, description, text, tagList) => {
    event.preventDefault();
    const body = text;
    dispatch(fetchEditArticle({ slug, title, description, body, tagList }));
  };

  return <ArticleForm article={article} handleClickSendButton={handleClickSendButton} />;
};

export default EditArticle;
