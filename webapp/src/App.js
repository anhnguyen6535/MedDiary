import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Authenticate from './components/Authenticate';
import LandingPage from './components/LandingPage';
import LogoHeader from './components/LogoHeader';
import IdentityCheck from './components/IdentityCheck';
import PatientRegister from './components/patients/PatientRegister';
import LoginPage from './components/LoginPage';
import PreRegister from './components/PreRegister';
import useStateContext from './hooks/useStateContext';
import SuccessRegister from './components/SuccessRegister';
import ClinicVisitExpanded from './components/ClinicVisitExpanded';
import ClinicVisitForm from './components/ClinicVisitForm'
import SearchPatient from './components/doctors/SearchPatient';
import ClinicLog from './components/ClinicLog';
import Todo from './components/patients/Todo';
import DoctorRegister from './components/doctors/DoctorRegister';

function App() {
  const { context } = useStateContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoHeader />}>
          <Route path="/" element={<LandingPage />} />
          <Route element={<IdentityCheck cond={undefined} />}>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/pre-register" element={<PreRegister />}></Route>
            <Route path="/register" element={context.isDoctor ?<DoctorRegister/> :<PatientRegister/>}></Route>
            <Route path="/success-register" element={<SuccessRegister />}></Route>
          </Route>
        </Route>
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            {/* Doctor only */}
            <Route element={<IdentityCheck cond={false} />}>
              <Route path="/search-patient" element={<SearchPatient />} />
            </Route>

            {/* Patient only */}
            <Route element={<IdentityCheck cond={true} />}>
              <Route path="/todo" element={<Todo/>} />
            </Route>

            <Route path="/profile" element={<Profile />} />
            <Route path="/Clinic-Visit-Form" element={<ClinicVisitForm />} />
            <Route path="/clinic-log" element={<ClinicLog/>} />
            <Route path="/Clinic-Visit-Expanded" element={<ClinicVisitExpanded />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
