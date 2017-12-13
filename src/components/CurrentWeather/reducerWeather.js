import { FETCH_WEATHER } from '../../config/constants';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			return action.payload;

		default:
			return state;
	}
}
