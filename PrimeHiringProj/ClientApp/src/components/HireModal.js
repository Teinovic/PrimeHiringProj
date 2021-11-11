import { useState } from 'react'
import { Modal, Button, Form, Input, Radio, Space, DatePicker } from 'antd'

export default function HireModal({selectedRows}) {
    const [form] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false)
    let today = new Date()
    const [values, setValues] = useState({})
    console.log(values)

    const handleInputChange = e => {
        console.log(e.target)
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }
    const handleInputChangeStartingDate = (date, dateString, fullName) => {
        // const dateToString =  e._d.toString()
        // console.log(e)
        console.log(date, 'aaaaa', dateString);
        console.log(fullName);
        setValues({
            ...values,
            ...{ [fullName]: dateString }
        })
    }

    const handleInputChangeEndDate = (date, dateString, fullName) => {
        // const dateToString =  e._d.toString()
        // console.log(e)
        console.log(date, dateString);
        console.log(fullName);
        setValues({
            ...values,
            ...{ [fullName]: dateString }
        })
    }

    const showModal = () => setIsModalVisible(true)

    const handleCancel = () => {
        setIsModalVisible(false)
        form.resetFields()
    }

    const handleOk = () => {
        form.submit()
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

            <Modal
                title="Basic Modal"
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
                        label="Hired"
                        name="hired"
                        rules={[
                            {
                            required: false,
                            message: "Please input the candidate's status.",
                            },
                            {
                            max: 100,
                            message: 'Too many characters used!',
                            },
                        ]}
                    >
                        <Radio.Group 
                            name={`hired ${element.fullName}`}
                            value={element.fullName} 
                            onChange={handleInputChange}
                        >
                            <Radio value="yes" name="hired">Yes</Radio>
                            <Radio value="no" name="hired">No</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Date of Hire"
                        name="dateHired"
                        rules={[
                            {
                            required: false,
                            message: "Please input the date of hire.",
                            },
                            {
                            max: 100,
                            message: 'Too many characters used!',
                            },
                        ]}
                    >              
                        <Space direction="vertical">
                            <DatePicker
                                onChange={(date, dateString) => handleInputChangeStartingDate(date, dateString, element.fullName)}
                                disabledDate={d => !d || d.isBefore(today)}
                            />
                        </Space>
                    </Form.Item>
                    <Form.Item
                        label="Date of Departure"
                        name="dateDeparture"
                        rules={[
                            {
                            required: false,
                            message: "Please input the date of departure.",
                            },
                            {
                            max: 100,
                            message: 'Too many characters used!',
                            },
                        ]}
                    >
                        <Space direction="vertical">
                            <DatePicker
                                onChange={(date, dateString) => handleInputChangeEndDate(date, dateString, element.fullName)}
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