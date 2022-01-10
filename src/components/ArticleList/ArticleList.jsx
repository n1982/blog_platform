import React from 'react';
import { Avatar, Box, Grid, Pagination, Paper, Stack, Typography } from '@mui/material';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import avatarPicture from '../../assets/img/Avatar.png';

const ArticleList = () => {
  console.log('article list');

  return (
    <>
      <Stack spacing={2}>
        <Paper sx={{ p: '15px', height: '140px' }}>
          <Grid container columnSpacing={2}>
            <Grid item xs={10}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
                  Some article title
                </Typography>
                <FavoriteBorderRoundedIcon sx={{ mr: '5px' }} />
                <FavoriteRoundedIcon sx={{ mr: '5px', color: '#FF0707' }} />
                <Typography sx={{ mr: '5px' }}>12</Typography>
              </Grid>
              <Typography
                variant="caption"
                display="border-box"
                component="span"
                sx={{ border: '1px solid grey', 'border-radius': '5px', padding: '3px 7px', mr: '5px', mt: 1 }}
              >
                Tag 1
              </Typography>
              <Typography align="justify" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
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
        <Paper sx={{ p: '15px', height: '140px' }}>
          <Grid container columnSpacing={2}>
            <Grid item xs={10}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
                  Some article title
                </Typography>
                <FavoriteBorderRoundedIcon sx={{ mr: '5px' }} />
                <FavoriteRoundedIcon sx={{ mr: '5px', color: '#FF0707' }} />
                <Typography sx={{ mr: '5px' }}>12</Typography>
              </Grid>
              <Typography
                variant="caption"
                display="border-box"
                component="span"
                sx={{ border: '1px solid grey', 'border-radius': '5px', padding: '3px 7px', mr: '5px', mt: 1 }}
              >
                Tag 1
              </Typography>
              <Typography align="justify" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
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
        <Paper sx={{ p: '15px', height: '140px' }}>
          <Grid container columnSpacing={2}>
            <Grid item xs={10}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
                  Some article title
                </Typography>
                <FavoriteBorderRoundedIcon sx={{ mr: '5px' }} />
                <FavoriteRoundedIcon sx={{ mr: '5px', color: '#FF0707' }} />
                <Typography sx={{ mr: '5px' }}>12</Typography>
              </Grid>
              <Typography
                variant="caption"
                display="border-box"
                component="span"
                sx={{ border: '1px solid grey', 'border-radius': '5px', padding: '3px 7px', mr: '5px', mt: 1 }}
              >
                Tag 1
              </Typography>
              <Typography align="justify" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
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
        <Paper sx={{ p: '15px', height: '140px' }}>
          <Grid container columnSpacing={2}>
            <Grid item xs={10}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
                  Some article title
                </Typography>
                <FavoriteBorderRoundedIcon sx={{ mr: '5px' }} />
                <FavoriteRoundedIcon sx={{ mr: '5px', color: '#FF0707' }} />
                <Typography sx={{ mr: '5px' }}>12</Typography>
              </Grid>
              <Typography
                variant="caption"
                display="border-box"
                component="span"
                sx={{ border: '1px solid grey', 'border-radius': '5px', padding: '3px 7px', mr: '5px', mt: 1 }}
              >
                Tag 1
              </Typography>
              <Typography align="justify" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
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
        <Paper sx={{ p: '15px', height: '140px' }}>
          <Grid container columnSpacing={2}>
            <Grid item xs={10}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="h5" color="#1890FF" sx={{ mr: '5px' }}>
                  Some article title
                </Typography>
                <FavoriteBorderRoundedIcon sx={{ mr: '5px' }} />
                <FavoriteRoundedIcon sx={{ mr: '5px', color: '#FF0707' }} />
                <Typography sx={{ mr: '5px' }}>12</Typography>
              </Grid>
              <Typography
                variant="caption"
                display="border-box"
                component="span"
                sx={{ border: '1px solid grey', 'border-radius': '5px', padding: '3px 7px', mr: '5px', mt: 1 }}
              >
                Tag 1
              </Typography>
              <Typography align="justify" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
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
      </Stack>
      <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </>
  );
};

export default ArticleList;
