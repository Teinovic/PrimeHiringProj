import { combineReducers } from 'redux'
import { candidateList } from './candidate'
import { currentId } from './currentId'
import { devTeam } from './devTeam'

export const reducers = combineReducers({
    candidateList,
    currentId,
    devTeam
})