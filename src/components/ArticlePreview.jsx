/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Button, Checkbox, Chip, Grid, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { fetchDeleteArticle, fetchDeleteFavoriteArticle, fetchSetFavoriteArticle } from '../store/articleSlice';

import ModalWindow from './ModalWindow';
import formatDate from '../utilites/formatDate';
import uniqKey from '../utilites/uniqKey';

import avatarPicture from '../assets/img/Avatar.png';

const ArticlePreview = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { article, singlePage } = props;

  const userLoggedIn = useSelector((state) => state.user.username);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkFavorite, setCheckFavorite] = useState(article?.favorited || false);
  const [favoriteCount, setFavoriteCount] = useState(article.favoritesCount);

  const userCreatorArticle = article.author.username;

  const closeModal = () => setModalIsOpen(false);

  const openModal = () => setModalIsOpen(true);

  const handleCheckboxClick = (event) => {
    if (event.target.checked) {
      dispatch(fetchSetFavoriteArticle(article.slug));
      setCheckFavorite(true);
      setFavoriteCount(favoriteCount + 1);
    } else {
      dispatch(fetchDeleteFavoriteArticle(article.slug));
      setCheckFavorite(false);
      setFavoriteCount(favoriteCount - 1);
    }
  };

  const deleteArticle = () => {
    dispatch(fetchDeleteArticle(article.slug));
    setModalIsOpen(false);
    navigate('/articles', { replace: true });
  };

  return (
    <>
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={9}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1, gap: 1 }}>
            {!singlePage && (
              <Link to={`${article.slug}`} style={{ textDecoration: 'none' }}>
                <Typography variant="h5" color="#1890FF">
                  {article.title}
                </Typography>
              </Link>
            )}
            {singlePage && (
              <Typography variant="h5" color="#1890FF">
                {article.title}
              </Typography>
            )}
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
              disabled={!userLoggedIn}
              checked={checkFavorite}
              onClick={(event) => handleCheckboxClick(event)}
            />
            <Typography sx={{ mr: '5px' }}>{favoriteCount}</Typography>
          </Grid>
          {article.tagList.map(
            (tag) => tag && <Chip key={uniqKey()} label={tag} variant="outlined" size="small" sx={{ mr: 1 }} />
          )}
          <Typography align="justify" sx={{ mt: 1 }}>
            {article.description}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="row-reverse">
            <Avatar alt="Avatar" src={article.author.image || avatarPicture} sx={{ width: 46, height: 46 }} />
            <Box sx={{ mr: 1 }}>
              <Typography variant="h6" align="right">
                {article.author.username}
              </Typography>
              <Typography variant="body2" align="right" sx={{ color: '#808080' }}>
                {formatDate(article.createdAt)}
              </Typography>
            </Box>
          </Grid>

          {singlePage && userLoggedIn === userCreatorArticle && (
            <>
              {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
              <Link to={`edit`}>
                <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
                  Edit
                </Button>
              </Link>

              <Button color="error" variant="outlined" sx={{ textTransform: 'none', mr: 1 }} onClick={openModal}>
                Delete
              </Button>
            </>
          )}
        </Grid>
      </Grid>
      <ModalWindow modalIsOpen={modalIsOpen} handleCloseModal={closeModal} handleClickDelete={deleteArticle} />
    </>
  );
};

export default ArticlePreview;
