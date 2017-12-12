import React, { Component } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchForecast } from '../actions';

import '../styles/forecast.css';

class Forecast extends Component {
	componentWillMount() {
		this.props.fetchForecast();
		this.interval = setInterval(this.fetchForecast, 10 * 6000 * 60 * 6); // 6 hrs
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const tmr = Moment()
			.add(1, 'day')
			.calendar()
			.split(' ')[0];
		const tmrp1 = Moment()
			.add(2, 'day')
			.calendar()
			.split(' ')[0];
		const tmrp2 = Moment()
			.add(3, 'day')
			.calendar()
			.split(' ')[0];
		const tmrp3 = Moment()
			.add(4, 'day')
			.calendar()
			.split(' ')[0];
		const tmrp4 = Moment()
			.add(5, 'day')
			.calendar()
			.split(' ')[0];

		let {
			temp1,
			temp2,
			temp3,
			temp4,
			temp5,
			desc1,
			desc2,
			desc3,
			desc4,
			desc5
		} = this.props.weatherForecast;

		return (
			<div>
				<table>
					<colgroup>
						<col style={{ width: '70px' }} />
						<col style={{ width: '20px' }} />
						<col style={{ width: '150px' }} />
					</colgroup>
					<tbody>
						<tr>
							<th className="forecastTitle">{tmr}:</th>
							<th className="forecastTemp">{temp1}&#176;</th>
							<th className="forecastDescription">{desc1}</th>
						</tr>
						<tr>
							<th className="forecastTitle">{tmrp1}:</th>
							<th className="forecastTemp">{temp2}&#176;</th>
							<th className="forecastDescription">{desc2}</th>
						</tr>
						<tr>
							<th className="forecastTitle">{tmrp2}:</th>
							<th className="forecastTemp">{temp3}&#176;</th>
							<th className="forecastDescription">{desc3}</th>
						</tr>
						<tr>
							<th className="forecastTitle">{tmrp3}:</th>
							<th className="forecastTemp">{temp4}&#176;</th>
							<th className="forecastDescription">{desc4}</th>
						</tr>
						<tr>
							<th className="forecastTitle">{tmrp4}:</th>
							<th className="forecastTemp">{temp5}&#176;</th>
							<th className="forecastDescription">{desc5}</th>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		weatherForecast: state.weatherForecast
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchForecast
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
