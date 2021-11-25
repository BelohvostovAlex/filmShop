import { combineReducers } from "redux";

import filmReducer from './films'
import cartReducer from './cart'

const rootReducer = combineReducers({
    cart: cartReducer,
    films: filmReducer
})

export default rootReducer