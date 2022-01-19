import { createStore, applyMiddleware, combineReducers } from "redux";
import { todoReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    todos: todoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
