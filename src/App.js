import React from 'react';
import './App.css';
import Register from './ui/register';
import Login from './ui/login';
import Home from './ui/home';
import Layout from './ui/Layout';
import Applyloans from './ui/applyloans';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Routes with Sidebar */}
          <Route path="/layout" element={<Layout />}>
            <Route path="dashboard" element={<div>Dashboard Page</div>} />
            <Route path="applied-loans" element={<div>Applied Loans Page</div>} />
            <Route path="applyloans" element={<Applyloans />} />
            <Route path="loan-history" element={<div>Loan History Page</div>} />
            <Route path="repayment-schedule" element={<div>Repayment Schedule Page</div>} />
            <Route path="settings" element={<div>Settings Page</div>} />
            <Route path="support" element={<div>Support Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
