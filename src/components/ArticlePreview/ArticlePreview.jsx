/* eslint-disable react/prop-types */
import React from 'react';

import { Avatar, Box, Checkbox, Chip, Grid, Typography } from '@mui/material';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import avatarPicture from '../../assets/img/Avatar.png';
import './ArticlePreview.scss';
import formatDate from '../../utilites/formatDate';

const ArticlePreview = (props) => {
  const { article } = props;
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={10}>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
          {/* сделать подстановку /articles адреса с помощью useLocation */}
          <Link to={`${article.slug}`}>
            <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
              {article.title}
            </Typography>
          </Link>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Typography sx={{ mr: '5px' }}>{article.favoritesCount}</Typography>
        </Grid>
        {article.tagList.map(
          (tag) => tag && <Chip key={article.slug + tag} label={tag} variant="outlined" size="small" sx={{ mr: 1 }} />
        )}
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
        {/* <Button color="error" variant="outlined" sx={{ textTransform: 'none', mr: 1 }}>
            Delete
          </Button>

          <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
            Edit
          </Button> */}
      </Grid>
    </Grid>
  );
};

export default ArticlePreview;
