import { combineReducers } from 'redux';

import specialty from 'reducers/specialty/index';
import doctors from 'reducers/doctors/index';
import cases from 'reducers/cases/index';
import userAccount from 'reducers/user/index';
import healthDesk from 'reducers/healthDesk/index';
import modals from 'reducers/modals/index';

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  specialty,
  doctors,
  cases,
  userAccount,
  modals,
  healthDesk,
  form: formReducer
});

export default rootReducer;
