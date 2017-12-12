import { combineReducers } from 'redux';
import WeatherReducer from './components/CurrentWeather/reducerWeather';
import ForecastReducer from './components/WeatherForecast/reducerForecast';
import CalendarReducer from './components/Calendar/reducerCalendar';
import CryptosReducer from './components/CCTicker/reducerCryptos';
import NewsReducer from './components/News/reducerNews';

const rootReducer = combineReducers({
	currentWeather: WeatherReducer,
	weatherForecast: ForecastReducer,
	calendar: CalendarReducer,
	cryptos: CryptosReducer,
	newsArticles: NewsReducer
});

export default rootReducer;
