import { combineReducers } from "redux";

// import cart from './cart'
import filmReducer from './films'

const rootReducer = combineReducers({

    films: filmReducer
})

export default rootReducer