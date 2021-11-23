import { combineReducers } from "redux";

import cart from './cart'
import films from './films'

const rootReducer = combineReducers({
    cart,
    films
})

export default rootReducer