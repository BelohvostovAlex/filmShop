const addToCart = (card) => {
    return {
        type: 'ADD_TO_CART',
        payload: card
    }
}

export default addToCart