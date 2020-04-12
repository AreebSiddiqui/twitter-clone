import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "../actions/tweets";
import { receiveAuthUsers } from "../actions/authedUser";

const authUser = "tylermcginnis";

// making an async call and returning a function not a object that's why we use middle-ware.
export function handleInitialData() {
	return (dispatch) => {
		return getInitialData().then(({ users, tweets }) => {
			dispatch(receiveTweets(tweets));
			dispatch(receiveUsers(users));
			dispatch(receiveAuthUsers(authUser));
		});
	};
}
