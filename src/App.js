import React from 'react';
import './App.css';
import engagement from './images/engagement.jpg'
import foliage from './images/foliage.png'

const App = () => {
  return (
    <div className="app">
      <div>
        <img src={ foliage } alt="Foliage photo" className="banner-image"/>
      </div>
      <img src={ engagement } alt="Puppy engagement photo" className="main-image"/>
      <div className="side-panel" id="left-sp"></div>
      <div className="side-panel" id="right-sp"></div>
    </div>
  );
}

export default App;
