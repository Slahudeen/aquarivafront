import React, {useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
// import {Link} from 'react-router-dom';

function App () {
  let response = "";
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setErrorMessage]=useState("");
    //const history = useHistory();
    const navigate = useNavigate();
    // useEffect(()=>{
    //   if(localStorage.getItem('user-info')){
    //     navigate('/dashboard');
    //     //history.push('/dashboard')
    //     // return <Link to="/dashboard">About</Link>
    //   }
    // })
  async function login(){
    // console.log(username,password);
    let item = {username,password};
    if(item.username=="" && item.password != ""){
      setErrorMessage("Please enter the username");
    }
    if(item.password == "" && item.username!=""){
      setErrorMessage("Please enter the password");
    }
    if(item.password == "" && item.username==""){
      setErrorMessage("Please enter the username and password");
    }
    if(item.password != "" && item.username!=""){

    let result = await fetch("https://rattle-innate-roar.glitch.me/login", {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    let statuss=result.status;
    // console.log("YOLOO" + statuss);
    result =await result.json();
    // let statuss=result.statusCode();
    //console.log(result.token);
    // response = JSON.stringify(result);
    // console.log(result.token);
    if(statuss == 200){
      localStorage.setItem("user-info", JSON.stringify(result))
    //history.pushState("user-info","/dashboard");
    navigate('/dashboard');
    }
    // console.log(statuss);
    if(statuss == 403){
      setErrorMessage(JSON.stringify(result));
      //textarea1 = "something went wrong";

    }
    }
}
  return(
  <div>
    <h1> Welcome to Aqua Riva</h1>
    <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} ></input>
    <br/>
    <input type="password" placeholder='password'onChange={(e)=>setPassword(e.target.value)} ></input>
    <br/>
    <button onClick={login} type="submit"> Login </button>
    <div>{error}</div>
  </div>
  )
};
// import login from './login';
// import header from './header';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// class App extends Component{
//   render(){

  
//   return (
//     <header/>
//   );
//   }
// }

export default App;
