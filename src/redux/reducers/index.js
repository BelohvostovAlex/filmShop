import { combineReducers } from "redux";

import filmReducer from './films'
import cartReducer from './cart'
import filterReducer from './filter'

const rootReducer = combineReducers({
    cart: cartReducer,
    films: filmReducer,
    filter: filterReducer
})

export default rootReducer