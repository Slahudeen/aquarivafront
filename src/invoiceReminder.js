import React, {useState, useEffect} from 'react';
import './create.css';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './invoiceReminder/Invoice';
import moment from "moment";
import { InvoiceNumber } from 'invoice-number'

// date_create: moment().format("DD-MM-YYYY hh:mm:ss")
// import InvoiceData from './generateInvoice/jsonData/InvoiceData';


const getFormattedPrice = (price) => `${price.toFixed(2)} €`;

export default function Dashboard() {
    const [invoiceno, setinvoiceno] = useState("");
    const [Date, setDate] = useState(moment().format("DD-MM-YYYY"));
    const [customer, setcustomer] = useState(" ");
    const [amount, setAmount] = useState("");
    // const [address, setaddress] = useState("");
    const [address1, setaddress1] = useState(" ");
    const [address2, setaddress2] = useState(" ");
    const [categoryaddress1, setcategoryaddress1] = useState("");
    const [categoryaddress2, setcategoryaddress2] = useState("");
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
        title: "Zahlungserinnerung",
        date: Date,
        amount: amount,
        // phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße " + longMonth + ", " + year,
        details: "",
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
                    <th>Rechnungs-Nr:</th>
                    <th><input type="text" onChange={e => setinvoiceno(e.target.value)}/></th>
                </tr>
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
                    <td>Datum</td>
                    <td><input type="text" onChange={e => setDate(e.target.value)} placeholder={moment().format("DD-MM-YYYY")} /></td>
                </tr>
                <tr>
                    <td>Menge</td>
                    <td><input type="text" onChange={e => setAmount(e.target.value)}  /></td>
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