import {combineReducers} from 'redux';
import subscriptionManagementReducer from './subscriptionManagement/reducer';
import menuManagementReducer from './menuManagement/reducer';

const rootReducer = combineReducers({
  subscriptionManagement: subscriptionManagementReducer,
  menuManagement: menuManagementReducer,
});

export default rootReducer;
