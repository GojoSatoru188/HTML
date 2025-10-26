import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Profile from './components/Profile';
import Education from './components/Education';
import Experiences from './components/Experiences';
import ContactForm from './components/ContactForm';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

const API_URL = 'http://localhost:3001/api/experiencias';

function App() {
  const [experiences, setExperiences] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const fetchExperiences = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  useEffect(() => { fetchExperiences(); }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <PersonalInfo />
        <Profile />
        <Education />
        <Experiences experiences={experiences} />
        <ContactForm />
        <div className="admin-toggle">
          <button className="btn btn-admin" onClick={() => setShowAdmin(!showAdmin)}>
            {showAdmin ? '👁️ Ocultar Admin' : '⚙️ Panel Administrativo'}
          </button>
        </div>
        {showAdmin && <AdminPanel experiences={experiences} onExperienceUpdate={fetchExperiences} />}
        <div className="actions">
          <button className="btn btn-print" onClick={() => window.print()}><i className="fas fa-print"></i> Imprimir</button>
          <a href="mailto:santiagoleonestapias@gmail.com" className="btn"><i className="fas fa-envelope"></i> Contactar</a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;