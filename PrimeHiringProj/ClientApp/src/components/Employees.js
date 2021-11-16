import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import 'antd/dist/antd.css'





const Employees = (props) => {

    console.log(props.employees)
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
            {props.employees.map((item) => {
                let obj = []
                for (let i of item) {
                    obj.push({
                        fullName: i[0],
                        dateHired: i[1],
                        dateDeparture: i[2]
                    })
                }
                return <Table dataSource={obj} columns={columns} style={{ padding: '0 50px', marginTop: '30px' }}/>
            })}
        </>
    )
} 

const mapStateToProps = state => {
    return {employees: state.employees}
}



export default connect(mapStateToProps)((Employees));