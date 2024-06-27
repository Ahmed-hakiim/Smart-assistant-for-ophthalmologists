import React, { useState } from 'react'
import DoctorCard from './DoctorCard'
import '../Styles/AdminMessages.css'
export default function Admin() {
  const [messages, setMessages] = useState([{ doctorName: 'Ahmed Hakeem', doctorId: '123', message: 'this is an issue', bStatus: 'Details' }])

  return (
    <div className="adminContainer">

      {
        messages.map(m => {

          return (< DoctorCard
            name={m.doctorName}
            doctorId={m.doctorId}
            message={m.message}
            status={m.bStatus}
          />)
        })
      }


    </div>
  )
}
