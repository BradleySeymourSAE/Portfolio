import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from './actions';
import * as reducers from './reducers';

const rootReducer = combineReducers({
  ...reducers
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(),
));

export { actions };
export default store;
