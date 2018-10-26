import { FETCH_COLORS } from '../../config/constants';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_COLORS:
			return action.payload;
		default:
			return state;
	}
}
