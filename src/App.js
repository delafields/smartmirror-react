import React, { Component } from 'react';
import './styles/App.css';

import Clock from './components/Clock';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Calendar from './components/Calendar';
import News from './components/News';
import CCTicker from './components/CCTicker';

class App extends Component {
  render() {
    return (
      <div>
        <div className="region fullscreen below"><div className="container"></div></div>

        <div className="region top bar">
          <div className="container"></div>
          <div className="region top left"><div className="container"><Clock/><Calendar/></div></div>
          <div className="region top center"><div className="container"></div></div>
          <div className="region top right"><div className="container"><CurrentWeather/><Forecast/></div></div>
        </div>

        <div className="region upper third"><div className="container"></div></div>

        <div className="region middle center"><div className="container"></div></div>

        <div className="region lower third"><div className="container"><br/><News/></div></div>

        <div className="region bottom bar">

        <div className="container"></div>
          <div className="region bottom left"><div className="container"></div></div>
          <div className="region bottom center"><div className="container"><CCTicker/></div></div>
          <div className="region bottom right"><div className="container"></div></div>
        </div>

        <div className="region fullscreen above"><div className="container"></div></div>
      </div>
    );
  }
}

export default App;
