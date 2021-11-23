const initialState = {
    films: [
        {
            id: 0,
            title: 'Batman'
        }
    ],
    ids: []
}

function filmReducer (state = initialState, action) {
    switch(action.type) {
        case 'SET_FILM': 
        return {
            ...state,
            films: action.payload
        }
        case 'ADD_FILM': 
         return {
             ...state,
             films: [
                 ...state.films,
                 action.payload
             ]
        }
        default:
            return state
    }
}

export default filmReducer