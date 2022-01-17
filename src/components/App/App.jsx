import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from '../../pages/ArticleList';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import EditProfile from '../../pages/EditProfile';
import NewArticle from '../../pages/NewArticle';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import EditArticle from '../EditArticle';
import SingleArticle from '../../pages/SingleArticle';
import RequireAuth from '../hoc/RequireAuth';

const App = () => {
  console.log('App');

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ArticleList />} />
        <Route path="articles" element={<ArticleList />} />
        <Route path="articles/:slug" element={<SingleArticle />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
        <Route
          path="new-article"
          element={
            <RequireAuth>
              <NewArticle />
            </RequireAuth>
          }
        />
        <Route
          path="article/:slug/edit"
          element={
            <RequireAuth>
              <EditArticle />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
