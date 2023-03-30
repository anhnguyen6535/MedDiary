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
import Register from './components/Register';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoHeader />}>
          <Route path="/" element={<LandingPage />}/>
          <Route element={<IdentityCheck />}>
              <Route path="/login" element={<LoginPage/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
          </Route>
        </Route>
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
          </Route>
        </Route>
      </Routes> 
    </BrowserRouter >
  );
}

export default App;
