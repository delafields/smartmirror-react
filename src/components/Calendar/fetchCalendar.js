import { FETCH_CALENDAR } from '../../config/constants';
import { CALENDAR_KEY, CALENDAR_ID } from '../../config/keys';
import * as _ from 'lodash';
import axios from 'axios';
import Moment from 'moment';

export const fetchCalendar = () => {
	return dispatch => {
		axios
			.get(
				`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
				{
					params: {
						key: CALENDAR_KEY,
						singleEvents: true,
						orderBy: 'startTime',
						timeMin: Moment().format(),
						timeMax: Moment()
							.add(6, 'months')
							.format()
					}
				}
			)
			.then(res => {
				const calendarEvents = _.map(
					res.data.items,
					_.partialRight(_.pick, ['summary', 'start.date'])
				);

				dispatch({ type: FETCH_CALENDAR, payload: calendarEvents });
			});
	};
};
