import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Chip } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { fetchSingleArticle } from '../store/articleSlice';
import Article from '../components/Article';

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchSingleArticle(slug));
  }, [dispatch, slug]);

  const article = useSelector((state) => state.articles.singleArticle);
  return (
    <>
      {article && <Article article={article} />}
      <Chip icon={<ArrowCircleLeftOutlinedIcon />} label="Go back" variant="outlined" onClick={goBack} />
    </>
  );
};

export default SingleArticle;
