import { Modal } from "antd"
import moment from "moment"

export function checkIfDatesOverlap(pendingEmployeesData, currentEmployeesData) {
    for (let pendingEmployee of pendingEmployeesData) {
        let potentialEmployeeName = pendingEmployee[0]
        let potentialEmployeeStartDate = pendingEmployee[1]
        let potentialEmployeeEndDate = pendingEmployee[2]
        for (let employeeData of currentEmployeesData) {
            for (let employeeTeamData of employeeData) {
                let employeeName = employeeTeamData[0]
                let employeeStartDate = employeeTeamData[1]
                let employeeEndDate = employeeTeamData[2]
                if (potentialEmployeeName === employeeName) {
                    if (getDatesRange(potentialEmployeeStartDate, potentialEmployeeEndDate)
                        .some(date => getDatesRange(employeeStartDate, employeeEndDate).includes(date))) {
                            Modal.warn({
                                content: `Unsuccessfully employed the candidate(s). Can't hire ${employeeName} from ${employeeStartDate} to ${employeeEndDate}
                                because that candidate is already employed on another team in that timeframe.`
                              })
                            return true
                        }
                }
            }
        }
    }
}

export function getDatesRange(startDateData, stopDateData) {
    let dateArray = [];
    let currentDate = moment(startDateData);
    let stopDate = moment(stopDateData);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}