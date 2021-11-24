import { devTeam } from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

// export const employ = (employData, prevEmployData) => {
//     const newEmployData = [...prevEmployData, ...employData]
    
//     return {
//         type: ACTION_TYPES.CREATE,
//         payload: newEmployData
//     }
// }

export const fetchAll = () => async dispatch => {
    try {
        const response = await devTeam().fetchAll()
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: response.data
        })
    }
    catch (err) {
        console.error(err)
    }
}

export const create = (data, onSuccess) => async dispatch => {
    try {
        const response = await devTeam().create(data)
        console.log(data)
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: response.data
        })
        onSuccess()

    } catch (error) {
        console.error(error)
    }
}

export const update = (id, data, onSuccess) => async dispatch => {
    try {
        const response = await devTeam().update(id, data)
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: {id: id, ...data}
        })
        onSuccess()

    } catch (error) {
        console.error(error)
    }
}

export const Delete = (id, onSuccess) => async dispatch => {
    try {
        const response = await devTeam().delete(id)
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    } catch (error) {
        console.error(error)
    }
}