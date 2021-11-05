import React from 'react'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom'


export default function Header() {
    const { Header } = Layout

    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>  
                <Menu.Item>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/candidatelist'>List of Candidates</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/Employees'>Employees</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}