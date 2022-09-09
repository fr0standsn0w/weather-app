import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import widgetReducer from "./widget-reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({
    widgetPage: widgetReducer
})

let store = createStore(reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))

window.store = store;

export default store;