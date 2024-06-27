import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import s5 from '../Styles/Profile.module.css'
import axios from 'axios';
import AuthContext from '../Auth/auth-context';
export default function Profile() {
    const [name] = useState("Ahmed Hakeem");
    const [email] = useState("ahmed@example.com");
    const [phone] = useState("01099868465");
    const [address] = useState("tanta");
    const [profileImage] = useState("https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain");
    const [fetchedData, setFetchedData] = useState([])
    const [loading, setLoading] = useState(true)
    const auth = useContext(AuthContext);
    let getProfile = async () => {
        setLoading(true);
        console.log(auth.token)
        try {
            const response = await axios.get("https://retinal-diseases-diagnosis-system.vercel.app/patient/profile", {
                headers: {

                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${auth.token}`
                }
            });
            console.log(response.data);
            console.log(response.data.patient);
            setFetchedData(response.data.patient);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching profile data:", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        getProfile()
    }, [])
    return (
        <>
            <Navbar />

            <div className={s5.container}>
                <div className={s5.first}>
                    <img src={profileImage} alt="" />
                    <h2>{name}</h2>
                </div>
                <div className={s5.second}>
                    <h2>About</h2>

                    <div className={s5.data}>
                        <div className={s5.inData}>
                            <h4>Full Name</h4>
                            <h5>{name}</h5>
                        </div>
                        <hr />
                        <div className={s5.inData}>
                            <h4>Email</h4>
                            <h5>{email}</h5>
                        </div>
                        <hr />
                        <div className={s5.inData}>
                            <h4>Phone</h4>
                            <h5>{phone}</h5>
                        </div>
                        <hr />
                        <div className={s5.inData}>
                            <h4>Address</h4>
                            <h5>{address}</h5>
                        </div>
                    </div>
                    <hr />
                    <button>Update Data</button>
                </div>
            </div>
        </>
    )
}
