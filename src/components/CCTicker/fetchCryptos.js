import { FETCH_CRYPTOS } from '../../config/constants';
import * as _ from 'lodash';
import axios from 'axios';

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
