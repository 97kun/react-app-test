import {createStore, combineReducers} from 'redux'

import {reducer1, reducer2} from './define'

const reducer = combineReducers({
  reducer1,
  reducer2
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
