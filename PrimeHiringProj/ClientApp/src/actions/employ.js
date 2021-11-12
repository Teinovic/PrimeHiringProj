export const employ = (employData, prevEmployData) => {
    const newEmployData = [...prevEmployData, ...employData]
    
    return {
        type: 'EMPLOY',
        payload: newEmployData
    }
}