import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Create from './create';
import Search from './search';
import './create.css';
import logo from "./assets/logo.png";



export default function Dashboard() {

  const navigate = useNavigate();

  const navigateToCreatePage = () => {
    navigate('/create');
  };

  const navigateToSearchPage = () => {
    navigate('/search');
  };


  return(
    <div className="container1">
     
        {/* <button onClick={navigateToCreatePage}>Contacts</button> */}

        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
        <form >
          <div className='container2'>
          <img className="logo" src ={logo}/>
          <div>
          <button className='buttonmargin' type="submit" onClick={navigateToCreatePage}>Add Record</button>
        </div>
        <div>
          <button className='buttonmargin' type="submit" onClick={navigateToSearchPage}>Search Record</button>
        </div>
        </div>
      </form>
    </div>
    
  );
}