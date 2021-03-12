import {combineReducers} from 'redux';
import subscriptionManagementReducer from './subscriptionManagement/reducer';

const rootReducer = combineReducers({
  subscriptionManagement: subscriptionManagementReducer,
});

export default rootReducer;
