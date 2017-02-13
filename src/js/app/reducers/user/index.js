import { combineReducers } from 'redux';

import userAccount from './userAccount';

const user = combineReducers({
	userAccount
});

export default user;
