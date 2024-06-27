import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Appointment from './Components/Appointment';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import ContactUs from './Components/ContactUs';
import AppointmentDetails from './Components/AppointmentDetails';
import PatientsList from './Components/PatientsList';
import ColorBlindness from './Components/ColorBlindness';
import AdminMessages from './Components/AdminMessages';
import AdminHome from './Components/AdminHome';
import AllAdmins from './Components/AllAdmins';
import AddAdmins from './Components/AddAdmins';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contactUs' element={<ContactUs />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='register' element={<Register />} />
        <Route path='bookAppointment' element={<Appointment />} />
        <Route path='appDetails' element={<AppointmentDetails />} />
        <Route path='navbar' element={<Navbar />} />
        <Route path='myPatients' element={<PatientsList />} />
        <Route path='colorBlindnessTest' element={<ColorBlindness />} />
        <Route path='messages' element={<AdminMessages />} />
        <Route path='admin' element={<AdminHome />} />
        <Route path='allAdmins' element={<AllAdmins />} />
        <Route path='addAdmin' element={<AddAdmins />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
