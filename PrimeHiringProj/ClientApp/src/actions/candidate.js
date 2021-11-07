import api from "./api";
import { Modal } from 'antd'

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formatData = data => ({
    ...data,
    mobile: parseInt(data.mobile ? data.mobile : 0),
    pricePerHour: parseInt(data.pricePerHour ? data.pricePerHour : 0),
    yearsOfExperience: parseInt(data.yearsOfExperience ? data.yearsOfExperience: 0)
})

export const fetchAll = () => dispatch => {
    api.candidate().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message} There is an unknown error.`})
        )
}

export const create = (data, onSuccess) => async dispatch => {
    data = await formatData(data)
    console.log(data, 'aaaa')
    api.candidate().create(data).then(res => {
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        })
        onSuccess()
    })
    .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message} There is an unknown error with the request. Please provide the input again.`})
    )
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.candidate().update(id, data).then(res => {
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: {id: id, ...data}
        })
        onSuccess()
    })
    .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message} Please fill out all the required fields.`})
    )
}

export const Delete = (id, onSuccess) => dispatch => {
    api.candidate().delete(id).then(res => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message} Please fill out all the required fields.`})
    )
}