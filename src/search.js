import React, {useState, useEffect}from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Create from './create';
import './create.css';
import logo from "./assets/logo.png";
import moment from 'moment-timezone';


// function changeDatetimeByTimezone(datetime, timezone) {
//     const parsedDateAsUtc = moment.utc()
//       .startOf('day') 
//       .add(datetime.substring(0, 2), "hours")
//       .add(datetime.substring(3, 5), "minutes");
//     return parsedDateAsUtc.clone().tz(timezone).format("hh:mm");
// }


export default function Dashboard() {

  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [noRecord, setNoRecord] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(() => {
    // getting stored value
    const saved = JSON.parse(localStorage.getItem("token"));
    const initialValue = JSON.stringify(saved);
    return initialValue || "";
  });
let newToken = token.split(':"')[1];
newToken = newToken.split('"')[0];
useEffect(() => {
    getCommentsAPI();
 }, []);
  const getCommentsAPI = async () => {
    fetch("https://rattle-innate-roar.glitch.me/service", {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
             'Content-Type': 'application/json',
             "Authorization": "Bearer " + newToken
        })
    }).then(async response => await response.json())
        .then(data => {
            setRecords(data);
           setError(null);
           setLoading(false);
        }).catch( error => {
           console.error(error);
           setError('Something went wrong, please try again later.');
           setLoading(false);
        });
 }
 const handleSubmit = async e => {
    e.preventDefault();
    if(searchText === ""){
        getCommentsAPI();
    }
    if(searchText !==""){

    
    const getCommentsAPI = await fetch("https://rattle-innate-roar.glitch.me/service/" + searchText, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 "Authorization": "Bearer " + newToken
            })
        }).then(async response => await response.json())
            .then(data => {
                setRecords(data);
                console.log(data + "," +JSON.stringify(data) )
                if(JSON.stringify(data) === "[]"){
                    setNoRecord("No record found 😢");
                }
                if(JSON.stringify(data) !== "[]"){
                    setNoRecord("");
                }
               setError(null);
               setLoading(false);
            }).catch( error => {
               console.error(error);
               setError('Something went wrong, please try again later.');
               setLoading(false);
            });
        }
     }
  



  return(
    <div className="container1">
     

        <form onSubmit={handleSubmit}>
          <div className='container2'>
          <img className="logo" src ={logo}/>
          <div>
          <input type="text" placeholder='Kfz-Kennzeichen eingeben' onChange={e => setSearchText(e.target.value)} />
          <button className='buttonmargin search' type="submit">Suche</button>
      <p style={{"color":"#9B0000"}}>{noRecord}</p>
          </div></div>
        
      </form>
      <div className="container1">
      {records.map((data, key) => {
        let streetNo = " ";
        let postNo = " ";
        if(data.address === undefined){


        }
        else {
            streetNo = data.address;
            streetNo = streetNo.split("$$$$")[0];
            postNo = data.address;
            postNo = postNo.split("$$$$")[1];
        }
          return (
        // Kennzeichen
    // bis 3,5 t
    // 3,5 t bis 7,5 t
    // ab 7,5 t
    // SZM solo
    // SZM Hänger-zug
    // SZM+ Auflieger
    // Innen- reini- gung
    // Hebe- bühne
    // Spezial-reini-gung mit Säure
    // Tank spezial
    // Felge spezial
    // Kennzeichen Anhänger/Auflieger
    // Fahrer Name 
    // Unterschrift
            <div className="container2 fontweight" key={key}>
                
                <table id="customers">
                <tr>
                    <th>Beschreibung</th>
                    <th>Bemerkungen</th>
                    <th>Preis</th>
                </tr>
                <tr>
                    <td>Kennzeichen</td>
                    <td>{data.licenseplate}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Gesellschaft</td>
                    <td>{data.company}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Kennzeichen Anhänger/Auflieger</td>
                    <td>{data.trailorNumber}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>bis 3,5 t</td>
                    <td>{data.upto3point5tons}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>3,5 t bis 7,5 t</td>
                    <td>{data.upto7point5tons}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>ab 7,5 t</td>
                    <td>{data.from7point5tons}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                    <td>{data.trucksolo}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                    <td>{data.trailertrain}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                    <td>{data.trailer}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Innen-reini-gung</td>
                    <td>{data.interiorcleaning}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                    <td>{data.liftingplatform}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Spezial-reini-gung mit Säure</td>
                    <td>{data.cleanignwithacid}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tank spezial</td>
                    <td>{data.tankspecial}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Felge spezial</td>
                    <td>{data.rimspecial}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fahrer Name</td>
                    <td>{data.drivername}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Unterschrift</td>
                    <td>{data.signature}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Kunde</td>
                    <td>{data.customer}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Straße, Nr</td>
                    <td>{streetNo}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>PLZ, Ort</td>
                    <td>{postNo}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Gesamtpreis</td>
                    <td></td>
                    <td>{data.totalPrice}</td>
                </tr>
                <tr>
                    <td>Datum</td>
                    <td>{data.date.split("T")[0] + "(" + moment.utc(data.date.split("T")[1].split(".")[0], "HH:mm").tz('Europe/Berlin').format("HH:mm") + ")"}</td>
                    <td>-</td>
                </tr>
                </table>

                
              {/* {"Kennzeichen : " + data.licenseplate }
              <br/> <br/> 
                {"bis 3,5 t : " + data.upto3point5tons }
                <br/> <br/> 
                {"3,5 t bis 7,5 t : " + data.upto7point5tons}
                <br/> <br/> 
                {"ab 7,5 t : " + data.from7point5tons}
                <br/> <br/> 
                {"SZM solo : " + data.trucksolo}
                <br/> <br/> 
                {"SZM Hänger-zug : " + data.trailertrain} */}
                {/* <br/> <br/>  */}
                {/* {"SZM+Auflieger : " + data.trailer} */}
                {/* <br/> <br/>  */}
                {/* {"Innen-reini-gung : " + data.interiorcleaning}
                <br/> <br/>  */}
                {/* {"Hebe-bühne : " + data.liftingplatform}
                <br/> <br/>  */}
                {/* {"Spezial-reini-gung mit Säure : " + data.cleanignwithacid}
                <br/> <br/>  */}
                {/* {"Tank spezial : " + data.tankspecial}
                <br/> <br/>  */}
                {/* {"Felge spezial : " + data.rimspecial}
                <br/> <br/>  */}
                {/* {"Fahrer Name : " + data.drivername}
                <br/> <br/>  */}
                {/* {"Unterschrift : " + data.signature}
                <br/> <br/>  */}
                {/* {"Kunde : " + data.customer}
                <br/> <br/>  */}
                {/* {"Anschrift : " + data.address}
                <br/> <br/>  */}
                {/* {"testttt : " + moment.utc(data.date.split("T")[1].split(".")[0], "HH:mm").tz('Europe/Berlin').format("HH:mm")} */}
                
                {
                // "Datum : " + data.date.split("T")[0] + "(" + moment.utc(data.date.split("T")[1].split(".")[0], "HH:mm").tz('Europe/Berlin').format("HH:mm") + ")"
            }
            </div>
          );
        })}
   </div>

   <br />


    </div>
    
  );
}