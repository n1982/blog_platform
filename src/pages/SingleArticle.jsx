/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Chip, Paper, Typography } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowBackIos';
import ReactMarkdown from 'react-markdown';
import { fetchSingleArticle } from '../store/articleSlice';
import ArticlePreview from '../components/ArticlePreview';

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchSingleArticle(slug));
  }, [dispatch, slug]);

  const article = useSelector((state) => state.articles.singleArticle);
  console.log(article);
  return (
    <>
      {article && (
        <>
          <Chip icon={<ArrowCircleLeftOutlinedIcon />} label="Go back" variant="outlined" onClick={goBack} />
          <Paper sx={{ p: '15px' }}>
            <ArticlePreview article={article} singlePage />
            <Box>
              <Typography>
                <ReactMarkdown>{article.body}</ReactMarkdown>
              </Typography>
            </Box>
          </Paper>
        </>
      )}
      {/* {article && <Article article={article} />} */}
      {/* <Chip icon={<ArrowCircleLeftOutlinedIcon />} label="Go back" variant="outlined" onClick={goBack} /> */}
    </>
  );
};

export default SingleArticle;
