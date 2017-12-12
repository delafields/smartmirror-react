import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions';

import Carousel from 'nuka-carousel';
import '../styles/news.css';

class News extends Component {
	componentDidMount() {
		this.props.fetchNews();

		const twoHrs = 10 * 6000 * 60 * 2;

		this.newsInterval = setInterval(this.fetchNews, twoHrs);
	}

	componentWillUnmount() {
		clearInterval(this.newsInterval);
	}

	// Randomize article order
	fisherYatesShuffle(articles) {
		let currentIndex = articles.length,
			tempVal,
			randomIndex;

		while (0 !== currentIndex) {
			// Pick remaining article
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// Swap with current article
			tempVal = articles[currentIndex];
			articles[currentIndex] = articles[randomIndex];
			articles[randomIndex] = tempVal;
		}
		return articles;
	}

	render() {
		const carouselSettings = {
			autoplay: true,
			autoplayInterval: 5000,
			wrapAround: true
		};

		let newsArticles = this.fisherYatesShuffle(this.props.newsArticles);

		return (
			<div>
				<Carousel {...carouselSettings}>
					{newsArticles.map(({ title, description, author }, idx) => (
						<div key={idx}>
							<h4>
								{title}
								<span className="source">{author ? `(${author})` : ''}</span>
							</h4>
							<h5>{description}</h5>
						</div>
					))}
				</Carousel>
			</div>
		);
	}
}

function mapStateToProps({ newsArticles }) {
	return {
		newsArticles
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchNews
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
