import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pagination, Paper, Stack } from '@mui/material';
import { fetchArticles } from '../store/articleSlice';
import paginationCount from '../utilites/paginationCount';
import ArticlePreview from '../components/ArticlePreview';

const ArticleList = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchArticles({ limit: 5, offset }));
  }, [dispatch, offset]);

  const articles = useSelector((state) => state.articles.articles);
  const articlesCount = useSelector((state) => state.articles.articlesCount);

  return (
    <>
      <Stack spacing={2}>
        {articles.map((article) => (
          <Paper sx={{ p: 1 }}>
            <ArticlePreview key={article.slug} article={article} />
          </Paper>
        ))}
      </Stack>
      <Stack alignItems="center" sx={{ mt: 2 }}>
        <Pagination
          count={paginationCount(articlesCount)}
          shape="rounded"
          onChange={(_, num) => {
            setOffset((num - 1) * 5);
          }}
        />
      </Stack>
    </>
  );
};

export default ArticleList;
