const initialState = []

export const employees = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'EMPLOY':
            return payload  
        default:
            return state
        }
}