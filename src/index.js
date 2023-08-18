import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';


ReactDOM.render(
  <Router>
    <Routes> 
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


