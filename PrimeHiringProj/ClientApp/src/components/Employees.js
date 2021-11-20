import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Table, Space } from 'antd'
import 'antd/dist/antd.css'
import { fetchAll } from '../actions/devTeam'






const Employees = (props) => {

    useEffect(() => {
        props.fetchAllDevTeams()
    }, [])

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
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => { 
              return (
                <Space size="middle">
                  <a 
                    // onClick={() => {onDelete(record.id)}}
                >Delete team</a>
                </Space>
            
              )
            }
          }
    ]

    return (
        <>
            <div>table gon b here</div>
            {/* {props.employees.map((item) => {
                let obj = []
                for (let i of item) {
                    obj.push({
                        fullName: i[0],
                        dateHired: i[1],
                        dateDeparture: i[2]
                    })
                }
                return <Table dataSource={obj} columns={columns} style={{ padding: '0 50px', marginTop: '30px' }}/>
            })} */}
        </>
    )
} 

const mapStateToProps = state => ({
    devTeam: state.devTeam
})

const mapActionToProps = {
    fetchAllDevTeams: fetchAll
}



export default connect(mapStateToProps, mapActionToProps)((Employees));