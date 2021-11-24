import { useState } from 'react'
import { Modal, Button, Form, Space, DatePicker } from 'antd'
import { connect } from 'react-redux'
import * as apiActions from '../actions/devTeam'
import { checkIfDatesOverlap } from '../utilities/utilFunctions'
import { useHistory } from "react-router-dom"
import { continueStatement } from '@babel/types'



function HireModal({selectedRows, ...restProps}) {
    const [form] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false)
    let today = new Date()
    const [values, setValues] = useState([])
    const { RangePicker } = DatePicker
    let history = useHistory()
    console.log(selectedRows)

    const handleInputChangeRange = (date, dateString, fullName) => {
        //date unused but should stay as a param 
        setValues([
            ...values,
            ...[[fullName, ...dateString]]
        ])
    }
    console.log(values)


    const showModal = () => setIsModalVisible(true)

    const handleCancel = () => {
        setIsModalVisible(false)
        form.resetFields()
    }


    const handleOk = () => {

        const valuesToSend = {
            teamMembersNames: '',
            teamMembersHireDates: '',
            teamMembersLeaveDates: '',
        }
        // let values1 = [values]
        console.log(values)
        for (let arr of values) {
            valuesToSend.teamMembersNames += arr[0] + ','
            valuesToSend.teamMembersHireDates += arr[1] + ','
            valuesToSend.teamMembersLeaveDates += arr[2] + ','
        }


        console.log(valuesToSend)
        console.log(restProps, 'logogogo')

        if (!values.length) {
            return Modal.warn({
                content: `Please select the candidate(s) and the dates of hire and departure.`
            })
        }
        if (values.some(value => value.length !== 3)) {
            Modal.warn({
                content: `Please fill out all the boxes.`
              })
        }
        // else if (checkIfDatesOverlap(values, restProps.devTeam.devTeam)) {            
        //     return form.resetFields()
        // }
        
        else {
            restProps.createDevTeam(valuesToSend, () => Modal.success(
                {
                    content: 'Successfully employed the candidate(s).'
                }
              )
            )
            form.resetFields()
            setIsModalVisible(false)
            history.push("/Employees")
        }

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
                    <div key={element.id}>  
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
                    </div>
                )}
                </Form>
            
            </Modal>
        </>
    )
}

const mapStateToProps = state => ({
    candidateList: state.candidateList.list,
    currentId: state.currentId,
    devTeam: state.devTeam.devTeamList
})

const mapActionToProps = {
    fetchAllDevTeams: apiActions.fetchAll,
    createDevTeam: apiActions.create,
    deleteDevTeam: apiActions.Delete
}

export default connect(mapStateToProps, mapActionToProps)((HireModal));