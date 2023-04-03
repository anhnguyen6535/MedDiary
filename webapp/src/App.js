import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import Profile from './components/Profile';
import MedicalHistory from './components/MedicalHistory';
import Authenticate from './components/Authenticate';
import LandingPage from './components/LandingPage';
import LogoHeader from './components/LogoHeader';
import IdentityCheck from './components/IdentityCheck';
import PatientRegister from './components/patients/PatientRegister';
import LoginPage from './components/LoginPage';
import Medication from './components/Medication';
import LabResults from './components/LabResults';
import PreRegister from './components/PreRegister';
import useStateContext from './hooks/useStateContext';
import DoctorRegister from './components/doctors/DoctorRegister';

function App() {
  const { context} = useStateContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoHeader />}>
          <Route path="/" element={<LandingPage />}/>
          <Route element={<IdentityCheck />}>
              <Route path="/login" element={<LoginPage/>}></Route>
              <Route path="/pre-register" element={<PreRegister/>}></Route>
              <Route path="/register" element={<PatientRegister/>}></Route>
          </Route>
        </Route>
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/medication" element={<Medication />}/>
            <Route path="/lab-results" element={<LabResults />}/>
            <Route path="/medical-history" element={<MedicalHistory />} />
          </Route>
        </Route>
      </Routes>  
    </BrowserRouter >
  );
}

export default App;
