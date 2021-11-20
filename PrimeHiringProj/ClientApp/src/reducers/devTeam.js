import { ACTION_TYPES } from "../actions/devTeam"

const initialState = {
    devTeam: []
}

export const devTeam = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                devTeam: [...payload]
            }  
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                devTeam: [...state.devTeam, payload]
            }  
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                devTeam: state.devTeam.map(x => x.id === payload.id ? payload : x)
            }  
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                devTeam: state.devTeam.filter(x => x !== payload)
        }  
        default:
            return state
    }
}