import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout';
import Profile from './components/Profile';
import MedicalHistory from './components/MedicalHistory';
import Authenticate from './components/Authenticate';
import LandingPage from './components/LandingPage';
import PatientProfile from './components/patients/PatientProfile';
import DoctorProfile from './components/doctors/DoctorProfile';
import LogoHeader from './components/LogoHeader';
import IdentityCheck from './components/IdentityCheck';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoHeader />}>
          <Route path="/" element={<LandingPage />}/>
          <Route element={<IdentityCheck />}>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
          </Route>
        </Route>
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route path="/patient-profile" element={<PatientProfile />} />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
