import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './fetchWeather';

import './current_weather.css';

class CurrentWeather extends Component {
	componentDidMount() {
		this.props.fetchWeather();
		this.interval = setInterval(this.fetchWeather, 10 * 6000 * 60 * 1); // 1 hr
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		let windDirection = null;
		let windDegree = this.props.currentWeather.windDirection;
		if (windDegree === '') {
			windDirection = <span>Loading...</span>;
		} else if (windDegree === 0 || windDegree === 360) {
			windDirection = <i className="wi wi-wind from-0-deg" />;
		} else if (windDegree > 0 && windDegree < 90) {
			windDirection = <i className="wi wi-wind from-45-deg" />;
		} else if (windDegree === 90) {
			windDirection = <i className="wi wi-wind from-90-deg" />;
		} else if (windDegree > 90 && windDegree < 180) {
			windDirection = <i className="wi wi-wind from-135-deg" />;
		} else if (windDegree === 180) {
			windDirection = <i className="wi wi-wind from-180-deg" />;
		} else if (windDegree > 180 && windDegree < 270) {
			windDirection = <i className="wi wi-wind from-225-deg" />;
		} else if (windDegree === 270) {
			windDirection = <i className="wi wi-wind from-270-deg" />;
		} else if (windDegree > 270 && windDegree < 360) {
			windDirection = <i className="wi wi-wind from-293-deg" />;
		} else if (windDegree < 0 || windDegree > 360) {
			windDirection = <span>Error</span>;
		} else {
			windDirection = <span>Error</span>;
		}

		let weatherIcon = null;
		let resultIcon = this.props.currentWeather.weatherIcon;
		if (resultIcon === '') {
			weatherIcon = <span>Loading...</span>;
		} else if (resultIcon === '01d') {
			weatherIcon = <i className="wi wi-day-sunny" />;
		} else if (resultIcon === '01n') {
			weatherIcon = <i className="wi wi-night-clear" />;
		} else if (resultIcon === '02d') {
			weatherIcon = <i className="wi wi-day-cloudy" />;
		} else if (resultIcon === '02n') {
			weatherIcon = <i className="wi wi-night-alt-cloudy" />;
		} else if (resultIcon === '03d') {
			weatherIcon = <i className="wi wi-cloudy" />;
		} else if (resultIcon === '03n') {
			weatherIcon = <i className="wi wi-cloudy" />;
		} else if (resultIcon === '04d') {
			weatherIcon = <i className="wi wi-day-cloudy-gusts" />;
		} else if (resultIcon === '04n') {
			weatherIcon = <i className="wi wi-night-alt-cloudy-gusts" />;
		} else if (resultIcon === '09d') {
			weatherIcon = <i className="wi wi-day-storm-showers" />;
		} else if (resultIcon === '09n') {
			weatherIcon = <i className="wi wi-night-alt-showers" />;
		} else if (resultIcon === '10d') {
			weatherIcon = <i className="wi wi-day-sprinkle" />;
		} else if (resultIcon === '10n') {
			weatherIcon = <i className="wi wi-night-alt-rain-wind" />;
		} else if (resultIcon === '11d') {
			weatherIcon = <i className="wi wi-day-thunderstorm" />;
		} else if (resultIcon === '11n') {
			weatherIcon = <i className="wi wi-night-alt-thunderstorm" />;
		} else if (resultIcon === '13d') {
			weatherIcon = <i className="wi-day-snow-wind" />;
		} else if (resultIcon === '13n') {
			weatherIcon = <i className="wi wi-night-alt-snow" />;
		} else if (resultIcon === '50d') {
			weatherIcon = <i className="wi wi-dust" />;
		} else {
			weatherIcon = <span>Error</span>;
		}

		let windSpeedIcon = null;
		let resultWindSpeed = this.props.currentWeather.windSpeed;
		if (resultWindSpeed === '') {
			windSpeedIcon = <span>Loading...</span>;
		} else if (resultWindSpeed > 0 && resultWindSpeed <= 1) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-0" />;
		} else if (resultWindSpeed > 1 && resultWindSpeed <= 3) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-1" />;
		} else if (resultWindSpeed > 3 && resultWindSpeed <= 7) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-2" />;
		} else if (resultWindSpeed > 7 && resultWindSpeed <= 12) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-3" />;
		} else if (resultWindSpeed > 12 && resultWindSpeed <= 18) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-4" />;
		} else if (resultWindSpeed > 18 && resultWindSpeed <= 24) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-5" />;
		} else if (resultWindSpeed > 24 && resultWindSpeed <= 31) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-6" />;
		} else if (resultWindSpeed > 31 && resultWindSpeed <= 38) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-7" />;
		} else if (resultWindSpeed > 38 && resultWindSpeed <= 46) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-8" />;
		} else if (resultWindSpeed > 46 && resultWindSpeed <= 54) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-9" />;
		} else if (resultWindSpeed > 54 && resultWindSpeed <= 63) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-10" />;
		} else if (resultWindSpeed > 63 && resultWindSpeed <= 72) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-11" />;
		} else if (resultWindSpeed > 73) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-12" />;
		} else {
			windSpeedIcon = <span>Error</span>;
		}

		let { temperature, humidity, windSpeed } = this.props.currentWeather;

		return (
			<div id="weatherWrapper">
				<div id="firstLine">
					{weatherIcon}
					<span id="temp">{temperature}&#176;</span>
					<span id="humid">
						{humidity}
						<i
							className="wi wi-humidity"
							style={{ fontSize: '.75em', paddingLeft: '2px' }}
						/>
					</span>
				</div>
				<div id="secondLine">
					<span style={{ fontSize: '1.3em' }}>{windSpeedIcon}</span>
					<span id="windSpeed">
						{windSpeed}
						<span style={{ fontSize: '.2em' }}>mph</span>
					</span>
					{windDirection}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentWeather }) {
	return {
		currentWeather
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchWeather
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
