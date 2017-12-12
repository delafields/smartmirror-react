import { FETCH_WEATHER } from '../../config/constants';
import { WEATHER_KEY } from '../../config/keys';
import axios from 'axios';

// Gets current weather
export const fetchWeather = () => {
	return dispatch => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_KEY}&q=21014,us`
			)
			.then(res => {
				console.log(res.data);
				const weather = {
					weatherIcon: res.data.weather[0].icon,
					temperature: Math.round(res.data.main.temp * (9 / 5) - 459.67),
					humidity: res.data.main.humidity,
					windSpeed: res.data.wind.speed,
					windDirection: res.data.wind.deg
				};
				dispatch({ type: FETCH_WEATHER, payload: weather });
			});
	};
};
