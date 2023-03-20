
import React, { Component, useRef,useState, useEffect } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import SignaturePad from "react-signature-canvas";

import moment from "moment";
import "./App.css";

export default function Signature() {

  let sigPad = useRef({});
  let data = '';
  const [resp, setResponse] = useState("");
  const [unique, setUnique] = useState("");
  const [da, setda] = useState('');

  function clear(){
    sigPad.current.clear();
  }

  const save = async e => {
    e.preventDefault();
    data = sigPad.current.getTrimmedCanvas().toDataURL("image/png");
    console.log(data);
    setda(data);
    uploadImageAPI();
    setUnique("")
    sigPad.current.clear();

  }

  
  // function show(){
  //   sigPad.current.fromDataURL(data);
  //   //console.log(sigPad.current.fromDataURL(data));
  // }
    const [token, setToken] = useState(() => {
      // getting stored value
      const saved = JSON.parse(localStorage.getItem("token"));
      const initialValue = JSON.stringify(saved);
      return initialValue || "";
    });
  let newToken = token.split(':"')[1];
  newToken = newToken.split('"')[0];

    const uploadImageAPI = async () => {
      fetch("https://rattle-innate-roar.glitch.me/upload", {
          method: 'Post',
          headers: new Headers({
              'Accept': 'application/json',
               'Content-Type': 'application/json',
               "Authorization": "Bearer " + newToken
          }),
          body: JSON.stringify({
            name : unique + moment().format("YYYYMMDD"),
            desc : 'test',
            img : data
          })
      }).then(async response => await response.json())
          .then(response => {
            setResponse(response.message + "✔️");
            setTimeout(function(){ setResponse(" "); },2000);
          }).catch( error => {
            setResponse("Something went wrong..." + "❌");
            setTimeout(function(){ setResponse(" "); },2000);
             
          });
   }

    return (
      <div className="container1">
      <div className="container33">
        
      <p style={{"color":"#9B0000"}}>{resp}</p>
        <div className="signature">
        <form onSubmit={save}>
        <SignaturePad
        ref={sigPad}
        penColor='black'
        canvasProps={{width:500,height:200}} ></SignaturePad>
        <input className="input2" value={unique} onChange={e => setUnique(e.target.value.toUpperCase())} required></input>
        <button className="button2" type="submit" >Save</button>  
        </form>
        <button className="button2" onClick={clear}>Clear</button>
        </div>
        </div>
      </div>
    );
  }



