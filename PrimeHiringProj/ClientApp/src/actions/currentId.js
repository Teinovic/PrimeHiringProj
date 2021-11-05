export const updateCurrentId = id => dispatch => {
    dispatch({
        type: 'SET_CURRENT_ID',
        payload: id
    })
}