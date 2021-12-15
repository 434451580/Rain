import React, { useState } from 'react'
import { Link, Route, Routes, Outlet } from "react-router-dom"
import Home from '@/pages/home'

const Layouts: React.FC = (props) => {
    return <div>
        Layouts
        <Link to='/home'>home</Link>
        <Link to='/about'>about</Link>
        <Outlet />
    </div>
}

export default Layouts