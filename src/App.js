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
				<div className="region fullscreen below" />

				<div className="region top bar">
					<div className="region top left">
						<Clock />
						<Calendar />
					</div>

					<div className="region top center" />

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
						<CCTicker />
					</div>
					<div className="region bottom right" />
				</div>

				<div className="region fullscreen above" />
			</div>
		);
	}
}

export default App;
