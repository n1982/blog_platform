import React from 'react';

import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import avatarPicture from '../../assets/img/Avatar.png';

import './Article.scss';

const Article = () => {
  console.log('Article');
  return (
    <Paper sx={{ p: '15px' }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={10}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
              Some article title
            </Typography>
            {/* todo заменить <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> */}
            <FavoriteBorderRoundedIcon sx={{ mr: '5px' }} />
            <FavoriteRoundedIcon sx={{ mr: '5px', color: '#FF0707' }} />
            <Typography sx={{ mr: '5px' }}>12</Typography>
          </Grid>
          {/* todo использовать "Chip" */}
          <Typography
            variant="caption"
            display="border-box"
            component="span"
            sx={{ border: '1px solid grey', 'border-radius': '5px', padding: '3px 7px', mr: '5px', mt: 1 }}
          >
            Tag 1
          </Typography>
          {/* todo добавить overflow-hiden */}
          <Typography variant="subtitle1" align="justify" sx={{ mt: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
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
      <Box>
        {/* todo подключить обработку маркдаун разметки */}
        <Typography>
          Est Ampyciden pater patent Amor saxa inpiger Lorem markdownum Stygias neque is referam fudi, breve per. Et
          Achaica tamen: nescia ista occupat, illum se ad potest humum et. Qua deos has fontibus Recens nec ferro
          responsaque dedere armenti opes momorderat pisce, vitataque et fugisse. Et iamque incipiens, qua huius suo
          omnes ne pendentia citus pedum. Quamvis pronuba Ulli labore facta. Io cervis non nosterque nullae, vides:
          aethere Delphice subit, tamen Romane ob cubilia Rhodopen calentes librata! Nihil populorum flava, inrita? Sit
          hic nunc, hoc formae Esse illo? Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia uno cernunt
          Venus draconem, hic, Methymnaeae. 1. Clamoribus haesit tenentem iube Haec munera 2. Vincla venae 3. Paris
          includere etiam tamen 4. Superi te putria imagine Deianira 5. Tremore hoste Esse sed perstat capillis siqua
        </Typography>
      </Box>
    </Paper>
  );
};

export default Article;
