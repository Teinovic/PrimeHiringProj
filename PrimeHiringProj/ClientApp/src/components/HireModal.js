import { useState } from 'react'
import { Modal, Button, Form, Space, DatePicker } from 'antd'

export default function HireModal({selectedRows}) {
    const [form] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false)
    let today = new Date()
    const [values, setValues] = useState({})
    console.log(values)
    const { RangePicker } = DatePicker


    const handleInputChangeRange = (date, dateString, fullName) => {
        console.log(date, 'aaaaa', dateString);
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