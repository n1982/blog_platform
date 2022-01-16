/* eslint-disable react/prop-types */
import React from 'react';

import { Avatar, Box, Button, Checkbox, Chip, Grid, Paper, Typography } from '@mui/material';

import { Favorite, FavoriteBorder } from '@mui/icons-material';

import avatarPicture from '../../assets/img/Avatar.png';
import './Article.scss';
import formatDate from '../../utilites/formatDate';

const Article = (props) => {
  const showElement = false;

  const { article } = props;
  return (
    <Paper sx={{ p: '15px' }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={10}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
              {article.title}
            </Typography>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Typography sx={{ mr: '5px' }}>12</Typography>
          </Grid>
          {article.tagList.map((tag) => (
            <Chip key={article.slug + tag} label={tag} variant="outlined" size="small" sx={{ mr: 1 }} />
          ))}
          {/* todo добавить overflow-hiden */}
          <Typography align="justify" sx={{ mt: 1 }}>
            {article.description}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="row-reverse">
            <Avatar alt="Avatar" src={article.author.image || avatarPicture} sx={{ width: 46, height: 46 }} />
            <Box>
              <Typography variant="h6">{article.author.username}</Typography>
              <Typography variant="body2" sx={{ color: '#808080' }}>
                {formatDate(article.createdAt)}
              </Typography>
            </Box>
          </Grid>
          {showElement && (
            <Button color="error" variant="outlined" sx={{ textTransform: 'none', mr: 1 }}>
              Delete
            </Button>
          )}
          {showElement && (
            <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
      {showElement && (
        <Box>
          {/* todo подключить обработку маркдаун разметки */}
          <Typography>{article.body}</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default Article;
