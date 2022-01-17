/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ArticlePreview from '../ArticlePreview';

const Article = (props) => {
  const { article } = props;
  return (
    <Paper sx={{ p: '15px' }}>
      <ArticlePreview article={article} />

      {/* <Grid container columnSpacing={2}>
        <Grid item xs={10}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
              {article.title}
            </Typography>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Typography sx={{ mr: '5px' }}>{article.favoritesCount}</Typography>
          </Grid>
          {article.tagList.map((tag) => (
            <Chip key={article.slug + tag} label={tag} variant="outlined" size="small" sx={{ mr: 1 }} />
          ))}
           todo добавить overflow-hiden
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


        </Grid>
      </Grid> */}
      <Box>
        {/* todo подключить обработку маркдаун разметки */}
        <Typography>{article.body}</Typography>
      </Box>
    </Paper>
  );
};

export default Article;
