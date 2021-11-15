import { useState } from 'react'
import { Modal, Button, Form, Space, DatePicker } from 'antd'
import { connect } from 'react-redux'
import { employ } from '../actions/employ'
import moment from 'moment'


function HireModal({selectedRows, ...restProps}) {
    const [form] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false)
    let today = new Date()
    const [values, setValues] = useState([])
    console.log(values, 'PLSWORK')
    const { RangePicker } = DatePicker
    console.log(restProps, 'propsies')


    const handleInputChangeRange = (date, dateString, fullName) => {
        console.log(date, 'aaaaa', dateString);
        console.log(fullName);
        setValues([
            ...values,
            ...[[fullName, ...dateString]]
        ])
    }


    const showModal = () => setIsModalVisible(true)

    const handleCancel = () => {
        setIsModalVisible(false)
        form.resetFields()
    }

    function getDatesRange(startDateData, stopDateData) {
        let dateArray = [];
        let currentDate = moment(startDateData);
        let stopDate = moment(stopDateData);
        while (currentDate <= stopDate) {
            dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }
    function checkIfDatesOverlap(pendingEmployeesData, currentEmployeesData) {
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


    const handleOk = () => {
        let values1 = [values]
        console.log(values)
        if (!values.length) {
            console.log(values)
            return Modal.warn({
                content: `Please select the candidate(s) and the dates of hire and departure.`
            })
        }
        if (values.some(value => value.length !== 3)) {
            Modal.warn({
                content: `Please fill out all the boxes.`
              })
        }
        else if (checkIfDatesOverlap(values, restProps.employees)) return setValues([])
        
        else {
            restProps.employ(restProps.employees, values1)
            Modal.success({
                content: 'Successfully employed the candidate(s).'
            })
            setIsModalVisible(false)}
    }

    const onFinish = () => {
        console.log('Form submited!')
        setIsModalVisible(false)
    }


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Hire selected
            </Button>
            <Space />
            <Modal
                title="Set the date ranges of future employment"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Submit
                    </Button>,
                ]}
            >   
            
                <Form labelCol={{ xs: { span: 6 } }} wrapperCol={{ xs: { span: 12 } }} form={form} onFinish={onFinish} scrollToFirstError>
                {selectedRows.map((element, key) =>
                    <>  
                        <h3>{element.fullName}</h3>
                        <Form.Item
                            label="Timerange of hire"
                            name="dateHired"
                            rules={[
                                {
                                required: false,
                                message: "Please input the time range of hire.",
                                },
                                {
                                max: 100,
                                message: 'Too many characters used!',
                                },
                            ]}
                        >              
                            <Space direction="vertical">
                                <RangePicker
                                    onChange={(date, dateString) => handleInputChangeRange(date, dateString, element.fullName)}
                                    disabledDate={d => !d || d.isBefore(today)}
                                />
                            </Space>
                        </Form.Item>
                    </>
                )}
                </Form>
            
            </Modal>
        </>
    )
}

const mapStateToProps = state => ({
    candidateList: state.candidateList.list,
    currentId: state.currentId,
    employees: state.employees
})

const mapActionToProps = {
    employ
}

export default connect(mapStateToProps, mapActionToProps)((HireModal));