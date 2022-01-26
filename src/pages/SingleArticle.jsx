import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Box, Chip, Paper, Typography } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowBackIos';

import { fetchSingleArticle } from '../store/articleSlice';

import ArticlePreview from '../components/ArticlePreview';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  const articleRequestStatus = useSelector((state) => state.articles.articleRequestStatus);
  const errorArticleServer = useSelector((state) => state.articles.errorArticleServer);

  useEffect(() => {
    dispatch(fetchSingleArticle(slug));
  }, [dispatch, slug]);

  const goBack = () => navigate(-1);

  const article = useSelector((state) => state.articles.singleArticle);

  return (
    <>
      {articleRequestStatus === 'rejected' && <ErrorMessage serverError={errorArticleServer} />}
      {articleRequestStatus === 'pending' && <Spinner />}
      {articleRequestStatus === 'fulfilled' && article && (
        <>
          <Paper sx={{ p: '15px', mb: 2 }}>
            <ArticlePreview article={article} singlePage />
            <Box sx={{ p: 2 }}>
              <Typography component="span">
                <ReactMarkdown>{article.body}</ReactMarkdown>
              </Typography>
            </Box>
          </Paper>
          <Chip
            icon={<ArrowCircleLeftOutlinedIcon />}
            label="Go back"
            variant="outlined"
            onClick={goBack}
            sx={{ background: 'white' }}
          />
        </>
      )}
    </>
  );
};

export default SingleArticle;
