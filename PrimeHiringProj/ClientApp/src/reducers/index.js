import { combineReducers } from 'redux'
import { candidateList } from './candidate'
import { currentId } from './currentId'
import { employees } from './employees'

export const reducers = combineReducers({
    candidateList,
    currentId,
    employees
})