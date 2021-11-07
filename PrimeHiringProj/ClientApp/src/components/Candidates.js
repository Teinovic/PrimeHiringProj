import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as apiActions from '../actions/candidate'
import { Table, Space, Modal } from 'antd'
import 'antd/dist/antd.css'
import CandidateForm from './CandidateForm'
import { updateCurrentId } from '../actions/currentId'

const Candidates = (props) => {
  
    const [forceRerender, setForceRerender] = useState(0)
    const { confirm } = Modal
    
    useEffect( () => {
        props.fetchAllCandidates()
    },  [props.currentId, forceRerender])
    
    const dataSource = Object.entries(props.candidateList).flat().filter(element => isNaN(element))

    function onDelete(id) {
       confirm({
        title: 'Are you sure delete this candidate?',
        content: 'This will permanently delete all the candidate info.',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        async onOk() {
          await props.deleteCandidate(id, () => {
            Modal.success({
              content: 'Successfully deleted the candidate.'
            })
            setForceRerender(forceRerender + 1)
            }
          )
          
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
      
    

    const columns = [
        {
          title: 'Full Name',
          dataIndex: 'fullName',
          key: 'fullName',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Profile Picture',
          dataIndex: 'profilePicture',
          key: 'profilePicture',
        },
        {
          title: 'Price Per Hour',
          dataIndex: 'pricePerHour',
          key: 'pricePerHour',
        },
        {
          title: 'Technology',
          dataIndex: 'technology',
          key: 'technology',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Years Of Experience',
          dataIndex: 'yearsOfExperience',
          key: 'yearsOfExperience',
        },
        {
          title: 'Native Language',
          dataIndex: 'nativeLanguage',
          key: 'nativeLanguage',
        },
        {
          title: 'LinkedIn',
          dataIndex: 'linkedIn',
          key: 'linkedIn',
        },
        {
          title: 'Hired',
          dataIndex: 'hired',
          key: 'hired',
        },
        {
          title: 'Date of Hire',
          dataIndex: 'dateHired',
          key: 'dateHired',
        },{
          title: 'Date of Departure',
          dataIndex: 'dateDeparture',
          key: 'dateDeparture',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => { 
            return (
              <Space size="middle">
                <a onClick={() => {props.updateCurrentId(record.id)}}>Update</a>
                <a onClick={() => {onDelete(record.id)}}>Delete</a>
              </Space>
          
            )
          }
        }
      ]

    return (
      <>
        <Table dataSource={dataSource} columns={columns} />
        <CandidateForm />
      </>
    )
}

const mapStateToProps = state => ({
    candidateList: state.candidateList.list,
    currentId: state.currentId
})

const mapActionToProps = {
    fetchAllCandidates: apiActions.fetchAll,
    deleteCandidate: apiActions.Delete,
    updateCurrentId
}

export default connect(mapStateToProps, mapActionToProps)((Candidates));