export const employ = employData => dispatch => {
    dispatch({
        type: 'EMPLOY',
        payload: employData
    })
}