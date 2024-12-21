import React from 'react';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import Registration from '../components/Registration';
import Login from '../components/Login';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Registration />
      <Login />
      <Footer />
    </div>
  );
}

export default App;