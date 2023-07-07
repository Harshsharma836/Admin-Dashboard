import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'tailwindcss/tailwind.css';


import Login from './Login';
import Dashboard from './dashboardComponent/Dashboard.js';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/dashboardComponent/Dashboard.js' element={<Dashboard></Dashboard>}></Route>
        <Route path='/projects' element={<Register></Register>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
