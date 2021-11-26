const setFilter = (index) => {
    return {
        type: 'SET_FILTER',
        payload: index
    }
}

export default setFilter