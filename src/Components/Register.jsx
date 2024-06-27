import React, { useState } from 'react'
import s2 from '../Styles/Register.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', name: '', DOB: '1995-01-09', address: 'Tanta', phone: '', role: 'patient' })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Password validation
        if (name === 'password') {
            const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(value);
            if (!isValidPassword) {
                // Set an error state or display a message to the user indicating the password requirements
                // For simplicity, let's just log a message to the console
                console.log('Password must be at least 8 characters long and include at least one digit, one alphabet, and one special character.');
            }
            else {
                console.log('password is strong')
            }
        }

        // Password confirmation validation
        if (name === 'passwordConfirmation') {
            if (value !== user.password) {
                // Set an error state or display a message to the user indicating that the passwords don't match
                // For simplicity, let's just log a message to the console
                console.log('Password confirmation does not match the password.');
            }
            else {
                console.log('password is matched')
            }
        }

    };
    const navigate = useNavigate()
    let changePath = () => {
        navigate('/login')
    }
    let addUser = (e) => {
        e.preventDefault()
        axios.post("https://retinal-diseases-diagnosis-system.vercel.app/auth/signup", user)
            .then((res) => {
                console.log(res.data)
                changePath();
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }
    return (
        <div className={s2.background}>
            <div className={s2.card}>
                <h2>Join us Now</h2>
                <form action="" className={s2.form} onSubmit={addUser}>
                    <input type="text" placeholder='Name' value={user.name} name='name' onChange={handleInputChange} />

                    <input type="email" placeholder='E-mail' value={user.email} name='email' onChange={handleInputChange} />
                    <input type="password" placeholder='Password' value={user.password} name='password' onChange={handleInputChange} />
                    <input type="password" placeholder='Confirm password' value={user.passwordConfirmation} name='passwordConfirmation' onChange={handleInputChange} />
                    <input type="text" placeholder='Phone number' value={user.phone} name='phone' onChange={handleInputChange} />
                    <hr style={{ width: '100%' }} />
                    <h5 style={{ margin: '0', marginLeft: '8px' }}>Select your Grnder and date of birth</h5>
                    <div className={s2.group}>
                        <input type="date" value={user.DOB} name='DOB' onChange={handleInputChange} />
                        <select name="gender" id="">
                            <option value="" disabled selected>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}
