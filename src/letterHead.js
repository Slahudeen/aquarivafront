import React, {useState, useEffect} from 'react';
import './create.css';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './companyLetterHead/Invoice';
import moment from "moment";
import { InvoiceNumber } from 'invoice-number'

// date_create: moment().format("DD-MM-YYYY hh:mm:ss")
// import InvoiceData from './generateInvoice/jsonData/InvoiceData';


const getFormattedPrice = (price) => `${price.toFixed(2)} €`;

export default function Dashboard() {
    const [invoiceno, setinvoiceno] = useState("");
    const [year, setyear] = useState(moment().format("YYYY"));
    const [longMonth, setlongMonth] = useState(moment().format("MMMM"));
    const [customer, setcustomer] = useState("");
    const [address1, setaddress1] = useState("");
    const [address2, setaddress2] = useState("");
    const [categoryaddress1, setcategoryaddress1] = useState("");
    const [categoryaddress2, setcategoryaddress2] = useState("");
    const [title, setTitle] = useState(" ");
    const [text, setText] = useState(" ");
    let date = (((moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD')).replaceAll(" ", "")).replaceAll(":","")).replaceAll("-","");
    // const fileName = customer + "(" + (date+invoiceno) + ")" +  ".pdf";
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
   
    
  return(
    
    <div className="container1">
    <h1> Rechnungserinnerung </h1>
    <div className='container3'>
    <form id="my-node">
        
        <table id="customers">
        
                <tr>
                    <td>Kunde</td>
                    <td><input autocomplete="user-name" id='user-name' type="text" onChange={e => setcustomer(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Straße, Nr</td>
                    <td><input autocomplete="customer-street" id='customer-street' type="text" onChange={e => setaddress1(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>PLZ, Ort</td>
                    <td><input autocomplete="customer-postalcode" id='customer-postalcode' type="text" onChange={e => setaddress2(e.target.value)} required/></td>
                </tr>
                <tr>
                    <td>Titel</td>
                    <td><input  type="text" onChange={e => setTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Inhalt</td>
                    <td><textarea  type="textarea" rows={15} onChange={e => setText(e.target.value)}/></td>
                </tr>
               
                
               
                
                </table>
         
    <div className='container4' align="center">
    {/* <button>Save</button> */}
      </div>
     
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