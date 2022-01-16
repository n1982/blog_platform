import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from '../../pages/ArticleList';
import LoginUser from '../../pages/LoginUser';
import CreateUser from '../../pages/CreateUser';
import EditProfile from '../../pages/EditProfile';
import NewArticle from '../../pages/NewArticle';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

const App = () => {
  console.log('App');

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ArticleList />} />
        <Route path="articles" element={<ArticleList />} />
        <Route path="sign-in" element={<LoginUser />} />
        <Route path="sign-up" element={<CreateUser />} />
        <Route path="profile" element={<EditProfile />} />
        <Route path="new-article" element={<NewArticle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
