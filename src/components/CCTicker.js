import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCryptos } from '../actions';

import '../styles/cc_ticker.css';

class CCTicker extends Component {
	componentDidMount() {
		this.props.fetchCryptos();
		this.interval = setInterval(this.fetchCryptos, 10 * 6000 * 30); // 30 minutes
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		let ccData = this.props.cryptos;
		return (
			<div>
				<div className="ticker-wrap">
					<div className="ticker">
						{ccData.map((cc, idx) => (
							<div className="ticker__item" key={idx}>
								<span className="tickerName">{cc.FROMSYMBOL}</span>
								<span className="tickerPrice">{cc.PRICE}</span>
								<span className="tickerHigh">{cc.HIGH24HOUR}</span>
								<span className="tickerLow">{cc.LOW24HOUR}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ cryptos }) {
	return {
		cryptos
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchCryptos
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(CCTicker);
