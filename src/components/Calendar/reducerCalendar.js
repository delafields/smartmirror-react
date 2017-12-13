import { FETCH_CALENDAR } from '../../config/constants';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CALENDAR:
			return action.payload;

		default:
			return state;
	}
}
