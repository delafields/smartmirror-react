import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCalendar } from './fetchCalendar';
import moment from 'moment';

import './calendar.css';

class Calendar extends Component {
	componentDidMount() {
		this.props.fetchCalendar();
		this.interval = setInterval(this.fetchCalendar, 10 * 6000 * 60 * 2); // 2 hrs
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		let calData = this.props.calendar;

		return (
			<div style={{ paddingLeft: '60px' }}>
				<table>
					<colgroup>
						<col style={{ width: '60px' }} />
						<col style={{ width: '200px' }} />
					</colgroup>
					<tbody>
						{calData.map((event, idx) => (
							<tr key={idx}>
								<td className="calDate">
									<i className="fa fa-calendar-o" aria-hidden="true" />
									{moment(event.start.date).format('M/D')}
								</td>
								<td>
									<span className="calEvent">{event.summary}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps({ calendar }) {
	return { calendar };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchCalendar
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
