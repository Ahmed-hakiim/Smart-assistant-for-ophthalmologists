import React, { useState } from 'react';
import '../Styles/DoctorCard.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
const DoctorCard = ({ name, doctorId, message, status }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (

        <div className="doctorCard">
            <h2 className="doctor-name">{name}</h2>
            <p className="doctor-id">ID: {doctorId}</p>
            <p className="doctor-message">{message}</p>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: "white", background: 'blue', padding: '1vh', border: 'none', borderRadius: '8px', width: '15vh' }}>
                View
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default DoctorCard;
