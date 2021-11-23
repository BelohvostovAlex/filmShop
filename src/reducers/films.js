const initialState = {
    films: []
}

export default (state, action) => {
    switch(action.type) {
        case 'ADD_FILM': 
         return {
             films: [
                 ...state.films,
                 action.payload
             ]
        }
        default:
            return state
    }
}