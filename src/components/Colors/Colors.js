import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchColors } from './fetchColors';

import './colors.css';

class Colors extends Component {
	componentDidMount() {
		this.props.fetchColors();

		const twelveHrs = 10 * 6000 * 60 * 12;

		this.colorsInterval = setInterval(this.fetchColors, twelveHrs);
	}

	componentWillUnmount() {
		clearInterval(this.colorsInterval);
	}

	render() {

		let colors = this.props.colors

		return (
			<div id="color-box">
				{colors.map((color, idx) => (
					<div
						className="color"
						style={{backgroundColor: `${color}`}}
						key={idx}
					/>
				))}
			</div>
		);
	}
}

function mapStateToProps({ colors }) {
	return {
		colors
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchColors
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
