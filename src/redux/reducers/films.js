const initialState = {
    isReady: false,
    items: null
}

function filmReducer (state = initialState, action) {
    switch(action.type) {
        case 'SET_FILM': 
        return {
            ...state,
            items: action.payload,
            isReady: true,
        }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isReady: action.payload
            }
        default:
            return state
    }
}

export default filmReducer