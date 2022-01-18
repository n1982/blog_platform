// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import uniqKey from '../../utilites/uniqKey';
import { fetchCreateArticle } from '../../store/articleSlice';

const ArticleCreateEdit = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');
  const [tagList, setTagList] = useState([]);
  const [tegValue, setTegValue] = useState('');

  const handleClickAddTag = () => {
    setTagList([...tagList, tegValue]);
    setTegValue('');
  };
  const handleClickDeleteTag = (id) => {
    setTagList(tagList.filter((_, index) => index !== id));
  };

  const handleClickSendButton = (event) => {
    event.preventDefault();
    const body = text;
    dispatch(fetchCreateArticle({ title, description, body, tagList }));
  };

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
          id="title"
          value={title}
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <Typography>Short description</Typography>
        <TextField
          id="short-description"
          value={description}
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <Typography>Text</Typography>
        <TextField
          id="text"
          value={text}
          variant="outlined"
          size="small"
          multiline
          fullWidth
          sx={{
            mb: 1,
          }}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <Typography>Tags</Typography>

        {tagList &&
          tagList.map((item, id) => (
            <Box key={uniqKey()} sx={{ mb: 2 }}>
              <TextField disabled id={item} value={item} defaultValue="Tag" size="small" sx={{ mr: 2 }} />
              <Button
                variant="outlined"
                color="error"
                sx={{
                  textTransform: 'none',
                }}
                onClick={() => handleClickDeleteTag(id)}
              >
                Delete
              </Button>
            </Box>
          ))}

        {/* поле создания тега */}
        <TextField
          id="tag"
          value={tegValue}
          variant="outlined"
          size="small"
          sx={{
            mr: 1,
          }}
          onChange={(event) => {
            setTegValue(event.target.value);
          }}
        />

        <Button
          variant="outlined"
          sx={{
            mb: 2,
            textTransform: 'none',
          }}
          onClick={handleClickAddTag}
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
          onClick={(event) => {
            handleClickSendButton(event);
          }}
        >
          Send
        </Button>
      </Paper>
    </Box>
  );
};

export default ArticleCreateEdit;
