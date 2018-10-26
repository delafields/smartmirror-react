import { FETCH_COLORS } from '../../config/constants';
import * as _ from 'lodash';
import axios from 'axios';

// get color palette
export const fetchColors = () => {
	return dispatch => {
		axios
			.get('http://www.colr.org/json/colors/random/7 ')
			.then(res => {
				//const colors = _.map(res.data.colors, 'hex');
				const colors = _.map(res.data.colors, 'hex').map(color => `#${color}`)
				dispatch({ type: FETCH_COLORS, payload: colors });
			});
	};
};
