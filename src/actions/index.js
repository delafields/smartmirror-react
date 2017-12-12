import {
	FETCH_WEATHER,
	FETCH_FORECAST,
	FETCH_CALENDAR,
	FETCH_CRYPTOS,
	FETCH_NEWS
} from './types';
import {
	WEATHER_KEY,
	CALENDAR_KEY,
	CALENDAR_ID,
	NEWS_KEY
} from '../config/keys';
import * as _ from 'lodash';
import axios from 'axios';
import Moment from 'moment';

// Gets current weather
export const fetchWeather = () => {
	return dispatch => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_KEY}&q=21014,us`
			)
			.then(res => {
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

// Get weather Forecast
export const fetchForecast = () => {
	return dispatch => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/forecast/daily?appid=${WEATHER_KEY}&q=21014,us&cnt=5`
			)
			.then(res => {
				console.log(res);
				const forecast = {
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
			});
	};
};

// Get calendar
export const fetchCalendar = () => {
	return dispatch => {
		axios
			.get(
				`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
				{
					params: {
						key: CALENDAR_KEY,
						singleEvents: true,
						orderBy: 'startTime',
						timeMin: Moment().format(),
						timeMax: Moment()
							.add(6, 'months')
							.format()
					}
				}
			)
			.then(res => {
				const calendarEvents = _.map(
					res.data.items,
					_.partialRight(_.pick, ['summary', 'start.date'])
				);

				dispatch({ type: FETCH_CALENDAR, payload: calendarEvents });
			});
	};
};

// Get cryptocurrency tickers
export const fetchCryptos = () => {
	return dispatch => {
		axios
			.get(
				'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD'
			)
			.then(res => {
				const formatJSON = _.map(res.data.RAW, CC => {
					return _.pick(CC.USD, [
						'FROMSYMBOL',
						'PRICE',
						'HIGH24HOUR',
						'LOW24HOUR'
					]);
				});

				dispatch({ type: FETCH_CRYPTOS, payload: formatJSON });
			});
	};
};

// get news articles
export const fetchNews = () => {
	return dispatch => {
		let news = [];
		const newsAPI = `https://newsapi.org/v1/articles?source=`;
		const queryParams = `&sortBy=top&apiKey=${NEWS_KEY}`;
		axios.get(`${newsAPI}bbc-news${queryParams}`).then(res => {
			const sliceRes = res.data.articles.slice(0, 3);
			const formatJSON = _.map(sliceRes, article => {
				return _.pick(article, ['author', 'title', 'description']);
			});
			news.push(formatJSON);
		});
		axios.get(`${newsAPI}bloomberg${queryParams}`).then(res => {
			const sliceRes = res.data.articles.slice(0, 3);
			const formatJSON = _.map(sliceRes, article => {
				return _.pick(article, ['author', 'title', 'description']);
			});
			news.push(formatJSON);
		});

		axios.get(`${newsAPI}the-economist${queryParams}`).then(res => {
			const sliceRes = res.data.articles.slice(0, 3);
			const formatJSON = _.map(sliceRes, article => {
				return _.pick(article, ['author', 'title', 'description']);
			});
			news.push(formatJSON);
		});

		axios.get(`${newsAPI}hacker-news${queryParams}`).then(res => {
			const sliceRes = res.data.articles.slice(0, 3);
			const formatJSON = _.map(sliceRes, article => {
				return _.pick(article, ['author', 'title', 'description']);
			});
			news.push(formatJSON);
		});

		axios.get(`${newsAPI}new-scientist${queryParams}`).then(res => {
			const sliceRes = res.data.articles.slice(0, 3);
			const formatJSON = _.map(sliceRes, article => {
				return _.pick(article, ['author', 'title', 'description']);
			});
			news.push(formatJSON);
			let concatNews = [].concat.apply([], news);

			dispatch({ type: FETCH_NEWS, payload: concatNews });
		});
	};
};
