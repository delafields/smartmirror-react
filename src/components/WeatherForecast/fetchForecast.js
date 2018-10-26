import { FETCH_FORECAST } from '../../config/constants';
import { WEATHER_KEY } from '../../config/keys';
import axios from 'axios';

// Get weather Forecast
export const fetchForecast = () => {
	return dispatch => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/forecast?zip=20009,us&appid=${WEATHER_KEY}`
			)
			.then(res => {
				const celsToFar = temp => {
					return Math.round(temp * (9 / 5) - 459.67);
				};
				const forecast = {
					temp1: celsToFar(res.data.list[0].main.temp),
					desc1: res.data.list[0].weather[0].description,
					temp2: celsToFar(res.data.list[1].main.temp),
					desc2: res.data.list[1].weather[0].description,
					temp3: celsToFar(res.data.list[2].main.temp),
					desc3: res.data.list[2].weather[0].description,
					temp4: celsToFar(res.data.list[3].main.temp),
					desc4: res.data.list[3].weather[0].description,
					temp5: celsToFar(res.data.list[4].main.temp),
					desc5: res.data.list[4].weather[0].description
				};
				dispatch({ type: FETCH_FORECAST, payload: forecast });
			});
	};
};
