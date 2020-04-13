import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";
// import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
// import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
// import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'

class Tweet extends Component {
	render() {
		const {tweet} = this.props
		if (tweet === null) {
			return <p>Tweet does not exists</p>
		}

		return <div className="tweet"> </div>;
	}
}

function mapStateToProps({ tweets, users, authedUser }, { id }) {
	const tweet = tweets[id];
	const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
	return {
		authedUser,
		tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
		: null
	};
}

export default connect(mapStateToProps)(Tweet);
