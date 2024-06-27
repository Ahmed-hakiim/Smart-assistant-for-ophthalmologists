import React, { useEffect, useState } from 'react'
import Card from './Card'
import details from '../Styles/PatientsList.module.css'
export default function PatientsList() {
    const [patients, setName] = useState([{ name: "Ahmed Hakeem", age: "20" },
    { name: "Ahmed ali", age: "25" }])
    const [picture, setPicture] = useState("https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain")
    const [mrn, setMrn] = useState(123456789)
    let [searchName, setsearchName] = useState([]);
    let [inputValue, setInputValue] = useState("");
    let getInputValue = (e) => {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        if (inputValue != "") {
            const searchFilter = patients.filter((n) => {
                return n.name.toLowerCase().includes(inputValue.toLowerCase())
            })
            setsearchName(searchFilter)
        } else {
            setsearchName(patients)
        }


    }, [inputValue])
    return (
        <div className={details.container}>
            <h1>My Patients</h1>
            <input type="text" className="form-control m-4 " placeholder='Search for A patient' onChange={getInputValue} value={inputValue} style={{ width: '95%' }} />
            <div className={details.card}>
                {
                    inputValue != "" ? searchName.map(n => {
                        return <Card picture={picture}
                            name={n.name}
                            mrn={mrn} />
                    }) :
                        patients.map(n => {
                            return < Card
                                picture={picture}
                                name={n.name}
                                mrn={mrn}
                            />
                        })}
                {/* <Card
                    picture={picture}
                    name="mohamed amir"
                    mrn="0101010"
                />
                <Card
                    picture={picture}
                    name={name}
                    mrn={mrn}
                />
                <Card
                    picture={picture}
                    name={name}
                    mrn={mrn}
                />
                <Card
                    picture={picture}
                    name={name}
                    mrn={mrn}
                /> */}
            </div>
        </div>
    )
}
