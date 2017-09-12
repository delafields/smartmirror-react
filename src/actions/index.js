import {
  FETCH_WEATHER,
  FETCH_FORECAST,
  FETCH_CALENDAR,
  FETCH_CRYPTOS,
  FETCH_BBC_NEWS,
  FETCH_BLOOM_NEWS,
  FETCH_ECON_NEWS,
  FETCH_SCIENTIST_NEWS,
  FETCH_HACKER_NEWS
} from "./types";
import {
  WEATHER_KEY,
  CALENDAR_KEY,
  CALENDAR_ID,
  NEWS_KEY
} from "../config/keys";
import axios from "axios";
import Moment from "moment";

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
            orderBy: "startTime",
            timeMin: Moment().format(),
            timeMax: Moment()
              .add(6, "months")
              .format()
          }
        }
      )
      .then(res => {
        console.log(res);
        const calendarEvents = {
          desc1: res.data.items[0].summary,
          event1: Moment(res.data.items[0].start.date).format("M/D"),
          desc2: res.data.items[1].summary,
          event2: Moment(res.data.items[1].start.date).format("M/D"),
          desc3: res.data.items[2].summary,
          event3: Moment(res.data.items[2].start.date).format("M/D"),
          desc4: res.data.items[3].summary,
          event4: Moment(res.data.items[3].start.date).format("M/D"),
          desc5: res.data.items[4].summary,
          event5: Moment(res.data.items[4].start.date).format("M/D")
        };
        dispatch({ type: FETCH_CALENDAR, payload: calendarEvents });
      });
  };
};

// Get cryptocurrency tickers
export const fetchCryptos = () => {
  return dispatch => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD"
      )
      .then(res => {
        const cryptos = {
          btcPrice: res.data.RAW.BTC.USD.PRICE,
          btcHigh: res.data.RAW.BTC.USD.HIGH24HOUR,
          btcLow: res.data.RAW.BTC.USD.LOW24HOUR,
          ethPrice: res.data.RAW.ETH.USD.PRICE,
          ethHigh: res.data.RAW.ETH.USD.HIGH24HOUR,
          ethLow: res.data.RAW.ETH.USD.LOW24HOUR,
          ltcPrice: res.data.RAW.LTC.USD.PRICE,
          ltcHigh: res.data.RAW.LTC.USD.HIGH24HOUR,
          ltcLow: res.data.RAW.LTC.USD.LOW24HOUR
        };
        dispatch({ type: FETCH_CRYPTOS, payload: cryptos });
      });
  };
};

// get news articles
export const fetchBBCNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${NEWS_KEY}`
      )
      .then(res => {
        const bbcArticles = {
          bbcT1: res.data.articles[0].title,
          bbcD1: res.data.articles[0].description,
          bbcT2: res.data.articles[1].title,
          bbcD2: res.data.articles[1].description,
          bbcT3: res.data.articles[2].title,
          bbcD3: res.data.articles[2].description
        };
        dispatch({ type: FETCH_BBC_NEWS, payload: bbcArticles });
      });
  };
};
export const fetchBloomNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=${NEWS_KEY}`
      )
      .then(res => {
        const bloomArticles = {
          bloomT1: res.data.articles[0].title,
          bloomD1: res.data.articles[0].description,
          bloomT2: res.data.articles[1].title,
          bloomD2: res.data.articles[1].description,
          bloomT3: res.data.articles[2].title,
          bloomD3: res.data.articles[2].description
        };
        dispatch({ type: FETCH_BLOOM_NEWS, payload: bloomArticles });
      });
  };
};
export const fetchEconNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=${NEWS_KEY}`
      )
      .then(res => {
        const econArticles = {
          econT1: res.data.articles[0].title,
          econD1: res.data.articles[0].description,
          econT2: res.data.articles[1].title,
          econD2: res.data.articles[1].description,
          econT3: res.data.articles[2].title,
          econD3: res.data.articles[2].description
        };
        dispatch({ type: FETCH_ECON_NEWS, payload: econArticles });
      });
  };
};
export const fetchHackerNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=${NEWS_KEY}`
      )
      .then(res => {
        const hackArticles = {
          hackT1: res.data.articles[0].title,
          hackD1: res.data.articles[0].description,
          hackT2: res.data.articles[1].title,
          hackD2: res.data.articles[1].description,
          hackT3: res.data.articles[2].title,
          hackD3: res.data.articles[2].description
        };
        dispatch({ type: FETCH_HACKER_NEWS, payload: hackArticles });
      });
  };
};
export const fetchScientistNews = () => {
  return dispatch => {
    axios
      .get(
        `https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${NEWS_KEY}`
      )
      .then(res => {
        const sciArticles = {
          sciT1: res.data.articles[0].title,
          sciD1: res.data.articles[0].description,
          sciT2: res.data.articles[1].title,
          sciD2: res.data.articles[1].description,
          sciT3: res.data.articles[2].title,
          sciD3: res.data.articles[2].description
        };
        dispatch({ type: FETCH_SCIENTIST_NEWS, payload: sciArticles });
      });
  };
};
