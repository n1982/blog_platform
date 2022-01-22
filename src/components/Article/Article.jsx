/* eslint-disable react/prop-types */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Paper, Typography } from '@mui/material';
import ArticlePreview from '../ArticlePreview';

const Article = (props) => {
  const { article } = props;
  return (
    <Paper sx={{ p: '15px' }}>
      <ArticlePreview article={article} singlePage />

      <Box>
        {/* todo подключить обработку маркдаун разметки */}
        <Typography>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Article;
