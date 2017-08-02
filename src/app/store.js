import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import User from "./reducers/userReducer";
import Login from "./reducers/loginReducer";
import Event from "./reducers/eventsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

export default createStore(
    combineReducers({
        User,Login,Event
    }),
    {},
    composeEnhancers(
        applyMiddleware(logger(),thunk))

);