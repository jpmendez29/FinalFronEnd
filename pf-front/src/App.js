
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'react-toastify/dist/ReactToastify.css';



import './App.css';


import Login from './Components/Login';
import Singup from './Components/Singup';
import Navigation from './Components/Navigation';


function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  console.log(user)

  return (
    
        <Router>
            <Navigation/>

          <Routes>
            <Route path='/' exact element={<Login users={users} setUser={setUser} />}/>
            <Route path='/singup' exact element={<Singup  users={users} setUsers={setUsers}/>}/>
            {/* <Route path='/home' exact element={<Home users={user} />}/> */}
          </Routes>
          
        </Router>
  );
}

export default App;
