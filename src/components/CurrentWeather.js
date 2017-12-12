import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

import '../styles/current_weather.css';

class CurrentWeather extends Component {
	componentWillMount() {
		this.props.fetchWeather();
		this.interval = setInterval(this.fetchWeather, 10 * 6000 * 60 * 1); // 1 hr
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		let windDirection = null;
		let stateWind = this.props.currentWeather.windDirection;
		if (stateWind === '') {
			windDirection = <span>Loading...</span>;
		} else if (stateWind === 0 || stateWind === 360) {
			windDirection = <i className="wi wi-wind from-0-deg" />;
		} else if (stateWind > 0 && stateWind < 90) {
			windDirection = <i className="wi wi-wind from-45-deg" />;
		} else if (stateWind === 90) {
			windDirection = <i className="wi wi-wind from-90-deg" />;
		} else if (stateWind > 90 && stateWind < 180) {
			windDirection = <i className="wi wi-wind from-135-deg" />;
		} else if (stateWind === 180) {
			windDirection = <i className="wi wi-wind from-180-deg" />;
		} else if (stateWind > 180 && stateWind < 270) {
			windDirection = <i className="wi wi-wind from-225-deg" />;
		} else if (stateWind === 270) {
			windDirection = <i className="wi wi-wind from-270-deg" />;
		} else if (stateWind > 270 && stateWind < 360) {
			windDirection = <i className="wi wi-wind from-293-deg" />;
		} else if (stateWind < 0 || stateWind > 360) {
			windDirection = <span>Error</span>;
		} else {
			windDirection = <span>Error</span>;
		}

		let weatherIcon = null;
		let stateWeatherIcon = this.props.currentWeather.weatherIcon;
		if (stateWeatherIcon === '') {
			weatherIcon = <span>Loading...</span>;
		} else if (stateWeatherIcon === '01d') {
			weatherIcon = <i className="wi wi-day-sunny" />;
		} else if (stateWeatherIcon === '01n') {
			weatherIcon = <i className="wi wi-night-clear" />;
		} else if (stateWeatherIcon === '02d') {
			weatherIcon = <i className="wi wi-day-cloudy" />;
		} else if (stateWeatherIcon === '02n') {
			weatherIcon = <i className="wi wi-night-alt-cloudy" />;
		} else if (stateWeatherIcon === '03d') {
			weatherIcon = <i className="wi wi-cloudy" />;
		} else if (stateWeatherIcon === '03n') {
			weatherIcon = <i className="wi wi-cloudy" />;
		} else if (stateWeatherIcon === '04d') {
			weatherIcon = <i className="wi wi-day-cloudy-gusts" />;
		} else if (stateWeatherIcon === '04n') {
			weatherIcon = <i className="wi wi-night-alt-cloudy-gusts" />;
		} else if (stateWeatherIcon === '09d') {
			weatherIcon = <i className="wi wi-day-storm-showers" />;
		} else if (stateWeatherIcon === '09n') {
			weatherIcon = <i className="wi wi-night-alt-showers" />;
		} else if (stateWeatherIcon === '10d') {
			weatherIcon = <i className="wi wi-day-sprinkle" />;
		} else if (stateWeatherIcon === '10n') {
			weatherIcon = <i className="wi wi-night-alt-rain-wind" />;
		} else if (stateWeatherIcon === '11d') {
			weatherIcon = <i className="wi wi-day-thunderstorm" />;
		} else if (stateWeatherIcon === '11n') {
			weatherIcon = <i className="wi wi-night-alt-thunderstorm" />;
		} else if (stateWeatherIcon === '13d') {
			weatherIcon = <i className="wi-day-snow-wind" />;
		} else if (stateWeatherIcon === '13n') {
			weatherIcon = <i className="wi wi-night-alt-snow" />;
		} else if (stateWeatherIcon === '50d') {
			weatherIcon = <i className="wi wi-dust" />;
		} else {
			weatherIcon = <span>Error</span>;
		}

		let windSpeedIcon = null;
		let stateWindSpeed = this.props.currentWeather.windSpeed;
		if (stateWindSpeed === '') {
			windSpeedIcon = <span>Loading...</span>;
		} else if (stateWindSpeed > 0 && stateWindSpeed <= 1) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-0" />;
		} else if (stateWindSpeed > 1 && stateWindSpeed <= 3) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-1" />;
		} else if (stateWindSpeed > 3 && stateWindSpeed <= 7) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-2" />;
		} else if (stateWindSpeed > 7 && stateWindSpeed <= 12) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-3" />;
		} else if (stateWindSpeed > 12 && stateWindSpeed <= 18) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-4" />;
		} else if (stateWindSpeed > 18 && stateWindSpeed <= 24) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-5" />;
		} else if (stateWindSpeed > 24 && stateWindSpeed <= 31) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-6" />;
		} else if (stateWindSpeed > 31 && stateWindSpeed <= 38) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-7" />;
		} else if (stateWindSpeed > 38 && stateWindSpeed <= 46) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-8" />;
		} else if (stateWindSpeed > 46 && stateWindSpeed <= 54) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-9" />;
		} else if (stateWindSpeed > 54 && stateWindSpeed <= 63) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-10" />;
		} else if (stateWindSpeed > 63 && stateWindSpeed <= 72) {
			windSpeedIcon = <i className="wi wi-wind-beaufort-11" />;
		} else if (stateWindSpeed > 73) {
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
