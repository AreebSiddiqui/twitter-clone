import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/user";
import { receiveTweets } from "../actions/tweets";
import { receiveAuthUsers } from "../actions/authedUser";

const authUser = "tylermcginnis";

// making an async call
export function handleInitialData() {
	return (dispatch) => {
		return getInitialData().then(({ users, tweets }) => {
			dispatch(receiveTweets(tweets));
			dispatch(receiveUsers(users));
			dispatch(receiveAuthUsers(authUser));
		});
	};
}
