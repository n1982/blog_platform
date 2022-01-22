/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import uniqKey from '../../utilites/uniqKey';

// eslint-disable-next-line no-unused-vars
const ArticleForm = ({ article, handlerFormSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Поле "Title" должно быть заполнено'),
    description: Yup.string().required('Поле "Short description" должно быть заполнено'),
    text: Yup.string().required('Поле "Text" должно быть заполнено'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: article?.title || '',
      description: article?.description || '',
      text: article?.body || '',
    },
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const [tagList, setTagList] = useState(article?.tagList || []);
  const [tagValue, setTagValue] = useState('');

  const onSubmit = (data) => {
    handlerFormSubmit({ ...data }, tagList);
    // navigate(fromPage, { replace: true });
  };

  const handleClickAddTag = () => {
    setTagList([...tagList, tagValue]);
    setTagValue('');
  };

  const handleClickDeleteTag = (id) => {
    setTagList(tagList.filter((_, index) => index !== id));
  };

  return (
    <Box
      sx={{
        m: 'auto',
        mt: 10,
        maxWidth: '1440px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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

          <TextField
            id="title"
            label="Title"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              mb: 1,
            }}
            {...register('title')}
            error={!!errors?.title}
            helperText={errors?.title?.message}
          />

          <TextField
            id="description"
            label="Short description"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              mb: 1,
            }}
            {...register('description')}
            error={!!errors?.description}
            helperText={errors?.description?.message}
          />

          <TextField
            id="text"
            label="Text"
            variant="outlined"
            size="small"
            multiline
            fullWidth
            required
            sx={{
              mb: 1,
            }}
            {...register('text')}
            error={!!errors?.text}
            helperText={errors?.text?.message}
          />
          <Typography>Tags</Typography>

          {tagList &&
            tagList.map((item, id) => (
              <Box key={uniqKey()} sx={{ mb: 2 }}>
                <TextField disabled id={item} value={item} size="small" sx={{ mr: 2 }} />

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
            value={tagValue}
            variant="outlined"
            size="small"
            sx={{
              mr: 1,
            }}
            onChange={(event) => {
              setTagValue(event.target.value);
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
            type="submit"
            variant="contained"
            sx={{
              mb: 2,
              textTransform: 'none',
              width: '50%',
            }}
            // onClick={(event) => handleClickSendButton(event, title, description, text, tagList)}
          >
            Send
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default ArticleForm;
