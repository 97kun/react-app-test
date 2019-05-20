import {createStore, combineReducers} from 'redux'

import * as reducers from './define'

const reducer = combineReducers(reducers);
console.log(reducers);

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
