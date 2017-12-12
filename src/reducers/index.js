import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather';
import ForecastReducer from './reducerForecast';
import CalendarReducer from './reducerCalendar';
import CryptosReducer from './reducerCryptos';

import NewsReducer from './reducerNews';

const rootReducer = combineReducers({
	currentWeather: WeatherReducer,
	weatherForecast: ForecastReducer,
	calendar: CalendarReducer,
	cryptos: CryptosReducer,
	newsArticles: NewsReducer
});

export default rootReducer;
