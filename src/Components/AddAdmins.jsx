import React, { useState } from 'react'
import '../Styles/AddAdmins.css'
export default function AddAdmins() {
    const [admin, setAdmin] = useState({ email: '', password: '', passwordConfirmation: '', name: '', DOB: '1995-01-09', address: 'Tanta', phone: '', role: 'patient' })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdmin(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div className='addContainer'>
            <div className='imgsection'>

                <img src="https://www.webmarketingguru.com.au/wp-content/uploads/2021/01/whoweare.gif" alt="" />
            </div>
            <div className='formSection'>
                <h2>Add New Adimn</h2>
                <hr style={{ width: '100%' }} />
                <form action="" className='adminForm'>
                    <input type="email" name='email' placeholder='Enter your E-mail' onChange={handleInputChange} value={admin.email} />
                    <input type="text" name='name' placeholder='Enter your Name' onChange={handleInputChange} value={admin.name} />
                    <input type="password" name='password' placeholder='Enter your password' onChange={handleInputChange} value={admin.password} />
                    <input type="password" name='confirmPassword' placeholder='Confirm password' onChange={handleInputChange} value={admin.passwordConfirmation} />
                    <input type="text" name='phone' placeholder='Enter your phone number' onChange={handleInputChange} value={admin.phone} />
                    <input type="date" name="DOB" placeholder='Enter your Birthdate' onChange={handleInputChange} value={admin.DOB} />
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    )
}
