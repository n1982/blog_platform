/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pagination, Paper, Stack } from '@mui/material';
import { fetchGetArticles } from '../store/articleSlice';
import ArticlePreview from '../components/ArticlePreview';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const ArticleList = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const articles = useSelector((state) => state.articles.articles);
  const articlesCount = useSelector((state) => state.articles.articlesCount);
  const articleRequestStatus = useSelector((state) => state.articles.articleRequestStatus);
  const errorArticleServer = useSelector((state) => state.articles.errorArticleServer);

  useEffect(() => {
    dispatch(fetchGetArticles({ limit: 5, offset }));
  }, [dispatch, offset]);

  return (
    <>
      {articleRequestStatus === 'rejected' && <ErrorMessage serverError={errorArticleServer} />}
      {articleRequestStatus === 'pending' && <Spinner />}
      {articleRequestStatus === 'fulfilled' && (
        <Stack spacing={2}>
          {articles.map((article) => (
            <Paper key={article.slug} sx={{ p: 1 }}>
              <ArticlePreview article={article} />
            </Paper>
          ))}
        </Stack>
      )}
      {articleRequestStatus === 'fulfilled' && (
        <Stack alignItems="center" sx={{ mt: 2 }}>
          <Pagination
            count={Math.ceil(articlesCount / 5)}
            page={offset / 5 + 1}
            shape="rounded"
            onChange={(_, num) => {
              setOffset((num - 1) * 5);
            }}
          />
        </Stack>
      )}
    </>
  );
};

export default ArticleList;
