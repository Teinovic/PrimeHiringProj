import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as apiActions from '../actions/candidate'
import { Table, Space, Modal } from 'antd'
import 'antd/dist/antd.css'
import { updateCurrentId } from '../actions/currentId'


const Employees = (props) => {

    const [forceRerender, setForceRerender] = useState(0)

    useEffect( () => {
        props.fetchAllCandidates()
    },  [props.currentId, forceRerender])

    const dataSource = Object.entries(props.candidateList).flat().filter(element => isNaN(element) && element.hired === 'yes')
    console.log(dataSource, 'pfff')

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName'
        },
        {
            title: 'Date of Start',
            dataIndex: 'dateHired',
            key: 'dateHired'
        },
        {
            title: 'Date of Departure',
            dataIndex: 'dateDeparture',
            key: 'dateDeparture'
        }
    ]

    return (
        <>
          <Table dataSource={dataSource} columns={columns} style={{ padding: '0 50px', marginTop: '30px' }}/>
        </>
    )
} 

const mapStateToProps = state => ({
    candidateList: state.candidateList.list,
    currentId: state.currentId
})

const mapActionToProps = {
    fetchAllCandidates: apiActions.fetchAll,
    updateCurrentId
}

export default connect(mapStateToProps, mapActionToProps)((Employees));