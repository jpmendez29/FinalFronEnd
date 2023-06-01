
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';


import Login from './Components/Login';
import Singup from './Components/Singup';
import Navigation from './Components/Navigation';


function App() {
  const [users, setUsers] = useState([]);


  return (
    
        <Router>
            <Navigation/>

          <Routes>
            <Route path='/login' exact element={<Login users={users} setUsers={setUsers}/>}/>
            <Route path='/singup' exact element={<Singup  users={users} setUsers={setUsers}/>}/>
          </Routes>

        </Router>
  );
}

export default App;
