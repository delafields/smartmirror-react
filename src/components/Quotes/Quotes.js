import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuotes } from './fetchQuotes';

import './quotes.css';

class Quotes extends Component {
	componentDidMount() {
		this.props.fetchQuotes();

		const twelveHrs = 10 * 6000 * 60 * 12;

		this.quoteInterval = setInterval(this.fetchQuotes, twelveHrs);
	}

	componentWillUnmount() {
		clearInterval(this.quoteInterval);
	}

	render() {

		let quote = this.props.quote

		return (
			<div>
				<h6>{this.props.quote}</h6>
			</div>
		);
	}
}

function mapStateToProps({ quote }) {
	return {
		quote
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchQuotes
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
