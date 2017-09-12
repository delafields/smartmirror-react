import { combineReducers } from "redux";
import WeatherReducer from "./reducerWeather";
import ForecastReducer from "./reducerForecast";
import CalendarReducer from "./reducerCalendar";
import CryptosReducer from "./reducerCryptos";

import BBCNewsReducer from "./news/reducerBBC";
import BloomNewsReducer from "./news/reducerBloom";
import EconNewsReducer from "./news/reducerEcon";
import ScientistNewsReducer from "./news/reducerScientist";
import HackerNewsReducer from "./news/reducerHacker";

const rootReducer = combineReducers({
  currentWeather: WeatherReducer,
  weatherForecast: ForecastReducer,
  calendar: CalendarReducer,
  cryptos: CryptosReducer,
  bbcArticles: BBCNewsReducer,
  bloomArticles: BloomNewsReducer,
  econArticles: EconNewsReducer,
  sciArticles: ScientistNewsReducer,
  hackArticles: HackerNewsReducer
});

export default rootReducer;
