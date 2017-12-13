import { FETCH_FORECAST } from '../../config/constants';
import { WEATHER_KEY } from '../../config/keys';
import axios from 'axios';

// Get weather Forecast
export const fetchForecast = () => {
	return dispatch => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/forecast?zip=21014,us&appid=${WEATHER_KEY}`
			)
			.then(res => {
				const celsToFar = temp => {
					return Math.round(temp * (9 / 5) - 459.67);
				};
				console.log(res);
				/*const forecast = {
					temp1: Math.round(res.data.list[0].temp.day * (9 / 5) - 459.67),
					desc1: res.data.list[0].weather[0].description,
					temp2: Math.round(res.data.list[1].temp.day * (9 / 5) - 459.67),
					desc2: res.data.list[1].weather[0].description,
					temp3: Math.round(res.data.list[2].temp.day * (9 / 5) - 459.67),
					desc3: res.data.list[2].weather[0].description,
					temp4: Math.round(res.data.list[3].temp.day * (9 / 5) - 459.67),
					desc4: res.data.list[3].weather[0].description,
					temp5: Math.round(res.data.list[4].temp.day * (9 / 5) - 459.67),
					desc5: res.data.list[4].weather[0].description
				};
				dispatch({ type: FETCH_FORECAST, payload: forecast });
				*/
			});
	};
};
