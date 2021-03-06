import React, { Component } from 'react';
import './App.css';

import Clock from './Clock/Clock';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import Forecast from './WeatherForecast/WeatherForecast';
import Calendar from './Calendar/Calendar';
import News from './News/News';
import Colors from './Colors/Colors'
//import CCTicker from './CCTicker/CCTicker';
//import Quotes from './Quotes/Quotes';

class App extends Component {
	render() {
		return (
			<div>
				<div className="region fullscreen below" />

				<div className="region top bar">
					<div className="region top left">
						<Clock />
						<Calendar />
					</div>

					<div className="region top center" >

					</div>

					<div className="region top right">
						<CurrentWeather />
						<Forecast />
					</div>
				</div>

				<div className="region upper third" />

				<div className="region middle center" />

				<div className="region lower third">
					<News />
				</div>

				<div className="region bottom bar">
					<div className="region bottom left" />
					<div className="region bottom center">
						{/*<CCTicker />*/}
					</div>
					<div className="region bottom right" />
				</div>

				<div className="region fullscreen above" >
					<Colors/>
				</div>
			</div>
		);
	}
}

export default App;
