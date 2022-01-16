// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';

const NewArticle = () => {
  console.log('NewArticle');

  return (
    <Box
      sx={{
        m: 'auto',
        mt: 10,
        maxWidth: '1440px',
      }}
    >
      <Paper
        sx={{
          p: 5,
        }}
      >
        <Typography
          variant="h6"
          justify="center"
          align="center"
          sx={{
            mb: 1,
          }}
        >
          Create new article
        </Typography>
        <Typography>Title</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
        />
        <Typography>Short description</Typography>
        <TextField
          id="outlined-basic"
          label="Short description"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
        />
        <Typography>Text</Typography>
        <TextField
          id="outlined-basic"
          label="Text"
          variant="outlined"
          size="small"
          multiline
          fullWidth
          sx={{
            mb: 1,
          }}
        />
        <Typography>Tags</Typography>
        <TextField
          id="outlined-basic"
          label="Tag"
          variant="outlined"
          size="small"
          sx={{
            mb: 1,
          }}
        />
        <Button
          variant="outlined"
          color="error"
          sx={{
            mb: 2,
            textTransform: 'none',
          }}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            textTransform: 'none',
          }}
        >
          Add Tag
        </Button>

        <Divider />
        <Button
          variant="contained"
          sx={{
            mb: 2,
            textTransform: 'none',
            width: '50%',
          }}
        >
          Send
        </Button>
      </Paper>
    </Box>
  );
};

export default NewArticle;
