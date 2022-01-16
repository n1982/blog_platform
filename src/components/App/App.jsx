import React from 'react';
import Header from '../Header';

import Main from '../Main';
import './App.scss';

const App = () => {
  console.log('App');

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
