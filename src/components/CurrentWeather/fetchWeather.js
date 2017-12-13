import { FETCH_WEATHER } from '../../config/constants';
import { WEATHER_KEY } from '../../config/keys';
import axios from 'axios';

// Gets current weather
export const fetchWeather = () => {
	return dispatch => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?zip=21014,us&appid=${WEATHER_KEY}`
			)
			.then(res => {
				const data = res.data;
				const celsToFar = temp => {
					return Math.round(temp * (9 / 5) - 459.67);
				};
				const weather = {
					weatherIcon: data.weather[0].icon,
					temperature: celsToFar(data.main.temp),
					humidity: data.main.humidity,
					windSpeed: data.wind.speed,
					windDirection: data.wind.deg
				};
				dispatch({ type: FETCH_WEATHER, payload: weather });
			});
	};
};
