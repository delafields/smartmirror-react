import { FETCH_QUOTES } from '../../config/constants';
import * as _ from 'lodash';
import axios from 'axios';

// get news articles
export const fetchQuotes = () => {
	return dispatch => {
		const quotesAPI = `https://talaikis.com/api/quotes/random/`;
		axios.get(`${quotesAPI}`).then(res => {
			console.log(res.data)
		});
			//dispatch({ type: FETCH_QUOTES, payload: XXXXXX });
	};
