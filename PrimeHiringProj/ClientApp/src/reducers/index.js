import { combineReducers } from 'redux'
import { candidateList } from './candidate'
import { currentId } from './currentId'

export const reducers = combineReducers({
    candidateList,
    currentId
})