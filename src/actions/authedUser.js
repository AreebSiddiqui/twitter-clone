export const SET_AUTH_USERS = "SET_AUTH_USERS";

export function receiveAuthUsers(id) {
	return {
		type: SET_AUTH_USERS,
		id,
	};
}
