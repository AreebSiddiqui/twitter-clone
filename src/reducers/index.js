// Combining all the reducers i.e 'tweets' , 'users' , 'authedUser' and exporting them
import { combineReducers } from "redux";
import tweets from "./tweets";
import users from "./users";
import authedUser from "./authedUser";

// we have to make combineReducers function, as createStore function only accepts one Reducer as a parameter.
// Functionality of combineReducer?
// a: combine all reducer into one main root reducer, which will combine the results of calling
// tweets, users, authedUser reducer into one single state object.

export default combineReducers({
	tweets,
	users,
	authedUser,
});
