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
    const [attr10_1, setattr10_1] = useState("");
    const [attr10_2, setattr10_2] = useState(0);
    const [attr10_3, setattr10_3] = useState(0);
    const [attr11_1, setattr11_1] = useState("");
    const [attr11_2, setattr11_2] = useState(0);
    const [attr11_3, setattr11_3] = useState(0);
    const [attr12_1, setattr12_1] = useState("");
    const [attr12_2, setattr12_2] = useState(0);
    const [attr12_3, setattr12_3] = useState(0);
    const [attr14_1, setattr14_1] = useState("");
    const [attr14_2, setattr14_2] = useState(0);
    const [attr14_3, setattr14_3] = useState(0);
    const [attr15_1, setattr15_1] = useState("");
    const [attr15_2, setattr15_2] = useState(0);
    const [attr15_3, setattr15_3] = useState(0);
    const [attr13_1, setattr13_1] = useState(" ");
    const [discount, setdiscount] = useState(0);
    const [interiorcleaning, setinteriorcleaning] = useState(0);
    const current = new Date();
    const [year, setyear] = useState(moment().format("YYYY"));
    const mo = require('moment');
    let localeData = mo.updateLocale('en', {
        months: [
            "Januar", "Februar", "Marz", "April", "Mai", "Juni", "Juli",
            "August", "September", "Oktober", "November", "Dezember"
        ]
    });
    let m = localeData.months();
    
   // m = localeData.month(m-1);
    const [longMonth, setlongMonth] = useState(m[(moment().month())-1]);
    const [yearReceipt, setyearReceipt] = useState(moment().format("YYYY"));
    const [longMonthReceipt, setlongMonthReceipt] = useState(moment().format("MM"));
    const [dateReceipt, setDateReceipt] = useState(moment().format("DD"));
    // const [liftingplatform, setliftingplatform] = useState("");
    const [cleanignwithacid, setcleanignwithacid] = useState(0);
    const [tankspecial, settankspecial] = useState(0);
    const [rimspecial, setrimspecial] = useState(0);
    const [customer, setcustomer] = useState("");
    // const [address, setaddress] = useState("");
    const [address1, setaddress1] = useState("");
    const [address2, setaddress2] = useState("");
    const [categoryaddress1, setcategoryaddress1] = useState("");
    const [categoryaddress2, setcategoryaddress2] = useState("");
    const [categoryaddress3, setcategoryaddress3] = useState("");
    const [prices, setPrices]=useState([32,40,50,38,75,60,16.5]);
    const [checkedState, setCheckedState] = useState(
      new Array(prices.length).fill(false)
    );
    //test
  
    const [total, setTotal] = useState(0);
    let date = (((moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD')).replaceAll(" ", "")).replaceAll(":","")).replaceAll("-","");
    // const fileName = customer + "(" + (date+invoiceno) + ")" +  ".pdf";
    const fileName = "Rechnung_" + customer + "_" + (invoiceno) + ".pdf";
   
  
      let pri =  (attr1 * 32) + (attr2 * 45) + (attr3 * 55) + (attr4 * 38) + (attr5 * 75) + (attr6 * 69) + (attr7 * interiorcleaning)
      + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
      + (attr11_2 * attr11_3) + (attr12_2 * attr12_3)+ (attr14_2 * attr14_3)+ (attr15_2 * attr15_3) + (attr10 * 48) + (attr11 * 48) + (attr12 * 35) 
      + (attr13 * 49) + (attr14 * 100) + (attr15 * 95) + (attr16 * 99) + (attr17 * 69) + (attr18 * 85)
      + (attr19 * 60) + (attr20 * 69) + (attr21 * 70) + (attr22 * 40) + (attr23 * 57) + (attr24 * 127) 
      + (attr25 * 25) + (attr26 * 50) + (attr27 * 80);

      let disc = (pri/100) * discount;

      let newPri = pri - disc;

      let tax = (newPri/100) * 19;
      let finalTotal = newPri + tax;
    //   console.log(pri);
    //   console.log(disc);
    //   console.log(newPri);
    //   console.log(tax);
    //   console.log(finalTotal);
    //   console.log("break");
    //   console.log(getFormattedPrice(pri));
    //   console.log(getFormattedPrice(disc));
    //   console.log(getFormattedPrice(newPri));
    //   console.log(getFormattedPrice(tax));
    //   console.log(getFormattedPrice(finalTotal));

    //   let tax = (((attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
    //   + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
    //   + (attr11_2 * attr11_3) + (attr12_2 * attr12_3) + (attr10 * 48) + (attr11 * 42) + (attr12 * 35) 
    //   + (attr13 * 49) + (attr14 * 95) + (attr15 * 95) + (attr16 * 95) + (attr17 * 60) + (attr18 * 85))/100)*19;


     
   
      
      const items = [
        
        // {
        //     sno: 0,
        //     qty:" ",
        //     desc: attr13_1,
        //     rate: " ",
        //     remarks: " "
        // },
            {
                sno: 1,
                qty: attr1,
                rate: "32,00 €",
                desc: "Transporter bis 3,5 t",
                remarks: " " + getFormattedPrice(attr1 * 32).replace(".",","),
            },
            {
                sno: 2,
                qty: attr2,
                rate: "45,00 €",
                desc: "LKW bis 7,5 t",
                remarks: " " + getFormattedPrice(attr2 * 45).replace(".",","),
            },
            {
                sno: 3,
                qty: attr3,
                rate: "55,00 €",
                desc: "LKW ab 7,5 t",
                remarks: " " + getFormattedPrice(attr3 * 55).replace(".",","),
            },
            {
                sno: 4,
                qty: attr4,
                rate: "38,00 €",
                desc: "SZM solo",
                remarks: " " + getFormattedPrice(attr4 * 38).replace(".",","),
            },

            {
                sno: 5,
                qty: attr10,
                rate: "48,00 €",
                desc: "SZM solo mit chassis",
                remarks: " " + getFormattedPrice(attr10 * 48).replace(".",","),
            },
            {
                sno: 6,
                qty: attr11,
                rate: "48,00 €",
                desc: "Auflieger Solo",
                remarks: " " + getFormattedPrice(attr11 * 48).replace(".",","),
            },
            {
                sno: 14,
                qty: attr5,
                rate: "75,00 €",
                desc: "SZM+Hänger-zug",
                remarks: " " + getFormattedPrice(attr5 * 75).replace(".",","),
            },
            {
                sno: 15,
                qty: attr6,
                rate: "69,00 €",
                desc: "SZM+Auflieger",
                remarks: " " + getFormattedPrice(attr6 * 69).replace(".",","),
            },
            {
                sno: 7,
                qty: attr12,
                rate: "35,00 €",
                desc: "Plane Spezial bis 8 m",
                remarks: " " + getFormattedPrice(attr12 * 35).replace(".",","),
            },
            {
                sno: 8,
                qty: attr13,
                rate: "49,00 €",
                desc: "Plane Spezial ab 8 m",
                remarks: " " + getFormattedPrice(attr13 * 49).replace(".",","),
            },
            {
                sno: 8,
                qty: attr19,
                rate: "60,00 €",
                desc: "W.B & Container Chassis 3 Achser",
                remarks: " " + getFormattedPrice(attr19 * 60).replace(".",","),
            },
            {
                sno: 10,
                qty: attr15,
                rate: "95,00 €",
                desc: "W.B & Container Chassis 5 Achser",
                remarks: " " + getFormattedPrice(attr15 * 95).replace(".",","),
            },
            {
                sno: 10,
                qty: attr20,
                rate: "69,00 €",
                desc: "Tankfahrzeug bis 3 Achser",
                remarks: " " + getFormattedPrice(attr20 * 69).replace(".",","),
            },
            {
                sno: 9,
                qty: attr14,
                rate: "100,00 €",
                desc: "Tankfahrzeug 5 Achser",
                remarks: " " + getFormattedPrice(attr14 * 100).replace(".",","),
            },
            {
                sno: 9,
                qty: attr21,
                rate: "70,00 €",
                desc: "Tankfahrzeug 5 Achser",
                remarks: " " + getFormattedPrice(attr21 * 70).replace(".",","),
            },
            {
                sno: 13,
                qty: attr18,
                rate: "85,00 €",
                desc: "Kipper 5 Achser",
                remarks: " " + getFormattedPrice(attr18 * 85).replace(".",","),
            },
            {
                sno: 12,
                qty: attr17,
                rate: "69,00 €",
                desc: "Abroller & Absetzer 3 Achser",
                remarks: " " + getFormattedPrice(attr17 * 69).replace(".",","),
            },
            {
                sno: 12,
                qty: attr22,
                rate: "40,00 €",
                desc: "Abroller & Absetzer bis 3 Achser mit Säure",
                remarks: " " + getFormattedPrice(attr22 * 40).replace(".",","),
            },
            {
                sno: 11,
                qty: attr16,
                rate: "99,00 €",
                desc: "Abroller & Absetzer 5 Achser",
                remarks: " " + getFormattedPrice(attr16 * 99).replace(".",","),
            },
            {
                sno: 11,
                qty: attr23,
                rate: "57,00 €",
                desc: "Abroller & Absetzer 5 Achser mit Säure",
                remarks: " " + getFormattedPrice(attr23 * 57).replace(".",","),
            },
            {
                sno: 11,
                qty: attr24,
                rate: "127,00 €",
                desc: "Müllfahrzeuge bis 3 Achser",
                remarks: " " + getFormattedPrice(attr24 * 127).replace(".",","),
            },
            {
                sno: 11,
                qty: attr25,
                rate: "25,00 €",
                desc: "Strake zVerschmutzung bis 3 Achser",
                remarks: " " + getFormattedPrice(attr25 * 25).replace(".",","),
            },
            {
                sno: 11,
                qty: attr26,
                rate: "50,00 €",
                desc: "Starke Verschmutzung 5 Achser",
                remarks: " " + getFormattedPrice(attr26 * 50).replace(".",","),
            },
            {
                sno: 11,
                qty: attr27,
                rate: "80,00 €",
                desc: "Innen-Reinigung Auflieger-Ladefläche mit Seitenwänden(ohne Dach)",
                remarks: " " + getFormattedPrice(attr27 * 80).replace(".",","),
            },
            {
                sno: 19,
                qty: tankspecial,
                rate: "11,00 €",
                desc: "Tank spezial",
                remarks: " " + getFormattedPrice(tankspecial * 11).replace(".",","),
            },
            {
                sno: 20,
                qty: rimspecial,
                rate: "4,00 €",
                desc: "Felge spezial",
                remarks: " " + getFormattedPrice(rimspecial * 4).replace(".",","),
            },
            {
                sno: 16,
                qty: attr8,
                rate: "16,50 €",
                desc: "Hebe-bühne",
                remarks: " " + getFormattedPrice(attr8 * 16.50).replace(".",","),
            },
            {
                sno: 17,
                qty: attr7,
                rate: getFormattedPrice(Number(interiorcleaning)).replace(".", ","),
                desc: "Innen Reinigung",
                remarks: " " + getFormattedPrice(attr7 * interiorcleaning).replace(".",","),
            },
            {
                sno: 18,
                qty: attr9,
                rate: getFormattedPrice(Number(cleanignwithacid)).replace(".", ","),
                desc: "Spezial Reinigung mit Säure",
                remarks: " " + getFormattedPrice(attr9 * cleanignwithacid).replace(".",","),
            },
            {
                sno: 21,
                qty: attr10_2,
                rate: getFormattedPrice(Number(attr10_3)).replace(".", ","),
                desc: attr10_1,
                remarks: " " + getFormattedPrice(attr10_2 * attr10_3).replace(".",","),
            },
            {
                sno: 22,
                qty: attr11_2,
                rate: getFormattedPrice(Number(attr11_3)).replace(".", ","),
                desc: attr11_1,
                remarks: " " + getFormattedPrice(attr11_2 * attr11_3).replace(".",","),
            },
            {
                sno: 23,
                qty: attr12_2,
                rate: getFormattedPrice(Number(attr12_3)).replace(".", ","),
                desc: attr12_1,
                remarks: " " + getFormattedPrice(attr12_2 * attr12_3).replace(".",","),
            },
            {
                sno: 24,
                qty: attr14_2,
                rate: getFormattedPrice(Number(attr14_3)).replace(".", ","),
                desc: attr14_1,
                remarks: " " + getFormattedPrice(attr14_2 * attr14_3).replace(".",","),
            },
            {
                sno: 25,
                qty: attr15_2,
                rate: getFormattedPrice(Number(attr15_3)).replace(".", ","),
                desc: attr15_1,
                remarks: " " + getFormattedPrice(attr15_2 * attr15_3).replace(".",","),
            },
            { 
            sno: 26,
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: "Summe Netto                              " + getFormattedPrice(pri).replace(".",",")
            },
            {
           sno: 27,
           qty:" ",
           rate: " ",
           desc: " ",
           remarks: "Rabatt ("+discount+"%)                                  " + getFormattedPrice(disc).replace(".",",")
             },
             { 
             sno: 28,
             qty:" ",
             rate: " ",
             desc: " ",
             remarks: "Summe Netto                              " + getFormattedPrice(newPri).replace(".",",")
             },
          {
            sno: 29,
            qty:" ",
            desc: " ",
            rate: " ",
            remarks: "MwSt. 19 %                                 " + getFormattedPrice(tax).replace(".",",")
        },
        {
          sno: 30,
          qty:" ",
          desc: " ",
          rate: " ",
          remarks: "Gesamtbetrag                              " + getFormattedPrice(finalTotal).replace(".",",")
      }
        ]
        const newItems = [{
              sno: " ",
              desc : " ",
              qty: " ",
              rate: " ",
              remarks: " "
      }
  ]
      let check = 1;
      let k = 0;
      //let kk;
    //   if(items[0].desc==0){
    //     console.log("It is empty....");
    //     k = 0;
    //     kk = 1;
    //   }
    //   else{
        
    //     console.log("It is not empty....");
    //     newItems[0] = items[0];
    //     k = 1;
    //     kk = 1;
    //   }
      
      for(let kk = 0; kk<items.length-3; kk++) {
       
            
          if(!items[kk].remarks.includes(" 0,00 €")){
              newItems[k] = items[kk];
              k++;
            
          }
      }
      
      const newItems2 = [{
        sno: " ",
        desc : " ",
        qty: " ",
        rate: " ",
        remarks: " "
}]
      console.log(newItems);
      newItems[newItems.length] = items[items.length-3];
      newItems[newItems.length] = items[items.length-2];
      newItems[newItems.length] = items[items.length-1];
    //   newItems2 = newItems;
      if(newItems[newItems.length-3].remarks == newItems[newItems.length-4].remarks){
        newItems[newItems.length-4].sno = " ";
        newItems[newItems.length-4].desc = " ";
        newItems[newItems.length-4].qty = " ";
        newItems[newItems.length-4].rate = " ";
        newItems[newItems.length-4].remarks = " ";
        check = 1;
      }
      else{
       
    const newItems3 = {
        sno: " ",
        desc : " ",
        qty: " ",
        rate: " ",
        remarks: " "
    };
    for(let i = 0; i<newItems.length-5; i++) {
        // if(newItems[i].sno == "20"){
        //     newItems2[i] = 
        //   }
        
        newItems2[i] = newItems[i];
    }
    console.log("length is = " + newItems2.length);
    console.log(newItems2);
    newItems2[newItems2.length] = newItems3;
    console.log("length2 is = " + newItems.length);
    if(newItems.length == 4){}
    else if (newItems.length > 4){newItems2[newItems2.length] = newItems[newItems.length-5];}
    newItems2[newItems2.length] = newItems[newItems.length-4];
    newItems2[newItems2.length] = newItems3;
    newItems2[newItems2.length] = newItems[newItems.length-3];
    newItems2[newItems2.length] = newItems[newItems.length-2];
    newItems2[newItems2.length] = newItems[newItems.length-1];
    if(newItems2[0].sno == " "){
        // console.log("IT is emptyyy")
        check = 1;
    }
    else{
        check = 2;
    }
    
    //newItems = newItems2;
      }
      
// newItems2[newItems2.length].desc = " ";
// newItems2[newItems2.length].qty = " ";
// newItems2[newItems2.length].rate = " ";
// newItems2[newItems2.length].remarks = " ";
      
      //setyear("2022");
      //let month = "10";
    //   let dayy = "01";
    //   //console.log("the date is  "+ year + Number(month-1) + dayy);
    //   let datee = new Date(year, Number(longMonth-1), dayy); // 2020-06-21
    //   setlongMonth(datee.toLocaleString('en-us', { month: 'long' }));
    let newAddress = categoryaddress1;
    if(newAddress == ""){
        newAddress = newAddress;
    }
    else{
        newAddress = "Leistungsempfänger:\n" + newAddress;
    }
    let finaldate = moment().date(dateReceipt).month(longMonthReceipt-1).year(yearReceipt).format("DD-MM-YYYY");
    const InvoiceData = {
        invoice_no: invoiceno,
        fullname: customer,
        address: address1,
        address2: address2, 
        phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße im " + longMonth + " " + year +".",
        //phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße im Juli" + ", " + year,
        email: "Für die ausgeführten Dienstleistungen berechnen wir wie folgt:",
        categoryaddress1: newAddress,
        categoryaddress2: categoryaddress2,
        categoryaddress3: categoryaddress3, 
        // trans_date: finaldate,
        trans_date: "02-10-2023",
        items: [
          {
              sno: "12",
              desc:"2",
              remarks:"3",
              qty: "2",
              rate: "2"
          },
      ]
    }
    // if(check == 1){
        
        console.log("check is = " + check);
    if(check == 2){
        InvoiceData.items = [...newItems2];
    }
    else{
        InvoiceData.items = [...newItems];
    }
    
    console.log(newItems2);

    
  return(
    
    <div className="container1">
    <h1> Welcome to Aqua Ariva</h1>
    <div className='container3'>
    <form id="my-node">
        
        <table id="customers">
        
                <tr>
                    <th>Rechnungs-Nr:</th>
                    {/* <th>{date}</th> */}
                    <th>-</th>
                    <th>-</th>
                    <th><input type="text" onChange={e => setinvoiceno(e.target.value)}/></th>
                </tr>
                <tr>
                    <td>Kunde</td>
                    <td><input autocomplete="user-name" id='user-name' type="text" onChange={e => setcustomer(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Straße, Nr</td>
                    <td><input autocomplete="customer-street" id='customer-street' type="text" onChange={e => setaddress1(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>PLZ, Ort</td>
                    <td><input autocomplete="customer-postalcode" id='customer-postalcode' type="text" onChange={e => setaddress2(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Jahr</td>
                    <td><input type="text" onChange={e => setyear(e.target.value)} placeholder={moment().format("YYYY")} /></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monat</td>
                    <td><input  type="text" onChange={e => setlongMonth(e.target.value)} placeholder={longMonth}/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Jahr erhalten</td>
                    <td><input type="text" onChange={e => setyearReceipt(e.target.value)} placeholder={moment().format("YYYY")} /></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monat erhalten</td>
                    <td><input  type="text" onChange={e => setlongMonthReceipt(e.target.value)} placeholder={moment().format("MM")}/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Eingangstag</td>
                    <td><input  type="text" onChange={e => setDateReceipt(e.target.value)} placeholder={moment().format("DD")}/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Zusätzliches Feld</td>
                    <td><input type="text" onChange={e => setcategoryaddress1(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setcategoryaddress2(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setcategoryaddress3(e.target.value)} /></td>
                </tr>
                
                <tr>
                    <th>Beschreibung</th>
                    <th>Menge</th>
                    <th>Einzelpreis</th>
                    <th>Gesamt...</th>
                </tr>
                
                <tr>
                <td>Transporter bis 3,5 t</td>
                <td><input type="text" onChange={e => setattr1(e.target.value)}/></td>
                    {/* <td><input type="checkbox" onChange={e => setupto3point5tons(e.target.value)} required/></td> */}
                    <td>32,00 €</td>
                    <td>{getFormattedPrice(attr1 * 32).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>LKW bis 7,5 t</td>
                <td><input type="text" onChange={e => setattr2(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => setupto7point5tons(e.target.value)} required/></td> */}
                    <td>45,00 €</td>
                    <td>{getFormattedPrice(attr2 * 45).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>LKW ab 7,5 t</td>
                <td><input type="text" onChange={e => setattr3(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => setfrom7point5tons(e.target.value)} required/></td> */}
                    <td>55,00 €</td>
                    <td>{getFormattedPrice(attr3 * 55).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                <td><input type="text" onChange={e => setattr4(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>38,00 €</td>
                    <td>{getFormattedPrice(attr4 * 38).replace(".",",")}</td>
                </tr>

                <tr>
                    <td>SZM solo mit chassis</td>
                <td><input type="text" onChange={e => setattr10(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>48,00 €</td>
                    <td>{getFormattedPrice(attr10 * 48).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Auflieger Solo</td>
                <td><input type="text" onChange={e => setattr11(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>48,00 €</td>
                    <td>{getFormattedPrice(attr11 * 48).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                <td><input type="text" onChange={e => setattr5(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrailertrain(e.target.value)} required/></td> */}
                    <td>75,00 €</td>
                    <td>{getFormattedPrice(attr5 * 75).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                <td><input type="text" onChange={e => setattr6(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrailer(e.target.value)} required/></td> */}
                    <td>69,00 €</td>
                    <td>{getFormattedPrice(attr6 * 69).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Plane Spezial bis 8 m</td>
                <td><input type="text" onChange={e => setattr12(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>35,00 €</td>
                    <td>{getFormattedPrice(attr12 * 35).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Plane Spezial ab 8 m</td>
                <td><input type="text" onChange={e => setattr13(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>49,00 €</td>
                    <td>{getFormattedPrice(attr13 * 49).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>W.B & Container Chassis 3 Achser</td>
                <td><input type="text" onChange={e => setattr19(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>60,00 €</td>
                    <td>{getFormattedPrice(attr19 * 60).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>W.B & Container Chassis 5 Achser</td>
                <td><input type="text" onChange={e => setattr15(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>95,00 €</td>
                    <td>{getFormattedPrice(attr15 * 95).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Tankfahrzeug bis 3 Achser</td>
                <td><input type="text" onChange={e => setattr20(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>69,00 €</td>
                    <td>{getFormattedPrice(attr20 * 69).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Tankfahrzeug 5 Achser</td>
                <td><input type="text" onChange={e => setattr14(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>100,00 €</td>
                    <td>{getFormattedPrice(attr14 * 100).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Kipper bis 3 Achser</td>
                <td><input type="text" onChange={e => setattr21(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>70,00 €</td>
                    <td>{getFormattedPrice(attr21 * 70).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Kipper 5 Achser</td>
                <td><input type="text" onChange={e => setattr18(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>85,00 €</td>
                    <td>{getFormattedPrice(attr18 * 85).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 3 Achser</td>
                <td><input type="text" onChange={e => setattr17(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>69,00 €</td>
                    <td>{getFormattedPrice(attr17 * 69).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer bis 3 Achser mit Säure</td>
                <td><input type="text" onChange={e => setattr22(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>40,00 €</td>
                    <td>{getFormattedPrice(attr22 * 40).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 5 Achser</td>
                <td><input type="text" onChange={e => setattr16(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>99,00 €</td>
                    <td>{getFormattedPrice(attr16 * 99).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 5 Achser mit Säure</td>
                <td><input type="text" onChange={e => setattr23(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>57,00 €</td>
                    <td>{getFormattedPrice(attr23 * 57).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Müllfahrzeuge bis 3 Achser</td>
                <td><input type="text" onChange={e => setattr24(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>127,00 €</td>
                    <td>{getFormattedPrice(attr24 * 127).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Strake zVerschmutzung bis 3 Achser</td>
                <td><input type="text" onChange={e => setattr25(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>25,00 €</td>
                    <td>{getFormattedPrice(attr25 * 25).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Starke Verschmutzung 5 Achser</td>
                <td><input type="text" onChange={e => setattr26(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>50,00 €</td>
                    <td>{getFormattedPrice(attr26 * 50).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Innen-Reinigung Auflieger-Ladefläche mit Seitenwänden(ohne Dach)</td>
                <td><input type="text" onChange={e => setattr27(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>80,00 €</td>
                    <td>{getFormattedPrice(attr27 * 80).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Tank spezial</td>
                    <td><input type="text" onChange={e => settankspecial(e.target.value)} /></td>
                    <td>11,00 €</td>
                    <td>{getFormattedPrice(tankspecial * 11).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Felge spezial</td>
                    <td><input type="text" onChange={e => setrimspecial(e.target.value)} /></td>
                    <td>4,00 €</td>
                    <td>{getFormattedPrice(rimspecial * 4).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                <td><input type="text" onChange={e => setattr8(e.target.value)} /></td>
                    {/* <td><input type="text" onChange={e => setliftingplatform(e.target.value)} required/></td> */}
                    <td>16,50 €</td>
                    <td>{getFormattedPrice(attr8 * 16.50).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Innen Reinigung</td>
                <td><input type="text" onChange={e => setattr7(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setinteriorcleaning(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr7 * interiorcleaning).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Spezial Reinigung mit Säure</td>
                <td><input type="text" onChange={e => setattr9(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setcleanignwithacid(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr9 * cleanignwithacid).replace(".",",")}</td>
                </tr>
                <tr>
                    <td><input type="text" onChange={e => setattr10_1(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr10_2(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr10_3(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr10_2 * attr10_3).replace(".",",")}</td>
                </tr>
                <tr>
                    <td><input type="text" onChange={e => setattr11_1(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr11_2(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr11_3(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr11_2 * attr11_3).replace(".",",")}</td>
                </tr>
                <tr>
                    <td><input type="text" onChange={e => setattr12_1(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr12_2(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr12_3(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr12_2 * attr12_3).replace(".",",")}</td>
                </tr>
                <tr>
                    <td><input type="text" onChange={e => setattr14_1(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr14_2(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr14_3(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr14_2 * attr14_3).replace(".",",")}</td>
                </tr>
                <tr>
                    <td><input type="text" onChange={e => setattr15_1(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr15_2(e.target.value)} /></td>
                    <td><input type="text" onChange={e => setattr15_3(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr15_2 * attr15_3).replace(".",",")}</td>
                </tr>
                
                <tr>
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>Summe Netto </td>
                    <td>{ getFormattedPrice(pri).replace(".",",") }</td>
                </tr>
                <tr>
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td>Rabatt</td>
                    <td><input type="text" onChange={e => setdiscount(e.target.value)} /></td>
                    <td>{ getFormattedPrice(disc).replace(".",",") }</td>
                </tr>
                <tr>
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>Summe Netto </td>
                    <td>{ getFormattedPrice(newPri).replace(".",",") }</td>
                </tr>
                <tr>
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>MwSt. 19 %</td>
                    <td>{ getFormattedPrice(tax).replace(".",",") }</td>
                </tr>
                <tr>
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>Gesamtbetrag</td>
                    <td>{getFormattedPrice(finalTotal).replace(".",",") }</td>
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
  );
}