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
    const [attr10_1, setattr10_1] = useState("");
    const [attr10_2, setattr10_2] = useState(0);
    const [attr10_3, setattr10_3] = useState(0);
    const [attr11_1, setattr11_1] = useState("");
    const [attr11_2, setattr11_2] = useState(0);
    const [attr11_3, setattr11_3] = useState(0);
    const [attr12_1, setattr12_1] = useState("");
    const [attr12_2, setattr12_2] = useState(0);
    const [attr12_3, setattr12_3] = useState(0);
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
    const fileName = customer;
   
  
      let pri =  (attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
      + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
      + (attr11_2 * attr11_3) + (attr12_2 * attr12_3);

      let tax = (((attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
      + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
      + (attr11_2 * attr11_3) + (attr12_2 * attr12_3))/100)*19;

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
                desc: "Innen-reini-gung",
                remarks: getFormattedPrice(attr7 * interiorcleaning).replace(".",","),
            },
            {
                sno: 10,
                qty: attr9,
                rate: getFormattedPrice(Number(cleanignwithacid)).replace(".", ","),
                desc: "Spezial-reini-gung mit Säure",
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
          if(items[i].remarks !== "0,00 €" ){
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
                    <td>32,00</td>
                    <td>{getFormattedPrice(attr1 * 32).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>3,5 t bis 7,5 t</td>
                <td><input type="text" onChange={e => setattr2(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => setupto7point5tons(e.target.value)} required/></td> */}
                    <td>40,00</td>
                    <td>{getFormattedPrice(attr2 * 40).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>ab 7,5 t</td>
                <td><input type="text" onChange={e => setattr3(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => setfrom7point5tons(e.target.value)} required/></td> */}
                    <td>50,00</td>
                    <td>{getFormattedPrice(attr3 * 50).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                <td><input type="text" onChange={e => setattr4(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td>48,00</td>
                    <td>{getFormattedPrice(attr4 * 48).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                <td><input type="text" onChange={e => setattr5(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrailertrain(e.target.value)} required/></td> */}
                    <td>75,00</td>
                    <td>{getFormattedPrice(attr5 * 75).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                <td><input type="text" onChange={e => setattr6(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => settrailer(e.target.value)} required/></td> */}
                    <td>60,00</td>
                    <td>{getFormattedPrice(attr6 * 60).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                <td><input type="text" onChange={e => setattr8(e.target.value)} required/></td>
                    {/* <td><input type="text" onChange={e => setliftingplatform(e.target.value)} required/></td> */}
                    <td>16,50</td>
                    <td>{getFormattedPrice(attr8 * 16.50).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Innen-reini-gung</td>
                <td><input type="text" onChange={e => setattr7(e.target.value)} required/></td>
                    <td><input type="text" onChange={e => setinteriorcleaning(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr7 * interiorcleaning).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Spezial-reini-gung mit Säure</td>
                <td><input type="text" onChange={e => setattr9(e.target.value)} required/></td>
                    <td><input type="text" onChange={e => setcleanignwithacid(e.target.value)} /></td>
                    <td>{getFormattedPrice(attr9 * cleanignwithacid).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Tank spezial</td>
                    <td><input type="text" onChange={e => settankspecial(e.target.value)} /></td>
                    <td></td>
                    <td>{getFormattedPrice(tankspecial * 11).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Felge spezial</td>
                    <td><input type="text" onChange={e => setrimspecial(e.target.value)} /></td>
                    <td></td>
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
                    <td></td>
                    <td>Summe Netto </td>
                    <td>{ getFormattedPrice((attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
                    + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
                    + (attr11_2 * attr11_3) + (attr12_2 * attr12_3)).replace(".",",") }</td>
                </tr>
                <tr>
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>MwSt. 19 %</td>
                    <td>{ getFormattedPrice((((attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
                    + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
                    + (attr11_2 * attr11_3) + (attr12_2 * attr12_3))/100)*19).replace(".",",") }</td>
                </tr>
                <tr>
                    <td></td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>Gesamtbetrag</td>
                    <td>{getFormattedPrice(((((attr1 * 32) + (attr2 * 40) + (attr3 * 50) + (attr4 * 48) + (attr5 * 75) + (attr6 * 60) + (attr7 * interiorcleaning)
                    + (attr8 * 16.50) + (attr9 * cleanignwithacid) + (tankspecial * 11) + (rimspecial * 4) + (attr10_2 * attr10_3)
                    + (attr11_2 * attr11_3) + (attr12_2 * attr12_3))/100)*19)+(total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1))).replace(".",",") }</td>
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