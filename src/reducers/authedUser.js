// this is basically a reducer which deals with the authUser slice of the state
import { SET_AUTH_USERS } from "../actions/authedUser";

//below is the reducer function which takes the current state and action as an parameter
// and returns the new state

export default function authedUsers(state = null, action) {
	switch (action.type) {
		case SET_AUTH_USERS:
			return action.id
		default:
			return state;
	}
}
