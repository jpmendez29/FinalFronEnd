import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';


import Login from './Components/Login';
import Singup from './Components/Singup';
import Navigation from './Components/Navigation';


function App() {
  return (
        <Router>
            <Navigation/>

          <Routes>
            <Route path='/login' exact Component={Login}/>
            <Route path='/singup' exact Component={Singup}/>
          </Routes>

        </Router>
  );
}

export default App;
