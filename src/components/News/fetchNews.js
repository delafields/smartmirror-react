import { FETCH_NEWS } from '../../config/constants';
import { NEWS_KEY } from '../../config/keys';
import * as _ from 'lodash';
import axios from 'axios';

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
