import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import '../Styles/AllAdmins.css'
import { useNavigate } from 'react-router-dom'
export default function AllAdmins() {
    const navigate = useNavigate()
    let changePath = () => {
        navigate('/addAdmin')
    }
    return (
        <div className='AdminsContainer'>
            <div className='first'>
                <i><h2>Here were you can control System Admins</h2></i>
                <p>This section contains all admins that moderating our sytem,where you can view them,manage them with adding new admins or deleting existing admins</p>
                <button onClick={changePath}>Add New Admin </button>
                {/* <img src="https://animation2min.com/wp-content/uploads/2021/02/Project-Manager-Discovers-Your-Scope_00000-1024x576.jpg" alt="" /> */}
            </div>
            <div className='second'>
                <div>
                    <h2>All Admins :</h2>
                </div>
                <hr style={{ width: '100%' }} />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Admin ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr><tr>
                            <th scope="row">4</th>
                            <td>Jacob</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr><tr>
                            <th scope="row">5</th>
                            <td>Jacob</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr><tr>
                            <th scope="row">6</th>
                            <td>Jacob</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr><tr>
                            <th scope="row">7</th>
                            <td>Jacob</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr><tr>
                            <th scope="row">8</th>
                            <td>Jacob</td>
                            <td className='details' style={{ color: 'blue' }}>View</td>
                        </tr>
                    </tbody>
                </table>
                <div className='forwardAndBack'>
                    <svg className='nextBackButtons' id='backbutton' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                    <svg id="centerEye" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                    <svg className='nextBackButtons' id='nextbutton' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
