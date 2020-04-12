// this is basically a reducer which deals with the tweet state

import { RECEIVE_TWEETS } from "../actions/tweets";

//below is the reducer function which takes the current state and action as an parameter
// and returns the new state

export default function tweets(state = {}, action) {
	switch (action.type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				...action.tweets,
			};
		default:
			return state;
	}
}
