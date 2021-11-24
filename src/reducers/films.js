const initialState = {
    isLoading: false,
    items: null,
}

function filmReducer (state = initialState, action) {
    switch(action.type) {
        case 'SET_FILM': 
        return {
            ...state,
            items: action.payload,
            isLoading: true,
        }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default filmReducer