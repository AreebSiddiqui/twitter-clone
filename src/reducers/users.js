// this is basically a reducer which deals with the users state

import { RECEIVE_USERS } from "../actions/users";

//below is the reducer function which takes the current state and action as an parameter
// and returns the new state

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		default:
			return state;
	}
}
