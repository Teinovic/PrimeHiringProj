import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import * as apiActions from '../actions/candidate'
import { Table, Space, Modal } from 'antd'
import 'antd/dist/antd.css'
import CandidateForm from './CandidateForm'
import { updateCurrentId } from '../actions/currentId'
import HireModal from './HireModal'


const Candidates = (props) => {
  
    const [forceRerender, setForceRerender] = useState(0)
    const { confirm } = Modal
    const myRef = useRef(null)
    const scrollIntoView = () => {
      myRef.current.scrollIntoView({behavior: 'smooth'});
    }
    const [selectedRowsProp, setSelectedRowsProp] = useState([])
    
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        setSelectedRowsProp(selectedRows)
      },
      getCheckboxProps: (record) => (
        {
          disabled: record.fullName === 'Disabled User',
          // Column configuration not to be checked
          name: record.fullName
        }
        )
    };

    function updateFunc(arg) {
      scrollIntoView();
      props.updateCurrentId(arg);
    }

    
    useEffect( () => {
        props.fetchAllCandidates()
    },  [props.currentId, forceRerender])
    
    const dataSource = Object.entries(props.candidateList).flat().filter(element => isNaN(element))
    
    const dataSourceEdited = []
    for (let element of dataSource) {
      dataSourceEdited.push( {...element, key: element.id.toString()})
    }

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
          innerHeight: '5rem',
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
        // {
        //   title: 'Hired',
        //   dataIndex: 'hired',
        //   key: 'hired',
        // },
        // {
        //   title: 'Date of Hire',
        //   dataIndex: 'dateHired',
        //   key: 'dateHired',
        // },{
        //   title: 'Date of Departure',
        //   dataIndex: 'dateDeparture',
        //   key: 'dateDeparture',
        // },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => { 
            return (
              <Space size="middle">
                <a onClick={() => {updateFunc(record.id) }} >Update</a>
                <a onClick={() => {onDelete(record.id)}}>Delete</a>
              </Space>
          
            )
          }
        }
      ]

    return (
      <>
        <Table 
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          dataSource={dataSourceEdited} 
          columns={columns}
        />
        <HireModal selectedRows={selectedRowsProp}/>
        <CandidateForm refProp={myRef}/>
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