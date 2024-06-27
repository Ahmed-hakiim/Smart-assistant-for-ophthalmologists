import React from 'react'
import s3 from '../Styles/Appointment.module.css'
import Navbar from './Navbar'
export default function Appointment() {
    return (
        <>
            <Navbar />
            <div className={s3.background} >
                <div>
                    <h2 className={s3.title}>Take a Journey with us</h2>
                    <p>Book your appointment with us now through our website and enjoy our services </p>
                </div>
                <div className={s3.app}>
                    <h3>Book Appointment</h3>
                    <hr style={{ color: 'black', width: '100%' }} />
                    <form action="" className={s3.form}>
                        <input type="text" placeholder='Enter Full Name' />
                        <input type="tel" required pattern='/^\(+20(10|11|12|15)|(010|012|011|015))\d{8}$/' placeholder='Enter Mobile Number' />
                        <input type="email" name="" id="" placeholder='Enter your Email Address' />
                        <input type="date" />
                        <hr style={{ color: 'black', width: '100%' }} />
                        <div className={s3.address}>
                            <div>
                                <h5>Address Details</h5>
                            </div>
                            <div className={s3.details}>
                                <input type="text" placeholder='Enter Area' />
                                <input type="text" placeholder='Enter City' />
                                <input type="text" placeholder='Enter Government' />
                                <input type="text" placeholder='Enter Street' />
                            </div>
                        </div>
                        <button type='submit'>Book Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}
