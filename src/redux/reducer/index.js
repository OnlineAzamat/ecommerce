import handleCart from "./handleCart";
import addItems from "./addItem";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    addItems,
})

export default rootReducers