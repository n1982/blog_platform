/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Box, Button, Checkbox, Chip, Grid, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import { fetchDeleteArticle } from '../store/articleSlice';

import formatDate from '../utilites/formatDate';
import uniqKey from '../utilites/uniqKey';
import avatarPicture from '../assets/img/Avatar.png';

const ArticlePreview = (props) => {
  const dispatch = useDispatch();
  const { article, singlePage } = props;

  const userCreatorArticle = article.author.username;
  const userLoggedIn = useSelector((state) => state.user.username);

  const handleClickDelete = (slug) => {
    dispatch(fetchDeleteArticle(slug));
  };

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
          (tag) => tag && <Chip key={uniqKey()} label={tag} variant="outlined" size="small" sx={{ mr: 1 }} />
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

        {/* отображать если пользователь создал статью */}
        {singlePage && userLoggedIn === userCreatorArticle && (
          // eslint-disable-next-line react/jsx-curly-brace-presence
          <Link to={`edit`}>
            <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
              Edit
            </Button>
          </Link>
        )}
        {singlePage && userLoggedIn === userCreatorArticle && (
          <Button
            color="error"
            variant="outlined"
            sx={{ textTransform: 'none', mr: 1 }}
            onClick={() => handleClickDelete(article.slug)}
          >
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default ArticlePreview;
