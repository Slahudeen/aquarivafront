import React, {useState, useEffect} from 'react';
import './create.css';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './generateInvoice/Invoice';
import moment from "moment";
import { InvoiceNumber } from 'invoice-number'

// date_create: moment().format("DD-MM-YYYY hh:mm:ss")
// import InvoiceData from './generateInvoice/jsonData/InvoiceData';


const getFormattedPrice = (price) => `${price.toFixed(2)} €`;

export default function Dashboard() {
    const [invoiceno, setinvoiceno] = useState("");
    const [attr1, setattr1] = useState(0);
    const [attr2, setattr2] = useState(0);
    const [attr3, setattr3] = useState(0);
    const [attr4, setattr4] = useState(0);
    const [attr5, setattr5] = useState(0);
    const [attr6, setattr6] = useState(0);
    const [attr7, setattr7] = useState(0);
    const [attr8, setattr8] = useState(0);
    const [attr9, setattr9] = useState(0);
    const [attr10, setattr10] = useState(0);
    const [attr11, setattr11] = useState(0);
    const [attr12, setattr12] = useState(0);
    const [attr13, setattr13] = useState(0);
    const [attr14, setattr14] = useState(0);
    const [attr15, setattr15] = useState(0);
    const [attr16, setattr16] = useState(0);
    const [attr17, setattr17] = useState(0);
    const [attr18, setattr18] = useState(0);
    const [attr19, setattr19] = useState(0);
    const [attr20, setattr20] = useState(0);
    const [attr21, setattr21] = useState(0);
    const [attr22, setattr22] = useState(0);
    const [attr23, setattr23] = useState(0);
    const [attr24, setattr24] = useState(0);
    const [attr25, setattr25] = useState(0);
    const [attr26, setattr26] = useState(0);
    const [attr27, setattr27] = useState(0);
    const [attr28, setattr28] = useState(0);
    const [attr29, setattr29] = useState(0);
    const [Kennzeichen, setKennzeichen] = useState("");
    const [KennzeichenAnhängerAuflieger, setKennzeichenAnhängerAuflieger] = useState("");
    const [FahrerName, setFahrerName] = useState("");
    const [Kunde, setKunde] = useState("");
    const [StraßeNr, setStraßeNr] = useState("");
    const [PLZOrt, setPLZOrt] = useState("");
    const [address1, setaddress1] = useState("");
    const [address2, setaddress2] = useState("");
    const [categoryaddress1, setcategoryaddress1] = useState("");
    const [categoryaddress2, setcategoryaddress2] = useState("");
    const [checkedState, setCheckedState] = useState(
      new Array(27).fill(false)
    );
    
    const [error, setErrorMessage] = useState("");
    const [token, setToken] = useState(() => {
        // getting stored value
        const saved = JSON.parse(localStorage.getItem("token"));
        const initialValue = JSON.stringify(saved);
        return initialValue || "";
      });

// getting existing prices
let newToken = token.split(':"')[1];
newToken = newToken.split('"')[0];
    const handleOnChange = (position) => {
      
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
      };

      
 async function addRecord(item, token){
    
    let result = await fetch("http://localhost:3000/companyvehicle", {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(item)
    });
    if(result.status == 200){
     
        setErrorMessage("Record added successfully ✔️");
        setTimeout(function(){ setErrorMessage(" "); },2000);
        setKennzeichen("")
        setKennzeichenAnhängerAuflieger("")
        setFahrerName("")
        setStraßeNr("")
        setPLZOrt("")
        setKunde("")
        setCheckedState(false)
    }

    if(result.status == 403){
        setErrorMessage("Unauthorized. Kindly login again ❌");
        setTimeout(function(){ setErrorMessage(" "); },2000);
    }

    if(result.status !== 403 && result.status!==200){
        setErrorMessage("Something went wrong ❌");
        setTimeout(function(){ setErrorMessage(" "); },2000);
    }
}

 const handleSubmit = async e => {
    e.preventDefault();
    let statuss = await addRecord({
        Gesellschaft:"yes",
        Kennzeichen:Kennzeichen,
        KennzeichenAnhängerAuflieger:KennzeichenAnhängerAuflieger,
        FahrerName:FahrerName,
        Kunde:Kunde,
        StraßeNr:StraßeNr,
        PLZOrt:PLZOrt,
        signatureID:Kennzeichen + moment().format("DDMMYYYYhh"),
        Transporterbis3_5t:checkedState[0],
        LKWbis7_5t:checkedState[1],
        LKWab7_5t:checkedState[2],
        SZMsolo:checkedState[3],
        SZMsolomitchassis:checkedState[4],
        AufliegerSolo:checkedState[5],
        SZMHänger_zug:checkedState[6],
        SZM_Auflieger:checkedState[7],
        PlaneSpezialbis8m:checkedState[8],
        PlaneSpezialab8m:checkedState[9],
        WBContainerChassis3Achser:checkedState[10],
        WBContainerChassis5Achser:checkedState[11],
        Tankfahrzeugbis3Achser:checkedState[12],
        Tankfahrzeug5Achser:checkedState[13],
        Kipperbis3Achser:checkedState[14],
        Kipper5Achser:checkedState[15],
        AbrollerAbsetzer3Achser:checkedState[16],
        AbrollerAbsetzerbis3AchsermitSäure:checkedState[17],
        AbrollerAbsetzer5Achser:checkedState[18],
        AbrollerAbsetzer5AchsermitSäure:checkedState[19],
        Müllfahrzeugebis3Achser:checkedState[20],
        StrakezVerschmutzungbis3Achser:checkedState[21],
        StarkeVerschmutzung5Achser:checkedState[22],
        Innen_ReinigungAuflieger_LadeflächemitSeitenwänden:checkedState[23],
        Tankspezial:attr25,
        Felgespezial:attr26,
        Hebe_bühne:checkedState[24],
        InnenReinigung:checkedState[25],
        SpezialReinigungmitSäure:checkedState[26],
    }, newToken);

 }

      //console.log(checkedState);
  return(
    
    <div className="container1">
    <h1> Welcome to Aqua Ariva</h1>
    <div className='container3'>
    <form id="my-node" onSubmit={handleSubmit}>
        
        <table id="customers">
        
                <tr>
                    <th>Kundendetails</th>
                    {/* <th>{date}</th> */}
                    <th></th>
                </tr>
                <tr>
                    <td>Kennzeichen</td>
                    <td><input type="text" value={Kennzeichen} onChange={e => setKennzeichen(e.target.value.toUpperCase())} required/></td>
                    
                </tr>
                <tr>
                    <td>Kennzeichen Anhänger/Auflieger</td>
                    <td><input type="text" value={KennzeichenAnhängerAuflieger} onChange={e => setKennzeichenAnhängerAuflieger(e.target.value.toUpperCase())} required/></td>
                    
                </tr>
                <tr>
                    <td>Fahrer Name</td>
                    <td><input type="text" value={FahrerName} onChange={e => setFahrerName(e.target.value)} required/></td>
                    
                </tr>
                <tr>
                    <td>Kunde</td>
                    <td><input type="text" value={Kunde} onChange={e => setKunde(e.target.value)} autocomplete="user-name" id='user-name'/></td>
                    
                </tr>
                <tr>
                    <td>Straße, Nr</td>
                    <td><input value={StraßeNr} autocomplete="customer-street" id='customer-street' type="text" onChange={e => setStraßeNr(e.target.value)} /></td>
                    
                </tr>
                <tr>
                    <td>PLZ, Ort</td>
                    <td><input value={PLZOrt} autocomplete="customer-postalcode" id='customer-postalcode' type="text" onChange={e => setPLZOrt(e.target.value)} /></td>
                    
                </tr>
                </table>
                <table id='customers'>
                <tr>
                    <th>Beschreibung</th>
                    <th>Bemerkungen</th>
                </tr>
                
                <tr>
                <td>Transporter bis 3,5 t</td>
                <td><input type="checkbox"  checked={checkedState[0]} onChange={() => handleOnChange(0)} /></td>
                </tr>
                <tr>
                    <td>LKW bis 7,5 t</td>
                <td><input type="checkbox"  checked={checkedState[1]} onChange={() => handleOnChange(1)} /></td>
                </tr>
                <tr>
                    <td>LKW ab 7,5 t</td>
                <td><input type="checkbox"  checked={checkedState[2]} onChange={() => handleOnChange(2)} /></td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                <td><input type="checkbox"  checked={checkedState[3]} onChange={() => handleOnChange(3)} /></td>
                </tr>

                <tr>
                    <td>SZM solo mit chassis</td>
                <td><input type="checkbox"  checked={checkedState[4]} onChange={() => handleOnChange(4)} /></td>
                </tr>
                <tr>
                    <td>Auflieger Solo</td>
                <td><input type="checkbox"  checked={checkedState[5]} onChange={() => handleOnChange(5)} /></td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                <td><input type="checkbox"  checked={checkedState[6]} onChange={() => handleOnChange(6)} /></td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                <td><input type="checkbox"  checked={checkedState[7]} onChange={() => handleOnChange(7)} /></td>
                </tr>
                <tr>
                    <td>Plane Spezial bis 8 m</td>
                <td><input type="checkbox"  checked={checkedState[8]} onChange={() => handleOnChange(8)} /></td>
                </tr>
                <tr>
                    <td>Plane Spezial ab 8 m</td>
                <td><input type="checkbox"  checked={checkedState[9]} onChange={() => handleOnChange(9)} /></td>
                </tr>
                <tr>
                    <td>W.B & Container Chassis 3 Achser</td>
                <td><input type="checkbox"  checked={checkedState[10]} onChange={() => handleOnChange(10)} /></td>
                </tr>
                <tr>
                    <td>W.B & Container Chassis 5 Achser</td>
                <td><input type="checkbox"  checked={checkedState[11]} onChange={() => handleOnChange(11)} /></td>
                </tr>
                <tr>
                    <td>Tankfahrzeug bis 3 Achser</td>
                <td><input type="checkbox"  checked={checkedState[12]} onChange={() => handleOnChange(12)} /></td>
                </tr>
                <tr>
                    <td>Tankfahrzeug 5 Achser</td>
                <td><input type="checkbox"  checked={checkedState[13]} onChange={() => handleOnChange(13)} /></td>
                </tr>
                <tr>
                    <td>Kipper bis 3 Achser</td>
                <td><input type="checkbox"  checked={checkedState[14]} onChange={() => handleOnChange(14)} /></td>
                </tr>
                <tr>
                    <td>Kipper 5 Achser</td>
                <td><input type="checkbox"  checked={checkedState[15]} onChange={() => handleOnChange(15)} /></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 3 Achser</td>
                <td><input type="checkbox"  checked={checkedState[16]} onChange={() => handleOnChange(16)} /></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer bis 3 Achser mit Säure</td>
                <td><input type="checkbox"  checked={checkedState[17]} onChange={() => handleOnChange(17)} /></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 5 Achser</td>
                <td><input type="checkbox"  checked={checkedState[18]} onChange={() => handleOnChange(18)} /></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 5 Achser mit Säure</td>
                <td><input type="checkbox"  checked={checkedState[19]} onChange={() => handleOnChange(19)} /></td>
                </tr>
                <tr>
                    <td>Müllfahrzeuge bis 3 Achser</td>
                <td><input type="checkbox"  checked={checkedState[20]} onChange={() => handleOnChange(20)} /></td>
                </tr>
                <tr>
                    <td>Strake zVerschmutzung bis 3 Achser</td>
                <td><input type="checkbox"  checked={checkedState[21]} onChange={() => handleOnChange(21)} /></td>
                </tr>
                <tr>
                    <td>Starke Verschmutzung 5 Achser</td>
                <td><input type="checkbox"  checked={checkedState[22]} onChange={() => handleOnChange(22)} /></td>
                </tr>
                <tr>
                    <td>Innen-Reinigung Auflieger-Ladefläche mit Seitenwänden(ohne Dach)</td>
                <td><input type="checkbox"  checked={checkedState[23]} onChange={() => handleOnChange(23)} /></td>
                </tr>
                <tr>
                    <td>Tank spezial</td>
                    <td><input placeholder="Enter Quantity here" type="text" onChange={e => setattr25(e.target.value)}  /></td>
                </tr>
                <tr>
                    <td>Felge spezial</td>
                    <td><input placeholder="Enter Quantity here" type="text" onChange={e => setattr26(e.target.value)}  /></td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                <td><input type="checkbox"  checked={checkedState[24]} onChange={() => handleOnChange(24)} /></td>
                </tr>
                <tr>
                    <td>Innen Reinigung</td>
                <td><input type="checkbox"  checked={checkedState[25]} onChange={() => handleOnChange(25)} /></td>
                </tr>
                <tr>
                    <td>Spezial Reinigung mit Säure</td>
                <td><input type="checkbox"  checked={checkedState[26]} onChange={() => handleOnChange(26)} /></td>
                </tr>
                
                </table>
         
    <button type="submit">Submit</button>
    <p>{error}</p>
  </form>
  </div>
  </div>
  );
}