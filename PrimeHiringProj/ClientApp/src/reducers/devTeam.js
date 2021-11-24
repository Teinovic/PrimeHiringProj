import { ACTION_TYPES } from "../actions/devTeam"

const initialState = {
    devTeamList: []
}

export const devTeam = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                devTeamList: [...payload]
            }  
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                devTeamList: [...state.devTeamList, payload]
            }  
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                devTeamList: state.devTeamList.map(x => x.id === payload.id ? payload : x)
            }  
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                devTeamList: state.devTeamList.filter(x => x !== payload)
        }  
        default:
            return state
    }
}