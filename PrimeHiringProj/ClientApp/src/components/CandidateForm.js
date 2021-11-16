import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Modal, Radio, InputNumber } from 'antd'
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import * as actions from '../actions/candidate'
import { updateCurrentId } from '../actions/currentId';


const initialFieldValues = {
    fullName: '',
    mobile: '',
    location: '',
    profilePicture: '',
    pricePerHour: '',
    technology: '',
    description: '',
    yearsOfExperience: '',
    nativeLanguage: '',
    linkedIn: '',
    dateDeparture: '',
    dateHired: '',
    hired: ''
}

const CandidateForm = props => {
    const [form] = Form.useForm();
    const [values, setValues] = useState(initialFieldValues)
    let today = new Date()
    console.log(props)
    
    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }

    const handleInputChangePriceNumber = e => {      
        e && setValues({
            ...values,
            ...{ ["pricePerHour"]: e.toString() }
        })
    }
    const handleInputChangeYearsExp = e => {      
        e && setValues({
            ...values,
            ...{ ["yearsOfExperience"]: e.toString() }
        })
    }


    const handleSubmit = e => {
        e.preventDefault()
        if (values.mobile && isNaN(parseInt(values.mobile))) {Modal.error({content: 'Mobile must be a number.',})}
        if (values.pricePerHour && isNaN(parseInt(values.pricePerHour))) {Modal.error({content: 'Price per hour must be a number.',})}
        if (values.yearsOfExperience && isNaN(parseInt(values.yearsOfExperience)) && values.yearsOfExperience.length > 2) {Modal.error({content: 'Years of experience must be a at most a double digit number.',})}
        if (!values.fullName || !values.mobile || !values.location || !values.profilePicture || !values.pricePerHour || !values.technology || !values.yearsOfExperience ||
            !values.nativeLanguage) {Modal.error({content: 'Must fill out all the required fields.',})}
        else if (props.currentId === 0 || props.currentId.id === 0) {
            props.createCandidate(values, () => 
                {Modal.success({
                    content: 'Successfully added a candidate!',
                })})
            props.updateCurrentId(0)
            setValues(initialFieldValues)  
        }
        else {
            props.updateCandidate(props.currentId, values, () => 
                Modal.success({
                    content: 'Successfully edited the candidate info!',
                }))
            props.updateCurrentId(0)
            setValues(initialFieldValues)
            }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    

    useEffect(() => {
        if (props.currentId !== 0)
            setValues({
                ...props.candidateList.find(element => element.id === props.currentId)
            })            
    }, [props.currentId])

    useEffect(() => {
        form.setFieldsValue({
            ...values
        });
    }, [values]);


    return (
        <>
        <h2 style={{textAlign: 'center'}} ref={props.refProp}>Add a candidate / update the existing candidate info</h2>
         {/* had to add the <div> DOM element for the scroll to work when the update button is clicked, doesn't work with ant design <Form> component */}
        <Form
            form={form}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            
            initialValues={initialFieldValues}
        >
            <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                    {
                    required: true,
                    message: 'Please input the full name!',
                    },
                    {
                    max: 100,
                    message: 'Too many characters used!',
                    },
                    {
                    pattern: /^[a-zA-Z0-9\s]+$/,
                    message: 'Name can only include letters, numbers and whitespaces.',
                    },
                ]}
            >
                <Input
            
                    name="fullName"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </Form.Item>    
            <Form.Item
                label="Mobile"
                name="mobile"
                rules={[
                    {
                    required: true,
                    message: "Please input the mobile phone number!",
                    },
                    {
                    max: 100,
                    message: 'Too many characters used.',
                    },
                    {
                    pattern: /^[0-9]*$/,
                    message: 'The mobile phone can contain only numbers.'
                    },
                ]}
            >
                <Input 
                    name="mobile"
                    value={values.mobile}
                    onChange={handleInputChange}
                />
            </Form.Item>    
            <Form.Item
                label="Location"
                name="location"
                rules={[
                    {
                    required: true,
                    message: "Please input the candidate's location!",
                    },
                    {
                    max: 100,
                    message: 'Too many characters used!',
                    },
                    {
                    pattern: /^[a-zA-Z0-9\s,]+$/,
                    message: 'Location can only include letters, numbers, commas and whitespaces.',
                    },
                ]}
            >
                <Input 
                    name="location"
                    value={values.location}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item
                label="Profile Picture (url)"
                name="profilePicture"
                rules={[
                    {
                    required: true,
                    message: 'Please input url of the profile picture!',
                    },
                    {
                    max: 100,
                    message: 'Too many characters used!',
                    },
                    {
                    type: "url",
                    message: "This field must be a valid url."
                    }
                ]}
            >
                <Input 
                    name="profilePicture"
                    value={values.profilePicture}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item
                label="Price Per Hour"
                name="pricePerHour"
                rules={[
                    {
                    required: true,
                    message: 'Please input the Price Per Hour!',
                    },
                    {
                    max: 2,
                    message: 'No more than two digits!',
                    },
                    {
                    pattern: /^[0-9]*$/,
                    message: 'The price can contain only numbers.'
                    },
                ]}
            >
                <InputNumber
                    name="pricePerHour"
                    value={values.pricePerHour}
                    onChange={handleInputChangePriceNumber}
                />
            </Form.Item>
            <Form.Item
                label="Technology"
                name="technology"
                rules={[
                    {
                    required: true,
                    message: 'Please input the technology you use.',
                    },
                    {
                    max: 100,
                    message: 'Too many characters used!',
                    },
                ]}
            >
                <Radio.Group name="technology" onChange={handleInputChange}>
                    <Radio value="JavaScript">JavaScript</Radio>
                    <Radio value="Java">Java</Radio>
                    <Radio value=".NET">.NET</Radio>
                    <Radio value="Flutter">Flutter</Radio>
                    <Radio value="Python">Python</Radio>
                    <Radio value="PHP">PHP</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                    required: false,
                    message: 'Please tell us a bit about yourself.',
                    },
                    {
                    max: 300,
                    message: 'Too many characters used!',
                    },
                ]}
            >
                <Input 
                    name="description"
                    value={values.description}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item
                label="Years Of Experience"
                name="yearsOfExperience"
                rules={[
                    {
                    required: true,
                    message: 'Please input your years of experience.',
                    },
                    {
                    type: 'integer',
                    max: 2,
                    message: 'No more than two digits!',
                    },
                    {
                    pattern: /^[0-9]*$/,
                    message: 'Years of experience can contain only numbers.'
                    },
                ]}
            >
                <InputNumber 
                    name="yearsOfExperience"
                    value={values.yearsOfExperience}
                    onChange={handleInputChangeYearsExp}
                />
            </Form.Item>
            <Form.Item
                label="Native Language"
                name="nativeLanguage"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Native Language.',
                    },
                ]}
            >
                <Radio.Group name="nativeLanguage" onChange={handleInputChange}>
                    <Radio value="English" name="nativeLanguage">English</Radio>
                    <Radio value="Serbian" name="nativeLanguage">Serbian</Radio>
                    <Radio value="Bulgarian" name="nativeLanguage">Bulgarian</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="LinkedIn"
                name="linkedIn"
                rules={[
                    {
                    required: false,
                    message: 'Please input your LinkedIn url.',
                    },
                    {
                    max: 100,
                    message: 'Too many characters used!',
                    },
                    {
                    type: "url",
                    message: "This field must be a valid url."
                    }
                ]}
            >
                <Input 
                    name="linkedIn"
                    value={values.linkedIn}
                    onChange={handleInputChange}
                />
            </Form.Item>          
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button 
                    type="primary" 
                    htmlType="submit"
                    onClick={handleSubmit}
                >
                    Submit to add/edit
                </Button>
            </Form.Item>
        </Form>
        </>
        );
}



const mapStateToProps = state => ({
    candidateList: state.candidateList.list,
    currentId: state.currentId
})

const mapActionToProps = {
    createCandidate: actions.create,
    updateCandidate: actions.update,
    deleteCandidate: actions.Delete,
    updateCurrentId
}

export default connect(mapStateToProps, mapActionToProps)((CandidateForm));