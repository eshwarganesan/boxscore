// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import Login from './Login';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignOut = async () => {
    await firebase.auth().signOut();
  };

  return (
    <Router>
      <div className='Header'>
        <button onClick={handleOpenModal}>Login</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>

      <Routes>
        <Route path="/" element={<Scoreboard />}/>
      </Routes>

      <Login isOpen={isModalOpen} onClose={handleCloseModal} />
    </Router>
  );
}

export default App;
