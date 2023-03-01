import React, {useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard';
import Login from './login';
import useToken from './useToken';
import Create from './create';
// import Search from './search';
import Invoice from './invoice';
import InvoiceReminder from './invoiceReminder';
import LetterHead from './letterHead';
import TemproryMail from './temproryMail';
import CompanyInvoice from './companyInvoice';




function App () {
  const { token, setToken } = useToken();
  const navigate = useNavigate();
  //const token = getToken();

  if(!token){
    return <><Login setToken={setToken} /></>
  }
  const logout = () => {
    localStorage.removeItem('token');
    //window.location.reload(false);
    window.location.href = window.location.href;
    // navigate('/aquarivafront');
    // setIsLoggedin(false);
  };
  const dashboard = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront');
    // setIsLoggedin(false);
  };
  const newRecord = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront/create');
    // setIsLoggedin(false);
  };
  const search = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront/search');
    // setIsLoggedin(false);
  };
  const companyInvoice = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront/companyInvoice');
    // setIsLoggedin(false);
  };
  const invoice = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront/generate-invoice');
    // setIsLoggedin(false);
  };
  const invoiceReminder = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront/invoice-reminder');
    // setIsLoggedin(false);
  };
  const letterHead = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront/letter-head');
    // setIsLoggedin(false);
  };
  const temproryMail = () => {
    //localStorage.removeItem('token');
     navigate('/aquarivafront/Notification-of-the-price-increase');
    // setIsLoggedin(false);
  };
 
  return(
    <div >
      <button onClick={dashboard}>Dashboard</button>
      <button onClick={newRecord}>Create</button>
      <button onClick={search}>Search</button>
      <button onClick={companyInvoice}>Company Invoice</button>
      <button onClick={invoice}>Generate Company Invoice</button>
      <button onClick={invoiceReminder}>Invoice Reminder</button>
      <button onClick={letterHead}>Company Letter Head</button>
      <button onClick={temproryMail}>Notification of the price increase</button>
      <button onClick={logout}>Log out</button>

      <Routes>
      {/* //<Route path='/safetyapp' element={<Home />} /> */}
        <Route exact path="/aquarivafront" element={<Dashboard/>}>
        </Route>
        {/* <Route exact path="/login" element={<Login/>}>
        </Route> */}
        <Route exact path="/aquarivafront/create" element={<Create/>}>
        </Route>
        {/* <Route exact path="/aquarivafront/search" element={<Search/>}>
        </Route> */}
        <Route exact path="/aquarivafront/companyInvoice" element={<CompanyInvoice/>}>
        </Route>
        <Route exact path="/aquarivafront/generate-invoice" element={<Invoice/>}>
        </Route>
        <Route exact path="/aquarivafront/invoice-reminder" element={<InvoiceReminder/>}>
        </Route>
        <Route exact path="/aquarivafront/letter-head" element={<LetterHead/>}>
        </Route>
        <Route exact path="/aquarivafront/Notification-of-the-price-increase" element={<TemproryMail/>}>
        </Route>
      </Routes>
  </div>
  )
};

export default App;
