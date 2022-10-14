import React, {useState, useEffect } from 'react';
import './create.css';
import { json, UNSAFE_NavigationContext, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./assets/logo.png";

async function loginUser(credentials) {
  return fetch('https://rattle-innate-roar.glitch.me/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
   .then(data => data.json())
 }

export default function Login({ setToken , requestStatus}){
   
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setErrorMessage] = useState();
  // const logout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/login');
  //   // setIsLoggedin(false);
  // };
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    
    setToken(token);
    const message = localStorage.getItem('token');
    if(message.split("User not found")){
      setErrorMessage("Invalid username or password ❌")
    }
  }

    return (
        <div className="container1">
        {/* <h1> Welcome to Aqua Riva</h1> */}
        
        <form onSubmit={handleSubmit}>
          <div className='container2'>
          <img className="logo" src ={logo}/>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button className='buttonmargin' type="submit">Login</button>
        </div>
        <div className='container4' align="left">
      <p style={{"color":"#9B0000", "margin-left": "10%"}}>{error}</p>
    </div>
        </div>
      </form>
      </div>
    )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}