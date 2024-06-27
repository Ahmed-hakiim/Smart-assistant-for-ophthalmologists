import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
    let changePath = () => {
        navigate('/home')
    }
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    {/* <svg onClick={changePath} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: "50px", height: "50px", borderRadius: "50vh", cursor: "pointer" }}><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg> */}
                    <img src="https://png.pngtree.com/png-vector/20220716/ourmid/pngtree-eye-icon-vector-illustration-silhouette-outline-eye-vector-png-image_37969520.png" alt="" onClick={changePath} style={{ width: "15vh", height: "15vh", borderRadius: "50vh", cursor: "pointer", position: "absolute" }} class="col-md-6 col-sm-12 d-flex justify-content-md-end justify-content-sm-end" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/home" class="nav-link active" aria-current="page" href="#" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contactUs">Contact Us</Link>
                            </li>
                            <li class="nav-item dropdown" style={{ width: "30vh" }} >
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </Link>
                                <ul class="dropdown-menu " >
                                    <li><Link to="/profile" class="dropdown-item" >My Profile</Link></li>
                                    <li><Link class="dropdown-item" to='/bookAppointment'>Book Appointment</Link></li>
                                    <li><Link class="dropdown-item" to='/appDetails'>My Appointments</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
