import React, {useState, useEffect} from 'react';
import './create.css';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './companyLetterHead/Invoice';
import moment from "moment";
import { InvoiceNumber } from 'invoice-number'
import signature from './signature.js'

import SignaturePad from "react-signature-canvas";
// date_create: moment().format("DD-MM-YYYY hh:mm:ss")
// import InvoiceData from './generateInvoice/jsonData/InvoiceData';


const getFormattedPrice = (price) => `${price.toFixed(2)} €`;

export default function Dashboard () {
  // let signObj: Signature | null;
  //   const OnSave=()=>{
  //       signObj?.save();
  //   }
  //   const OnClear=()=>{
  //       signObj?.clear();
  //   }
    const [invoiceno, setinvoiceno] = useState("");
    const [year, setyear] = useState(moment().format("YYYY"));
    const [longMonth, setlongMonth] = useState(moment().format("MMMM"));
    const [customer, setcustomer] = useState(" ");
    const [address1, setaddress1] = useState(" ");
    const [address2, setaddress2] = useState(" ");
    const [categoryaddress1, setcategoryaddress1] = useState("");
    const [categoryaddress2, setcategoryaddress2] = useState("");
    const [title, setTitle] = useState(" ");
    const [text, setText] = useState(" ");

    const fileName = customer + ".pdf";
    let newAddress = categoryaddress1;
    if(newAddress == ""){
        newAddress = newAddress;
    }
    else{
        newAddress = "Leistungsempfänger:\n" + newAddress;
    }
    const InvoiceData = {
        // invoice_no: date+invoiceno,
        invoice_no: invoiceno,
        fullname: customer,
        address: address1,
        address2: address2, 
        title: title,
        // phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße " + longMonth + ", " + year,
        details: text,
        categoryaddress1: newAddress,
        categoryaddress2: categoryaddress2,
        trans_date: moment().format("DD-MM-YYYY"),
       
    }

  //   const [token, setToken] = useState(() => {
  //     // getting stored value
  //     const saved = JSON.parse(localStorage.getItem("token"));
  //     const initialValue = JSON.stringify(saved);
  //     return initialValue || "";
  //   });
  // let newToken = token.split(':"')[1];
  // newToken = newToken.split('"')[0];
  //   const uploadImageAPI = async () => {
  //     fetch("https://rattle-innate-roar.glitch.me/upload", {
  //         method: 'Post',
  //         headers: new Headers({
  //             'Accept': 'application/json',
  //              'Content-Type': 'application/json',
  //              "Authorization": "Bearer " + newToken
  //         })
  //     }).then(async response => await response.json())
  //         .then(data => {
  //             setRecords(data);
  //            setError(null);
  //            setLoading(false);
  //         }).catch( error => {
  //            console.error(error);
  //            setError('Something went wrong, please try again later.');
  //            setLoading(false);
  //         });
  //  }
    
  return(
    
    <div className="container1">
    {/* <div className="signature">
            <div id = "actionButton" className='signButton'>
                <ButtonComponent onClick={OnSave}>Save</ButtonComponent>
                <ButtonComponent onClick={OnClear}>Clear</ButtonComponent>
            </div>

            <SignatureComponent ref={sign=> signObj = sign}
            backgroundColor='white'
            minStrokeWidth={1}
            maxStrokeWidth={3}
            ></SignatureComponent>
        </div> */}
      
    <h1> Briefkopf </h1>
    <div className='container3'>
    <form id="my-node">
        
        <table id="customers">
        
                <tr>
                    <td>Kunde</td>
                    <td><input autoComplete="user-name" id='user-name' type="text" onChange={e => setcustomer(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Straße, Nr</td>
                    <td><input autoComplete="customer-street" id='customer-street' type="text" onChange={e => setaddress1(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>PLZ, Ort</td>
                    <td><input autoComplete="customer-postalcode" id='customer-postalcode' type="text" onChange={e => setaddress2(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Titel</td>
                    <td><input  type="text" onChange={e => setTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Inhalt</td>
                    <td><textarea rows={15} onChange={e => setText(e.target.value)}/></td>
                </tr>
               
                
               
                
                </table>

     
    {/* <button onClick={onButtonClick}>Download PDF</button> */}
    <PDFViewer width={800} height={1000} showToolbar={false}>
        <PdfDocument invoicedata={InvoiceData} />
      </PDFViewer>

      <div className='download-link'>
        <PDFDownloadLink
          document={<PdfDocument invoicedata={InvoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
  </form>
  </div>
  </div>

  );
}