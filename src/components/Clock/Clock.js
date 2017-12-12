import React, { Component } from 'react';
import Moment from 'moment';
import 'moment-timezone';

import './clock.css';

export default class Clock extends Component {
	constructor(props) {
		super(props);

		const timezone = Moment.tz('America/New_York');

		this.state = {
			currentDate: timezone.format('dddd, MMMM Do').toString(),
			currentTime: timezone.format('h:mm:ss A').toString()
		};
	}

	updateClock = () => {
		const timezone = Moment.tz('America/New_York');

		this.setState({
			currentTime: timezone.format('h:mm A').toString(),
			currentDate: timezone.format('dddd, MMMM Do').toString()
		});
	};

	componentDidMount() {
		this.interval = setInterval(this.updateClock, 1000);
	}

	render() {
		return (
			<div id="clock">
				<div id="date">{this.state.currentDate}</div>
				<div id="time">{this.state.currentTime}</div>
			</div>
		);
	}
}
