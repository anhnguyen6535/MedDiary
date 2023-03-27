import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout';
import Profile from './components/Profile';
import MedicalHistory from './components/MedicalHistory';
import Authenticate from './components/Authenticate';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes path="/" element={<LandingPage />} >
          <Route></Route>
        </Routes>
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
