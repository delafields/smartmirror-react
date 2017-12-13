import { FETCH_FORECAST } from '../../config/constants';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_FORECAST:
			return action.payload;

		default:
			return state;
	}
}
