import React, {useState, useEffect} from 'react';
import './create.css';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './generateInvoice/Invoice';
import moment from "moment";

// date_create: moment().format("DD-MM-YYYY hh:mm:ss")
// import InvoiceData from './generateInvoice/jsonData/InvoiceData';


const getFormattedPrice = (price) => `${price.toFixed(2)} €`;

export default function Dashboard() {
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
    const [attr10_1, setattr10_1] = useState("");
    const [attr10_2, setattr10_2] = useState(0);
    const [attr10_3, setattr10_3] = useState(0);
    const [attr11_1, setattr11_1] = useState("");
    const [attr11_2, setattr11_2] = useState(0);
    const [attr11_3, setattr11_3] = useState(0);
    const [attr12_1, setattr12_1] = useState("");
    const [attr12_2, setattr12_2] = useState(0);
    const [attr12_3, setattr12_3] = useState(0);
    const [discount, setdiscount] = useState(0);
    const [interiorcleaning, setinteriorcleaning] = useState(0);
    const [year, setyear] = useState("");
    const [longMonth, setlongMonth] = useState("");
    // const [liftingplatform, setliftingplatform] = useState("");
    const [cleanignwithacid, setcleanignwithacid] = useState(0);
    const [tankspecial, settankspecial] = useState(0);
    const [rimspecial, setrimspecial] = useState(0);
    const [customer, setcustomer] = useState("");
    // const [address, setaddress] = useState("");
    const [address1, setaddress1] = useState("");
    const [address2, setaddress2] = useState("");
    const [prices, setPrices]=useState([32,40,50,48,75,60,16.5]);
    const [checkedState, setCheckedState] = useState(
      new Array(prices.length).fill(false)
    );
  
    const [total, setTotal] = useState(0);
    const fileName = customer + ".pdf";
   
  
      let pri =  (attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
      + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
      + (attr11_2 * attr11_3) + (attr12_2 * attr12_3) + (attr10 * 48) + (attr11 * 42) + (attr12 * 35) 
      + (attr13 * 49) + (attr14 * 95) + (attr15 * 95) + (attr16 * 95) + (attr17 * 60) + (attr18 * 85);

      let disc = (pri/100) * discount;

      pri = pri - disc;

      let tax = (pri/100) * 19;

    //   let tax = (((attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
    //   + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
    //   + (attr11_2 * attr11_3) + (attr12_2 * attr12_3) + (attr10 * 48) + (attr11 * 42) + (attr12 * 35) 
    //   + (attr13 * 49) + (attr14 * 95) + (attr15 * 95) + (attr16 * 95) + (attr17 * 60) + (attr18 * 85))/100)*19;


      let finalTotal = pri + tax;
   
      var date = (((moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss')).replaceAll(" ", "")).replaceAll(":","")).replaceAll("-","");
      const items = [
            {
                sno: 2,
                qty: attr1,
                rate: "32,00 €",
                desc: "bis 3,5 t",
                remarks: getFormattedPrice(attr1 * 32).replace(".",","),
            },
            {
                sno: 3,
                qty: attr2,
                rate: "40,00 €",
                desc: "3,5 t bis 7,5 t",
                remarks: getFormattedPrice(attr2 * 40).replace(".",","),
            },
            {
                sno: 4,
                qty: attr3,
                rate: "50,00 €",
                desc: "ab 7,5 t",
                remarks: getFormattedPrice(attr3 * 50).replace(".",","),
            },
            {
                sno: 5,
                qty: attr4,
                rate: "48,00 €",
                desc: "SZM solo",
                remarks: getFormattedPrice(attr4 * 48).replace(".",","),
            },

            {
                sno: 5,
                qty: attr10,
                rate: "48,00 €",
                desc: "SZM solo mit chassis",
                remarks: getFormattedPrice(attr10 * 48).replace(".",","),
            },
            {
                sno: 5,
                qty: attr11,
                rate: "42,00 €",
                desc: "Auflieger Solo",
                remarks: getFormattedPrice(attr11 * 42).replace(".",","),
            },
            {
                sno: 5,
                qty: attr12,
                rate: "35,00 €",
                desc: "Plane Spezial bis 8 m",
                remarks: getFormattedPrice(attr12 * 35).replace(".",","),
            },
            {
                sno: 5,
                qty: attr13,
                rate: "49,00 €",
                desc: "Plane Spezial ab 8 m",
                remarks: getFormattedPrice(attr13 * 49).replace(".",","),
            },
            {
                sno: 5,
                qty: attr14,
                rate: "95,00 €",
                desc: "Tankfahrzeug 5 Achser",
                remarks: getFormattedPrice(attr14 * 95).replace(".",","),
            },
            {
                sno: 5,
                qty: attr15,
                rate: "95,00 €",
                desc: "W.B & Container Chassis 5 Achser",
                remarks: getFormattedPrice(attr15 * 95).replace(".",","),
            },
            {
                sno: 5,
                qty: attr16,
                rate: "95,00 €",
                desc: "Abroller & Absetzer 5 Achser",
                remarks: getFormattedPrice(attr16 * 95).replace(".",","),
            },
            {
                sno: 5,
                qty: attr17,
                rate: "60,00 €",
                desc: "Abroller & Absetzer 3 Achser",
                remarks: getFormattedPrice(attr17 * 60).replace(".",","),
            },
            {
                sno: 5,
                qty: attr18,
                rate: "85,00 €",
                desc: "Kipper 5 Achser",
                remarks: getFormattedPrice(attr18 * 85).replace(".",","),
            },
            {
                sno: 6,
                qty: attr5,
                rate: "75,00 €",
                desc: "SZM+Hänger-zug",
                remarks: getFormattedPrice(attr5 * 75).replace(".",","),
            },
            {
                sno: 7,
                qty: attr6,
                rate: "60,00 €",
                desc: "SZM+Auflieger",
                remarks: getFormattedPrice(attr6 * 60).replace(".",","),
            },
            {
                sno: 9,
                qty: attr8,
                rate: "16,50 €",
                desc: "Hebe-bühne",
                remarks: getFormattedPrice(attr8 * 16.50).replace(".",","),
            },
            {
                sno: 8,
                qty: attr7,
                rate: getFormattedPrice(Number(interiorcleaning)).replace(".", ","),
                desc: "Innen Reinigung",
                remarks: getFormattedPrice(attr7 * interiorcleaning).replace(".",","),
            },
            {
                sno: 10,
                qty: attr9,
                rate: getFormattedPrice(Number(cleanignwithacid)).replace(".", ","),
                desc: "Spezial Reinigung mit Säure",
                remarks: getFormattedPrice(attr9 * cleanignwithacid).replace(".",","),
            },
            {
                sno: 11,
                qty: tankspecial,
                rate: "11,00 €",
                desc: "Tank spezial",
                remarks: getFormattedPrice(tankspecial * 11).replace(".",","),
            },
            {
                sno: 12,
                qty: rimspecial,
                rate: "4,00 €",
                desc: "Felge spezial",
                remarks: getFormattedPrice(rimspecial * 4).replace(".",","),
            },
            {
                sno: 13,
                qty: attr10_2,
                rate: getFormattedPrice(Number(attr10_3)).replace(".", ","),
                desc: attr10_1,
                remarks: getFormattedPrice(attr10_2 * attr10_3).replace(".",","),
            },
            {
                sno: 14,
                qty: attr11_2,
                rate: getFormattedPrice(Number(attr11_3)).replace(".", ","),
                desc: attr11_1,
                remarks: getFormattedPrice(attr11_2 * attr11_3).replace(".",","),
            },
            {
                sno: 15,
                qty: attr12_2,
                rate: getFormattedPrice(Number(attr12_3)).replace(".", ","),
                desc: attr12_1,
                remarks: getFormattedPrice(attr12_2 * attr12_3).replace(".",","),
            },
            {
           sno: 19,
           qty:" ",
           rate: " ",
           desc: " ",
           remarks: "abzüglich Kunden-Rabatt("+discount+"%)     " + getFormattedPrice(disc).replace(".",",")
             },
            { 
            sno: 15,
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: "Summe Netto                              " + getFormattedPrice(pri).replace(".",",")
            },
          {
            sno: 16,
            qty:" ",
            desc: " ",
            rate: " ",
            remarks: "MwSt. 19 %                                 " + getFormattedPrice(tax).replace(".",",")
        },
        {
          sno: 17,
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
      
      let k = 0;
      for(let i = 0; i<items.length-3; i++) {
          if(items[i].remarks !== "0,00 €"){
              newItems[k] = items[i];
              k++;
            
          }
      }
      console.log(newItems);
      newItems[newItems.length] = items[items.length-3];
      newItems[newItems.length] = items[items.length-2];
      newItems[newItems.length] = items[items.length-1];
      //setyear("2022");
      //let month = "10";
    //   let dayy = "01";
    //   //console.log("the date is  "+ year + Number(month-1) + dayy);
    //   let datee = new Date(year, Number(longMonth-1), dayy); // 2020-06-21
    //   setlongMonth(datee.toLocaleString('en-us', { month: 'long' }));
    const InvoiceData = {
         invoice_no: date,
        fullname: customer,
        address: address1,
        address2: address2, 
        phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße " + longMonth + ", " + year,
        email: "Für die ausgeführten Dienstleistungen berechnen wir wie folgt:",
        trans_date: moment().format("DD-MM-YYYY"),
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
    InvoiceData.items = [...newItems];

    
  return(
    
    <div className="container1">
    <h1> Welcome to Aqua Ariva</h1>
    <div className='container3'>
    <form id="my-node">
        
        <table id="customers">
                
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>Kunde</td>
                    <td><input type="text" onChange={e => setcustomer(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Straße, Nr</td>
                    <td><input type="text" onChange={e => setaddress1(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>PLZ, Ort</td>
                    <td><input type="text" onChange={e => setaddress2(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Jahr</td>
                    <td><input type="text" onChange={e => setyear(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monat</td>
                    <td><input type="text" onChange={e => setlongMonth(e.target.value)} required/></td>
                    <td></td>
                    <td></td>
                </tr>
                
                <tr>
                    <th>Beschreibung</th>
                    <th>Menge</th>
                    <th>Einzelpreis</th>
                    <th>Gesamt</th>
                </tr>
                <tr>
                <td>bis 3,5 t</td>
                <td><input type="text" onChange={e => setattr1(e.target.value)} required/></td>
                    {/* <td><input type="checkbox" onChange={e => setupto3point5tons(e.target.value)} required/></td> */}
                    <td>32,00 €</td>
                    <td>{getFormattedPrice(attr1 * 32).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>3,5 t bis 7,5 t</td>
                <td><input type="text" onChange={e => setattr2(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => setupto7point5tons(e.target.value)} required/></td> */}
                    <td>40,00 €</td>
                    <td>{getFormattedPrice(attr2 * 40).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>ab 7,5 t</td>
                <td><input type="text" onChange={e => setattr3(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => setfrom7point5tons(e.target.value)} required/></td> */}
                    <td>50,00 €</td>
                    <td>{getFormattedPrice(attr3 * 50).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                <td><input type="text" onChange={e => setattr4(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>48,00 €</td>
                    <td>{getFormattedPrice(attr4 * 48).replace(".",",")}</td>
                </tr>

                <tr>
                    <td>SZM solo mit chassis</td>
                <td><input type="text" onChange={e => setattr10(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>48,00 €</td>
                    <td>{getFormattedPrice(attr10 * 48).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Auflieger Solo</td>
                <td><input type="text" onChange={e => setattr11(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>42,00 €</td>
                    <td>{getFormattedPrice(attr11 * 42).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Plane Spezial bis 8 m</td>
                <td><input type="text" onChange={e => setattr12(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>35,00 €</td>
                    <td>{getFormattedPrice(attr12 * 35).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Plane Spezial ab 8 m</td>
                <td><input type="text" onChange={e => setattr13(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>49,00 €</td>
                    <td>{getFormattedPrice(attr13 * 49).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Tankfahrzeug 5 Achser</td>
                <td><input type="text" onChange={e => setattr14(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>95,00 €</td>
                    <td>{getFormattedPrice(attr14 * 95).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>W.B & Container Chassis 5 Achser</td>
                <td><input type="text" onChange={e => setattr15(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>95,00 €</td>
                    <td>{getFormattedPrice(attr15 * 95).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 5 Achser</td>
                <td><input type="text" onChange={e => setattr16(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>95,00 €</td>
                    <td>{getFormattedPrice(attr16 * 95).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Abroller & Absetzer 3 Achser</td>
                <td><input type="text" onChange={e => setattr17(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>60,00 €</td>
                    <td>{getFormattedPrice(attr17 * 60).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Kipper 5 Achser</td>
                <td><input type="text" onChange={e => setattr18(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>85,00 €</td>
                    <td>{getFormattedPrice(attr18 * 85).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                <td><input type="text" onChange={e => setattr5(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrailertrain(e.target.value)} required/></td> */}
                    <td>75,00 €</td>
                    <td>{getFormattedPrice(attr5 * 75).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                <td><input type="text" onChange={e => setattr6(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrailer(e.target.value)} required/></td> */}
                    <td>60,00 €</td>
                    <td>{getFormattedPrice(attr6 * 60).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                <td><input type="text" onChange={e => setattr8(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => setliftingplatform(e.target.value)} required/></td> */}
                    <td>16,50 €</td>
                    <td>{getFormattedPrice(attr8 * 16.50).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Innen Reinigung</td>
                <td><input type="text" onChange={e => setattr7(e.target.value)} required/></td>
                    <td><input type="text" onChange={e => setinteriorcleaning(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr7 * interiorcleaning).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Spezial Reinigung mit Säure</td>
                <td><input type="text" onChange={e => setattr9(e.target.value)} required/></td>
                    <td><input type="text" onChange={e => setcleanignwithacid(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr9 * cleanignwithacid).replace(".",",")}</td>
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
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td>abzüglich Kunden-Rabatt</td>
                    <td><input type="text" onChange={e => setdiscount(e.target.value)} /></td>
                    <td>{ getFormattedPrice(disc).replace(".",",") }</td>
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