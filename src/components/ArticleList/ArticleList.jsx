/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Box, Checkbox, Grid, Pagination, Paper, Stack, Typography } from '@mui/material';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import avatarPicture from '../../assets/img/Avatar.png';
import { fetchArticles } from '../../store/articleSlice';
import paginationCount from '../../utilites/PaginationCount';

const ArticleList = () => {
  console.log('article list');
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchArticles({ limit: 5, offset }));
  }, [dispatch, offset]);

  const articles = useSelector((state) => state.articles.articles);
  const articlesCount = useSelector((state) => state.articles.articlesCount);
  console.log(articles);
  return (
    <>
      <Stack spacing={2}>
        {/* eslint-disable-next-line arrow-body-style */}
        {articles.map((article) => {
          return (
            <Paper key={article.slug} sx={{ p: '15px', height: '140px' }}>
              <Grid container columnSpacing={2}>
                <Grid item xs={10}>
                  <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
                      {article.title}
                    </Typography>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Typography sx={{ mr: '5px' }}>12</Typography>
                  </Grid>
                  {/* eslint-disable-next-line arrow-body-style */}
                  {article.tagList.map((tag) => {
                    return (
                      <Typography
                        key={article.slug + tag}
                        variant="caption"
                        display="borderBox"
                        component="span"
                        sx={{
                          border: '1px solid grey',
                          borderRadius: '5px',
                          padding: '3px 7px',
                          mr: '5px',
                          mt: 1,
                        }}
                      >
                        {tag}
                      </Typography>
                    );
                  })}
                  {/* todo добавить overflow-hiden */}
                  <Typography align="justify" sx={{ mt: 1 }}>
                    {article.description}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Grid container direction="row-reverse">
                    <Avatar alt="Avatar" src={avatarPicture} sx={{ width: 46, height: 46 }} />
                    <Box>
                      <Typography variant="h6">John Doe</Typography>
                      <Typography variant="body2" sx={{ color: '#808080' }}>
                        March 5, 2020{' '}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </Stack>
      <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
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
