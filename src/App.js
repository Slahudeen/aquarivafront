import React, {useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard';
import Login from './login';
import useToken from './useToken';
import Create from './create';
import Search from './search';




function App () {
  const { token, setToken } = useToken();
  const navigate = useNavigate();
  //const token = getToken();

  if(!token){
    return <><Login setToken={setToken} /></>
  }
  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
    // navigate('/login');
    // setIsLoggedin(false);
  };
  const dashboard = () => {
    //localStorage.removeItem('token');
     navigate('/');
    // setIsLoggedin(false);
  };
  const newRecord = () => {
    //localStorage.removeItem('token');
     navigate('/create');
    // setIsLoggedin(false);
  };
  const search = () => {
    //localStorage.removeItem('token');
     navigate('/search');
    // setIsLoggedin(false);
  };
 
  return(
    <div >
      <button onClick={dashboard}>Dashboard</button>
      <button onClick={newRecord}>Create</button>
      <button onClick={search}>Search</button>
      <button onClick={logout}>Log out</button>

      <Routes>
        <Route exact path="/" element={<Dashboard/>}>
        </Route>
        {/* <Route exact path="/login" element={<Login/>}>
        </Route> */}
        <Route exact path="/create" element={<Create/>}>
        </Route>
        <Route exact path="/search" element={<Search/>}>
        </Route>
      </Routes>
  </div>
  )
};

export default App;
