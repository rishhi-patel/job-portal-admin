import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const initialState = {};
const middlewares = [thunk];
let devtools = (x) => x;
devtools = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, initialState, compose(applyMiddleware(...middlewares), devtools));
export { store };
