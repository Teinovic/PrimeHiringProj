import { useState } from 'react'
import { Modal, Button, Form, Space, DatePicker } from 'antd'
import { connect } from 'react-redux'
import { employ } from '../actions/employ'

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


    const handleOk = () => {
        let values1 = [values]
        // let employeesData = restProps.employees.push(values)
        restProps.employ(restProps.employees, values1)
        Modal.success({
            content: 'Successfully employed the candidate(s).'
          })
        setIsModalVisible(false)
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