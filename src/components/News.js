import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchBBCNews,
  fetchScientistNews,
  fetchBloomNews,
  fetchEconNews,
  fetchHackerNews
} from "../actions";

import Carousel from "nuka-carousel";
import "../styles/news.css";

class News extends Component {
  componentWillMount() {
    this.props.fetchBBCNews();
    this.props.fetchScientistNews();
    this.props.fetchBloomNews();
    this.props.fetchEconNews();
    this.props.fetchHackerNews();

    const twoHrs = 10 * 6000 * 60 * 2;

    this.bbcInterval = setInterval(this.fetchBBCNews, twoHrs);
    this.scientistInterval = setInterval(this.fetchScientistNews, twoHrs);
    this.bloomInterval = setInterval(this.fetchBloomNews, twoHrs);
    this.econInterval = setInterval(this.fetchEconNews, twoHrs);
    this.hackerInterval = setInterval(this.fetchHackerNews, twoHrs);
  }

  componentWillUnmount() {
    clearInterval(this.bbcInterval);
    clearInterval(this.scientistInterval);
    clearInterval(this.bloomInterval);
    clearInterval(this.econInterval);
    clearInterval(this.hackerInterval);
  }

  render() {
    const carouselSettings = {
      autoplay: true,
      autoplayInterval: 5000,
      wrapAround: true
    };

    let { bbcT1, bbcT2, bbcT3, bbcD1, bbcD2, bbcD3 } = this.props.bbcArticles;
    let {
      bloomT1,
      bloomT2,
      bloomT3,
      bloomD1,
      bloomD2,
      bloomD3
    } = this.props.bloomArticles;
    let {
      econT1,
      econT2,
      econT3,
      econD1,
      econD2,
      econD3
    } = this.props.econArticles;
    let { sciT1, sciT2, sciT3, sciD1, sciD2, sciD3 } = this.props.sciArticles;
    let {
      hackT1,
      hackT2,
      hackT3,
      hackD1,
      hackD2,
      hackD3
    } = this.props.hackArticles;

    return (
      <div>
        <Carousel {...carouselSettings}>
          <div>
            <h4>
              {bbcT1}
              <span className="source"> (BBC)</span>
            </h4>
            <h5>{bbcD1}</h5>
          </div>
          <div>
            <h4>
              {econT1}
              <span className="source"> (The Economist)</span>
            </h4>
            <h5>{econD1}</h5>
          </div>
          <div>
            <h4>
              {sciT1}
              <span className="source"> (New Scientist)</span>
            </h4>
            <h5>{sciD1}</h5>
          </div>
          <div>
            <h4>
              {hackT1}
              <span className="source"> (Hacker News)</span>
            </h4>
            <h5>{hackD1}</h5>
          </div>
          <div>
            <h4>
              {bloomT1}
              <span className="source"> (Bloomberg)</span>
            </h4>
            <h5>{bloomD1}</h5>
          </div>
          <div>
            <h4>
              {bbcT2}
              <span className="source"> (BBC)</span>
            </h4>
            <h5>{bbcD2}</h5>
          </div>
          <div>
            <h4>
              {econT2}
              <span className="source"> (The Economist)</span>
            </h4>
            <h5>{econD2}</h5>
          </div>
          <div>
            <h4>
              {sciT2}
              <span className="source"> (New Scientist)</span>
            </h4>
            <h5>{sciD2}</h5>
          </div>
          <div>
            <h4>
              {hackT2}
              <span className="source"> (Hacker News)</span>
            </h4>
            <h5>{hackD2}</h5>
          </div>
          <div>
            <h4>
              {bloomT2}
              <span className="source"> (Bloomberg)</span>
            </h4>
            <h5>{bloomD2}</h5>
          </div>
          <div>
            <h4>
              {bbcT3}
              <span className="source"> (BBC)</span>
            </h4>
            <h5>{bbcD3}</h5>
          </div>
          <div>
            <h4>
              {econT3}
              <span className="source"> (The Economist)</span>
            </h4>
            <h5>{econD3}</h5>
          </div>
          <div>
            <h4>
              {sciT3}
              <span className="source"> (New Scientist)</span>
            </h4>
            <h5>{sciD3}</h5>
          </div>
          <div>
            <h4>
              {hackT3}
              <span className="source"> (Hacker News)</span>
            </h4>
            <h5>{hackD3}</h5>
          </div>
          <div>
            <h4>
              {bloomT3}
              <span className="source"> (Bloomberg)</span>
            </h4>
            <h5>{bloomD3}</h5>
          </div>
        </Carousel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bbcArticles: state.bbcArticles,
    sciArticles: state.sciArticles,
    bloomArticles: state.bloomArticles,
    econArticles: state.econArticles,
    hackArticles: state.hackArticles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchBBCNews,
      fetchHackerNews,
      fetchBloomNews,
      fetchScientistNews,
      fetchEconNews
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
