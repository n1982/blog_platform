import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from '../../pages/ArticleList';
import LoginUser from '../../pages/LoginUser';
import CreateUser from '../../pages/CreateUser';
import EditProfile from '../../pages/EditProfile';
import NewArticle from '../../pages/NewArticle';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import EditArticle from '../EditArticle';
import SingleArticle from '../../pages/SingleArticle';

const App = () => {
  console.log('App');

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ArticleList />} />
        <Route path="articles" element={<ArticleList />} />
        <Route path="articles/:slug" element={<SingleArticle />} />
        <Route path="sign-in" element={<LoginUser />} />
        <Route path="sign-up" element={<CreateUser />} />
        <Route path="profile" element={<EditProfile />} />
        <Route path="new-article" element={<NewArticle />} />
        <Route path="article/:slug/edit" element={<EditArticle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
