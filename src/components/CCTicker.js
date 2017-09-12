import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCryptos } from "../actions";

import "../styles/cc_ticker.css";

class CCTicker extends Component {
  componentWillMount() {
    this.props.fetchCryptos();
  }

  render() {
    let {
      btcPrice,
      btcHigh,
      btcLow,
      ethPrice,
      ethHigh,
      ethLow,
      ltcPrice,
      ltcHigh,
      ltcLow
    } = this.props.cryptos;

    return (
      <div>
        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker__item">
              <span className="tickerName">BTC:</span>
              <span className="tickerPrice">{btcPrice}</span>
              <span className="tickerHigh">{btcHigh}</span>
              <span className="tickerLow">{btcLow}</span>
            </div>
            <div className="ticker__item">
              <span className="tickerName">ETH:</span>
              <span className="tickerPrice">{ethPrice}</span>
              <span className="tickerHigh">{ethHigh}</span>
              <span className="tickerLow">{ethLow}</span>
            </div>
            <div className="ticker__item">
              <span className="tickerName">LTC:</span>
              <span className="tickerPrice">{ltcPrice}</span>
              <span className="tickerHigh">{ltcHigh}</span>
              <span className="tickerLow">{ltcLow}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cryptos: state.cryptos
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
