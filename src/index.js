import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './react/mainPage';
import data from './fs';
import './style.css'

ReactDOM.render(
    <MainPage fs={data} />,
  document.getElementById('root'));



