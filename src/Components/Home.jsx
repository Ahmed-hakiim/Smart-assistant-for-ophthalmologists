import React from 'react'
import Navbar from './Navbar'
import s6 from '../Styles/Home.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
    let changePath = () => {
        navigate('/bookAppointment')
    }
    return (
        <>
            <Navbar />
            <div className={s6.container}>
                <h1>YOU'VE GOT OPTIONS</h1>
                <h3>No glasses.No contacts. <br />The safe and easy way.</h3>
                <button onClick={changePath}>Schedule A Consultaion with US </button>
            </div>
        </>
    )
}
