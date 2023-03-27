import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout';
import Profile from './components/Profile';
import MedicalHistory from './components/MedicalHistory';
import Authenticate from './components/Authenticate';
import LandingPage from './components/LandingPage';
import PatientLogin from './components/patients/PatientLogin';
import DoctorLogin from './components/doctors/DoctorLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/patient-login" element={<PatientLogin/>}></Route>
        <Route path="/doctor-login" element={<DoctorLogin/>}></Route>
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route path="/quiz" element={<Profile />} />
            <Route path="/result" element={<MedicalHistory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
