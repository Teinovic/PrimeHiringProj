import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Table, Space, Modal } from 'antd'
import 'antd/dist/antd.css'
import { fetchAll, Delete } from '../actions/devTeam'






const Employees = (props) => {
    const [forceRerender, setForceRerender] = useState(1)
    const { confirm } = Modal

    useEffect(() => {
        props.fetchAllDevTeams()
    }, [forceRerender])
    
    console.log(props)

    function onDelete(id) {
        confirm({
         title: 'Are you sure delete this team?',
         content: 'This will permanently delete all the team info.',
         okText: 'Yes',
         okType: 'danger',
         cancelText: 'No',
         async onOk() {
           await props.deleteDevTeam(id, () => {
             Modal.success({
               content: 'Successfully deleted the team.'
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
    ]

    return (
        <>
            {props.devTeam.devTeamList.map((item, key) => {
                let obj = []
                console.log(item) 
                let namesArr = item.teamMembersNames.split(',')
                let datesHired = item.teamMembersHireDates.split(',')
                let datesDeparture = item.teamMembersLeaveDates.split(',')
                for (let j = 0; j < namesArr.length; j++) {
                    if (namesArr[j] && datesHired && datesDeparture[j])
                        obj.push({
                            id: item.id,
                            fullName: namesArr[j],
                            dateHired: datesHired[j],
                            dateDeparture: datesDeparture[j]
                        })
                }  
                if (item.teamMembersNames=== '' ) return 

                return <Table 
                            dataSource={obj} 
                            columns={columns} 
                            style={{ padding: '0 50px', marginTop: '30px' }}
                            footer={() => 
                                <a 
                                onClick={() => {onDelete(item.id)}}
                                >
                                    Delete team
                                </a>
                            }
                            
                        />
            })}
        </>
    )
} 

const mapStateToProps = state => ({
    devTeam: state.devTeam
})

const mapActionToProps = {
    fetchAllDevTeams: fetchAll,
    deleteDevTeam: Delete
}



export default connect(mapStateToProps, mapActionToProps)((Employees));