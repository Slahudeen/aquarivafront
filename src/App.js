import React, {useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard';
import Login from './login';
import useToken from './useToken';
import Create from './create';
import Search from './search';
import Invoice from './invoice';
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
 
  return(
    <div >
      <button onClick={dashboard}>Dashboard</button>
      <button onClick={newRecord}>Create</button>
      <button onClick={search}>Search</button>
      <button onClick={companyInvoice}>Company Invoice</button>
      <button onClick={invoice}>Generate Company Invoice</button>
      <button onClick={logout}>Log out</button>

      <Routes>
      {/* //<Route path='/safetyapp' element={<Home />} /> */}
        <Route exact path="/aquarivafront" element={<Dashboard/>}>
        </Route>
        {/* <Route exact path="/login" element={<Login/>}>
        </Route> */}
        <Route exact path="/aquarivafront/create" element={<Create/>}>
        </Route>
        <Route exact path="/aquarivafront/search" element={<Search/>}>
        </Route>
        <Route exact path="/aquarivafront/companyInvoice" element={<CompanyInvoice/>}>
        </Route>
        <Route exact path="/aquarivafront/generate-invoice" element={<Invoice/>}>
        </Route>
      </Routes>
  </div>
  )
};

export default App;
