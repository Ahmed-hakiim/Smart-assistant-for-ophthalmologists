import React, { useContext, useState } from 'react'
import s1 from '../Styles/Login.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import AuthContext from '../Auth/auth-context';
export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const Navigate = useNavigate();
    const auth = useContext(AuthContext)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        axios.post("https://retinal-diseases-diagnosis-system.vercel.app/auth/login", formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {

                console.log(response.data); // You can handle the response data according to your application's logic
                // If login is successful, navigate the user to a different page (e.g., dashboard)
                console.log(response.data.accessToken);
                const token = response.data.accessToken;
                auth.login(token);
                Navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                // If login fails, display an error message to the user
                alert("Login failed. Please check your credentials and try again.");
            });
    }
    const handleSignUpClick = () => {
        Navigate('/register'); // Navigate to the register page
    };

    return (
        <>
            <div className={s1.body}>

                <div className={s1.background}></div>
                <div className={s1.card}>
                    <img className={s1.logo} src="https://png.pngtree.com/png-vector/20220716/ourmid/pngtree-eye-icon-vector-illustration-silhouette-outline-eye-vector-png-image_37969520.png" />
                    <h2 style={{ color: 'black' }}>Welcome Back</h2>
                    <form className={s1.form} onSubmit={handleSubmit}>
                        <input type="email" placeholder="email" value={formData.email} onChange={handleChange} name='email' />
                        <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} name='password' />
                        <button>Sign In</button>
                    </form>
                    <footer style={{ color: 'black' }}>
                        Don't have an account? Sign up
                        <button className={s1.reg} onClick={handleSignUpClick}>here</button>
                    </footer>
                </div>

            </div>
        </>
    )
}
