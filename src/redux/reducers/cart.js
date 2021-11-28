const initialState = {
    items: [],
    totalPrice: 0,
    isLoading: false
}


const cartReducer = (state = initialState, action) => {
    const totalSum = (arr) => arr.reduce((acc,curr) => acc + curr.price,0)
    switch(action.type) {
        case 'ADD_TO_CART': 
            const newItems = {
                ...state,
                items: [...state.items, action.payload],
            }
            return {
                ...newItems,
                totalPrice: totalSum(newItems.items)
            }
            

        case 'REMOVE_FROM_CART':
            {const newItems = {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
            return {
                ...newItems,
                totalPrice: totalSum(newItems.items)
            }}
        default: 
        return state
    }
}

export default cartReducer