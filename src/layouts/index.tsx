import React, { useState } from 'react'
import { Link, Route, Routes, Outlet } from "react-router-dom"
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import Home from '@/pages/Home'

const Layouts: React.FC = (props) => {
    return <div>
        Layouts
        <Link to='/home'>home</Link>
        <Link to='/about'>about</Link>
        <Outlet />
    </div>
}

export default Layouts