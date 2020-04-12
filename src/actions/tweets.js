export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function receiveAuthUsers(tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets,
	};
}
