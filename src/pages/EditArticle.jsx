import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchEditArticle, fetchSingleArticle } from '../store/articleSlice';
import ArticleForm from '../components/ArticleForm';
import ModalWindow from '../components/ModalWindow';

const EditArticle = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const article = useSelector((state) => state.articles.singleArticle);

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    dispatch(fetchSingleArticle(slug));
  }, [dispatch, slug]);

  const handlerFormSubmit = ({ title, description, text: body }, tagList) => {
    dispatch(fetchEditArticle({ slug, title, description, body, tagList }));
    navigate(fromPage, { replace: true });
  };

  return (
    <>
      <ArticleForm article={article} handlerFormSubmit={handlerFormSubmit} />
      <ModalWindow />
    </>
  );
};

export default EditArticle;
