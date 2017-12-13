import { FETCH_CRYPTOS } from '../../config/constants';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CRYPTOS:
			return action.payload;
		default:
			return state;
	}
}
