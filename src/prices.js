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
    const [error, setErrorMessage] = useState("");


   
    const current = new Date();
    const [year, setyear] = useState(moment().format("YYYY"));
    let mo = moment().month();
    mo = moment().month(mo-1).format("MMMM");
    const [token, setToken] = useState(() => {
        // getting stored value
        const saved = JSON.parse(localStorage.getItem("token"));
        const initialValue = JSON.stringify(saved);
        return initialValue || "";
      });

// getting existing prices
let newToken = token.split(':"')[1];
newToken = newToken.split('"')[0];
useEffect(() => {
    getExistingPrices();
 }, []);
  const getExistingPrices = async () => {
    fetch("https://rattle-innate-roar.glitch.me/prices", {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
             'Content-Type': 'application/json',
             "Authorization": "Bearer " + newToken
        })
    }).then(async response => await response.json())
        .then(data => {
          setattr1(data[0].Transporterbis3_5t);
          setattr2(data[0].LKWbis7_5t);
          setattr3(data[0].LKWab7_5t);
          setattr4(data[0].SZMsolo);
          setattr5(data[0].SZMsolomitchassis);
          setattr6(data[0].AufliegerSolo);
          setattr7(data[0].SZMHänger_zug);
          setattr8(data[0].SZM_Auflieger);
          setattr9(data[0].PlaneSpezialbis8m);
          setattr10(data[0].PlaneSpezialab8m);
          setattr11(data[0].WBContainerChassis3Achser);
          setattr12(data[0].WBContainerChassis5Achser);
          setattr13(data[0].Tankfahrzeugbis3Achser);
          setattr14(data[0].Tankfahrzeug5Achser);
          setattr15(data[0].Kipperbis3Achser);
          setattr16(data[0].Kipper5Achser);
          setattr17(data[0].AbrollerAbsetzer3Achser);
          setattr18(data[0].AbrollerAbsetzerbis3AchsermitSäure);
          setattr19(data[0].AbrollerAbsetzer5Achser);
          setattr20(data[0].AbrollerAbsetzer5AchsermitSäure);
          setattr21(data[0].Müllfahrzeugebis3Achser);
          setattr22(data[0].StrakezVerschmutzungbis3Achser);
          setattr23(data[0].StarkeVerschmutzung5Achser);
          setattr24(data[0].Innen_ReinigungAuflieger_LadeflächemitSeitenwänden);
          setattr25(data[0].Tankspezial);
          setattr26(data[0].Felgespezial);
          setattr27(data[0].Hebe_bühne);
          setattr28(data[0].InnenReinigung);
          setattr29(data[0].SpezialReinigungmitSäure);
        }).catch( error => {
           console.error(error);
          
        });
 }

 //console.log("priceee " + attr1)

 async function updatePrices(item, token){
    
    let result = await fetch("https://rattle-innate-roar.glitch.me/prices", {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(item)
    });
    if(result.status == 200){
     
        setErrorMessage("Prices updated successfully ✔️");
        setTimeout(function(){ setErrorMessage(" "); },2000);
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

 const save = async e => {
    e.preventDefault();
    let statuss = await updatePrices({
        Transporterbis3_5t:attr1,
        LKWbis7_5t:attr2,
        LKWab7_5t:attr3,
        SZMsolo:attr4,
        SZMsolomitchassis:attr5,
        AufliegerSolo:attr6,
        SZMHänger_zug:attr7,
        SZM_Auflieger:attr8,
        PlaneSpezialbis8m:attr9,
        PlaneSpezialab8m:attr10,
        WBContainerChassis3Achser:attr11,
        WBContainerChassis5Achser:attr12,
        Tankfahrzeugbis3Achser:attr13,
        Tankfahrzeug5Achser:attr14,
        Kipperbis3Achser:attr15,
        Kipper5Achser:attr16,
        AbrollerAbsetzer3Achser:attr17,
        AbrollerAbsetzerbis3AchsermitSäure:attr18,
        AbrollerAbsetzer5Achser:attr19,
        AbrollerAbsetzer5AchsermitSäure:attr20,
        Müllfahrzeugebis3Achser:attr21,
        StrakezVerschmutzungbis3Achser:attr22,
        StarkeVerschmutzung5Achser:attr23,
        Innen_ReinigungAuflieger_LadeflächemitSeitenwänden:attr24,
        Tankspezial:attr25,
        Felgespezial:attr26,
        Hebe_bühne:attr27,
        InnenReinigung:attr28,
        SpezialReinigungmitSäure:attr29,
    }, newToken);

    


  }
    
  return(
    
    <div className="container1">
    <h1> Welcome to Price Update Section</h1>
    <h3> All the existing prices are being shown in the input fields.</h3>
    <h3> In order to update, make sure to enter prices for all the items carefully.</h3>
    <div className='container3'>
    <form id="my-node" onSubmit={save}>
                <table id='customers'>
                <tr>
                    <th>Prices</th>
                </tr>
                
                <tr>
                <td>Transporter bis 3,5 t</td>
                <td><input type="text" placeholder={attr1} onChange={e => setattr1(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>LKW bis 7,5 t</td>
                <td><input type="text" placeholder={attr2} onChange={e => setattr2(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>LKW ab 7,5 t</td>
                <td><input type="text" placeholder={attr3} onChange={e => setattr3(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                <td><input type="text" placeholder={attr4} onChange={e => setattr4(e.target.value)} required/></td>
                </tr>

                <tr>
                    <td>SZM solo mit chassis</td>
                <td><input type="text" placeholder={attr5} onChange={e => setattr5(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Auflieger Solo</td>
                <td><input type="text" placeholder={attr6} onChange={e => setattr6(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                <td><input type="text" placeholder={attr7} onChange={e => setattr7(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                <td><input type="text" placeholder={attr8} onChange={e => setattr8(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Plane Spezial bis 8 m</td>
                <td><input type="text" placeholder={attr9} onChange={e => setattr9(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Plane Spezial ab 8 m</td>
                <td><input type="text" placeholder={attr10} onChange={e => setattr10(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>W.B & Container Chassis 3 Achser</td>
                <td><input type="text" placeholder={attr11} onChange={e => setattr11(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>W.B & Container Chassis 5 Achser</td>
                <td><input type="text" placeholder={attr12} onChange={e => setattr12(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Tankfahrzeug bis 3 Achser</td>
                <td><input type="text" placeholder={attr13} onChange={e => setattr13(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Tankfahrzeug 5 Achser</td>
                <td><input type="text" placeholder={attr14} onChange={e => setattr14(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Kipper bis 3 Achser</td>
                <td><input type="text" placeholder={attr15} onChange={e => setattr15(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Kipper 5 Achser</td>
                <td><input type="text" placeholder={attr16} onChange={e => setattr16(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 3 Achser</td>
                <td><input type="text" placeholder={attr17} onChange={e => setattr17(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer bis 3 Achser mit Säure</td>
                <td><input type="text" placeholder={attr18} onChange={e => setattr18(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 5 Achser</td>
                <td><input type="text" placeholder={attr19} onChange={e => setattr19(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 5 Achser mit Säure</td>
                <td><input type="text" placeholder={attr20} onChange={e => setattr20(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Müllfahrzeuge bis 3 Achser</td>
                <td><input type="text" placeholder={attr21} onChange={e => setattr21(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Strake zVerschmutzung bis 3 Achser</td>
                <td><input type="text" placeholder={attr22} onChange={e => setattr22(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Starke Verschmutzung 5 Achser</td>
                <td><input type="text" placeholder={attr23} onChange={e => setattr23(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Innen-Reinigung Auflieger-Ladefläche mit Seitenwänden(ohne Dach)</td>
                <td><input type="text" placeholder={attr24} onChange={e => setattr24(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Tank spezial</td>
                    <td><input type="text" placeholder={attr25} onChange={e => setattr25(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Felge spezial</td>
                    <td><input type="text" placeholder={attr26} onChange={e => setattr26(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                <td><input type="text" placeholder={attr27} onChange={e => setattr27(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Innen Reinigung</td>
                <td><input type="text" placeholder={attr28} onChange={e => setattr28(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Spezial Reinigung mit Säure</td>
                <td><input type="text" placeholder={attr29} onChange={e => setattr29(e.target.value)} required/></td>
                </tr>
                
                </table>
                <button type="submit">Update</button>
                <p>{error}</p>
         
   
  </form>
  </div>
  </div>
  );
}