const initialState = {
    id: 0
}

export const currentId = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENT_ID':
            console.log(payload)
            return payload  
        default:
            return state
        }
}
