export const setFilter = (type) => {
    return {
        type: 'SET_FILTER',
        payload: type
    }
}

export const setQuery = (value) => {
    return {
        type: 'SET_QUERY',
        payload: value
    }
}
