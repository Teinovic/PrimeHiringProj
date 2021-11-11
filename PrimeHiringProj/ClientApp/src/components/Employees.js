import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as apiActions from '../actions/candidate'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import { updateCurrentId } from '../actions/currentId'




const Employees = (props) => {
    
    const dataSourceImproved = Object.entries(props.employees)
    const dataSourceImproved1 = []
    const dataSourceImproved2 = []
    for (let element of dataSourceImproved) {dataSourceImproved1.push(element.flat())}
    for (let element of dataSourceImproved1) {
        dataSourceImproved2.push({
            fullName: element[0],
            dateHired: element[1],
            dateDeparture: element[2]
        })
    }
    console.log(dataSourceImproved2, 'waaaaa')

    
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
          <Table dataSource={dataSourceImproved2} columns={columns} style={{ padding: '0 50px', marginTop: '30px' }}/>
        </>
    )
} 

const mapStateToProps = state => ({
    candidateList: state.candidateList.list,
    currentId: state.currentId,
    employees: state.employees
})

const mapActionToProps = {
    fetchAllCandidates: apiActions.fetchAll,
    updateCurrentId
}

export default connect(mapStateToProps, mapActionToProps)((Employees));