import React from 'react'
import { Layout } from 'antd'
import Candidates from '../components/Candidates'



export default function CandidateList() {
    const {Content} = Layout
    
    return (
      <>
        <Content style={{ padding: '0 50px', marginTop: '30px' }}>
          <Candidates />    
        </Content>
      </>

    )
}