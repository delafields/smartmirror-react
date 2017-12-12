import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	fetchBBCNews,
	fetchScientistNews,
	fetchBloomNews,
	fetchEconNews,
	fetchHackerNews
} from '../actions';

import Carousel from 'nuka-carousel';
import '../styles/news.css';

class News extends Component {
	componentDidMount() {
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

		let bbcArticles = this.props.bbcArticles;
		let bloomArticles = this.props.bloomArticles;
		let econArticles = this.props.econArticles;
		let sciArticles = this.props.sciArticles;
		let hackArticles = this.props.hackArticles;

		return (
			<div>
				<Carousel {...carouselSettings}>
					{bbcArticles.map((article, idx) => (
						<div key={idx}>
							<h4>
								{article.title}
								<span className="source">({article.author})</span>
							</h4>
							<h5>{article.description}</h5>
						</div>
					))}
					{bloomArticles.map((article, idx) => (
						<div key={idx}>
							<h4>
								{article.title}
								<span className="source">({article.author})</span>
							</h4>
							<h5>{article.description}</h5>
						</div>
					))}
					{econArticles.map((article, idx) => (
						<div key={idx}>
							<h4>
								{article.title}
								<span className="source">({article.author})</span>
							</h4>
							<h5>{article.description}</h5>
						</div>
					))}
					{sciArticles.map((article, idx) => (
						<div key={idx}>
							<h4>
								{article.title}
								<span className="source">({article.author})</span>
							</h4>
							<h5>{article.description}</h5>
						</div>
					))}
					{hackArticles.map((article, idx) => (
						<div key={idx}>
							<h4>
								{article.title}
								<span className="source">({article.author})</span>
							</h4>
							<h5>{article.description}</h5>
						</div>
					))}
				</Carousel>
			</div>
		);
	}
}

function mapStateToProps({
	bbcArticles,
	sciArticles,
	bloomArticles,
	econArticles,
	hackArticles
}) {
	return {
		bbcArticles,
		sciArticles,
		bloomArticles,
		econArticles,
		hackArticles
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
