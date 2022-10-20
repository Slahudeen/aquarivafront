import React, {useState, useEffect} from 'react';
import './create.css';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './generateInvoice/Invoice';
import moment from "moment";
import logo from "./assets/logo.png";



export default function Dashboard() {
   
    

    const [upto3point5tons, setupto3point5tons] = useState(0);
    const [upto7point5tons, setupto7point5tons] = useState(0);
    const [from7point5tons, setfrom7point5tons] = useState(0);
    const [trucksolo, settrucksolo] = useState(0);
    const [trailertrain, settrailertrain] = useState(0);
    const [trailer, settrailer] = useState(0);
    const [interiorcleaning, setinteriorcleaning] = useState(0);
    const [interiorcleaningTotal, setinteriorcleaningTotal] = useState(0);
    const [liftingplatform, setliftingplatform] = useState(0);
    const [cleanignwithacid, setcleanignwithacid] = useState(0);
    const [cleanignwithacidTotal, setcleanignwithacidTotal] = useState(0);
    const [tankspecial, settankspecial] = useState(0);
    const [rimspecial, setrimspecial] = useState(0);
    const [totalbeforetax, settotalbeforetax] = useState(0);
    const [totaltax, settotaltax] = useState(0);
    const [grandtotal, setgrandtotal] = useState(0);
    const [prices, setPrices]=useState([32,40,50,48,75,60,16.5]);
    const getFormattedPrice = (price) => `${price.toFixed(2)} €`;
    const [year, setyear] = useState("");
    const [longMonth, setlongMonth] = useState("");
    // let year = "";
    // let longMonth = "";

    const [noRecord, setNoRecord] = useState();
    const [records, setRecords] = useState();
    const [searchTextCompany, setSearchTextCompany] = useState("");
    const [searchTextFrom, setSearchTextFrom] = useState("");
    const [searchTextTo, setSearchTextTo] = useState("");
    const [address, setaddress] = useState(" ");
    const fileName = searchTextCompany;
    const [token, setToken] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("token"));
    const initialValue = JSON.stringify(saved);
    return initialValue || "";
  });
let newToken = token.split(':"')[1];
newToken = newToken.split('"')[0];
    const handleSearchSubmit = async e => {
        e.preventDefault();
    
      if(searchTextFrom!==""){
      setyear(searchTextFrom.split("-")[0]);
      let month = (searchTextFrom.split("-")[1]).split("-")[0];
      let dayy = "01";
      //console.log("the date is  "+ year + Number(month-1) + dayy);
      let datee = new Date(year, Number(month-1), dayy); // 2020-06-21
      setlongMonth(datee.toLocaleString('en-us', { month: 'long' })); }
        
        const getCustomer = await fetch("https://rattle-innate-roar.glitch.me/customer/filter/" + searchTextFrom + "/" + searchTextTo + "/" + searchTextCompany, {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     "Authorization": "Bearer " + newToken
                })
            }).then(async response => await response.json())
                .then(data => {
                    
                    console.log(data + "," +JSON.stringify(data) )
                    if(JSON.stringify(data) === "[]"){
                        setNoRecord("No record found 😢");
                        setTimeout(function(){ setNoRecord(" "); },2000);
                    }
                    if(JSON.stringify(data) !== "[]"){
                        setRecords(data);
                        setNoRecord("Record has been found 😊");
                        setTimeout(function(){ setNoRecord(" "); },2000);
                        // console.log(data.length);
                        setaddress(data[0].address);
                        let counter = [0,0,0,0,0,0,0,0,0,0,0];
                        //[3, 1, 3, 1, 9, 6, 1, 1, 1, 1, 1]
                        //[0, 1, 3, 1, 9, 6, 1, 1, 1, 1, 1]
                        //[4, 1, 3, 1, 9, 6, 1, 2, 1, 2, 1]
                        //[3, 1, 3, 1, 9, 6, 1, 2, 1, 2, 1]
                        
                        let cleaningAmount = [];
                        let cleaningindex = 0;
                        let interiorCleaningAmount = [];
                        let interiorCleaningindex = 0;
                        for(let i =0;i<data.length;i++){
                            
                            if(data[i].cleanignwithacid !== ""){
                                cleaningAmount[cleaningindex] = data[i].cleanignwithacid;
                                cleaningindex++;
                                counter[0]++;
                            }
                            if(data[i].from7point5tons === "true"){
                                counter[1]++;
                            }
                            if(data[i].interiorcleaning !== ""){
                                interiorCleaningAmount[interiorCleaningindex] = data[i].interiorcleaning;
                                interiorCleaningindex++;
                                counter[2]++;
                            }
                            if(data[i].liftingplatform === "true"){
                                counter[3]++;
                            }
                            if(data[i].rimspecial !== ""){
                                counter[4]= Number(data[i].rimspecial) + counter[4];
                            }
                            if(data[i].tankspecial !== ""){
                                counter[5]= Number(data[i].tankspecial) + counter[5];
                            }
                            if(data[i].trailer === "true"){
                                counter[6]++;
                            }
                            if(data[i].trailertrain === "true"){
                                counter[7]++;
                            }
                            if(data[i].trucksolo === "true"){
                                counter[8]++;
                            }
                            if(data[i].upto3point5tons === "true"){
                                counter[9]++;
                            }
                            if(data[i].upto7point5tons === "true"){
                                counter[10]++;
                            }
                        }

                        // console.log(counter);

                        setupto3point5tons(counter[9]);
                        setupto7point5tons(counter[10]);
                        setfrom7point5tons(counter[1]);
                        settrucksolo(counter[8]);
                        settrailertrain(counter[7]);
                        settrailer(counter[6]);
                        setinteriorcleaning(counter[2]);
                        setliftingplatform(counter[3]);
                        setcleanignwithacid(counter[0]);
                        settankspecial(counter[5]);
                        setrimspecial(counter[4]);
                        //setinteriorcleaningTotal(counter[2]);
                        //setcleanignwithacidTotal(counter[0]);
                        let sum = 0;
                        for( let i =0;i<cleaningAmount.length;i++){
                            sum = Number(cleaningAmount[i]) + sum;
                        }
                        console.log(sum);
                        console.log(cleaningAmount);
                        setcleanignwithacidTotal(sum);
                        // console.log(cleanignwithacidTotal);
                        
                        sum = 0;
                        for( let i =0;i<interiorCleaningAmount.length;i++){
                            sum = Number(interiorCleaningAmount[i]) + sum;
                        }
                        console.log(sum);
                        console.log(interiorCleaningAmount);
                        setinteriorcleaningTotal(sum);
                        // console.log(interiorcleaningTotal);
                    }
                  
                })
            
         }
         const items= [
            {
              sno: 2,
                  desc: "Wäsche bis 3,5 t",
                  qty: upto3point5tons,
                  rate: getFormattedPrice(prices[0]).replace(".",","),
                  remarks: getFormattedPrice(Number(upto3point5tons * prices[0])).replace(".",","),
          },
          
              {
                  sno: 3,
                  qty: upto7point5tons,
                  desc: "Wäsche 3,5 t bis 7,5 t",
                  rate: getFormattedPrice(prices[1]).replace(".",","),
                  remarks: getFormattedPrice(Number(upto7point5tons * prices[1])).replace(".",","),
              },
              {
                  sno: 4,
                  desc: "Wäsche ab 7,5 t",
                  qty: from7point5tons,
                  rate: getFormattedPrice(prices[2]).replace(".",","),
                  remarks: getFormattedPrice(Number(from7point5tons * prices[2])).replace(".",","),
              },
              {
                  sno: 5,
                  desc: "Wäsche SZM solo",
                  qty: trucksolo,
                  rate: getFormattedPrice(prices[3]).replace(".",","),
                  remarks: getFormattedPrice(Number(trucksolo * prices[3])).replace(".",","),
              },
              {
                  sno: 6,
                  desc: "Wäsche SZM+Hänger-zug",
                  qty: trailertrain,
                  rate: getFormattedPrice(prices[4]).replace(".",","),
                  remarks: getFormattedPrice(Number(trailertrain * prices[4])).replace(".",","),
              },
              {
                  sno: 7,
                  desc: "Wäsche SZM+Auflieger",
                  qty: trailer,
                  rate: getFormattedPrice(prices[5]).replace(".",","),
                  remarks: getFormattedPrice(Number(trailer * prices[5])).replace(".",","),
              },
              {
                  sno: 8,
                  desc: "Wäsche Innen-reini-gung",
                  qty: interiorcleaning,
                  rate: getFormattedPrice(interiorcleaningTotal).replace(".",","),
                  remarks: getFormattedPrice(Number(interiorcleaning * interiorcleaningTotal)).replace(".",","),
              },
              {
                  sno: 9,
                  desc: "Wäsche Hebe-bühne",
                  qty: liftingplatform,
                  rate: getFormattedPrice(prices[6]).replace(".",","),
                  remarks: getFormattedPrice(Number(liftingplatform * prices[6])).replace(".",","),
              },
              {
                  sno: 10,
                  desc: "Wäsche Spezial-reini-gung mit Säure",
                  qty: cleanignwithacid,
                  rate: getFormattedPrice(cleanignwithacidTotal).replace(".",","),
                  remarks: getFormattedPrice(Number(cleanignwithacid * cleanignwithacidTotal)).replace(".",","),
              },
              {
                  sno: 11,
                  desc: "Wäsche Tank spezial",
                  qty: tankspecial,
                  rate: getFormattedPrice(11).replace(".",","),
                  remarks: getFormattedPrice(Number(tankspecial * 11)).replace(".",","),
              },
              {
                  sno: 12,
                  desc: "Wäsche Felge spezial",
                  rate: getFormattedPrice(4).replace(".",","),
                  qty: rimspecial,
                  remarks: getFormattedPrice(Number(rimspecial * 4)).replace(".",","),
              },
              {
                  sno: 15,
                  desc: " ",
                  qty:" ",
                  rate: " ",
                  remarks: "Summe Netto                           " + (getFormattedPrice((upto3point5tons * prices[0])
                  + (upto7point5tons * prices[1]) 
                  + (from7point5tons * prices[2])
                  + (trucksolo * prices[3]) 
                  + (trailertrain * prices[4])
                  + (trailer * prices[5])
                  + (interiorcleaning * interiorcleaningTotal)
                  + (liftingplatform * prices[6])
                  + (cleanignwithacid * cleanignwithacidTotal)
                  + (tankspecial * 11)
                  + (tankspecial * 4))).replace(".",",")
              },
              {
                sno: 16,
                desc: " ",
                qty:" ",
                rate: " ",
                remarks: "MwSt. 19 %                              " + (getFormattedPrice((((upto3point5tons * prices[0])
                + (upto7point5tons * prices[1]) 
                + (from7point5tons * prices[2])
                + (trucksolo * prices[3]) 
                + (trailertrain * prices[4])
                + (trailer * prices[5])
                + (interiorcleaning * interiorcleaningTotal)
                + (liftingplatform * prices[6])
                + (cleanignwithacid * cleanignwithacidTotal)
                + (tankspecial * 11)
                + (tankspecial * 4))/100)*19)).replace(".",",")
            },
            {
              sno: 17,
              desc: " ",
              qty:" ",
              rate: " ",
              remarks: "Gesamtbetrag                          " + (getFormattedPrice(((((upto3point5tons * prices[0])
              + (upto7point5tons * prices[1]) 
              + (from7point5tons * prices[2])
              + (trucksolo * prices[3]) 
              + (trailertrain * prices[4])
              + (trailer * prices[5])
              + (interiorcleaning * interiorcleaningTotal)
              + (liftingplatform * prices[6])
              + (cleanignwithacid * cleanignwithacidTotal)
              + (tankspecial * 11)
              + (tankspecial * 4))/100)*19) + ((upto3point5tons * prices[0])
              + (upto7point5tons * prices[1]) 
              + (from7point5tons * prices[2])
              + (trucksolo * prices[3]) 
              + (trailertrain * prices[4])
              + (trailer * prices[5])
              + (interiorcleaning * interiorcleaningTotal)
              + (liftingplatform * prices[6])
              + (cleanignwithacid * cleanignwithacidTotal)
              + (tankspecial * 11)
              + (tankspecial * 4)))).replace(".",",")
          }
          ]

        const newItems = {
            item:[{
                sno: " ",
                desc : " ",
                qty: " ",
                rate: " ",
                remarks: " "
        }
    ]
        }
        let k = 0;
        for(let i = 0; i<items.length-3; i++) {
            if(items[i].qty != "0"){
                newItems.item[k] = items[i];
                k++;

            }
        }
        console.log(newItems);
        newItems.item[newItems.item.length] = items[items.length-3];
        newItems.item[newItems.item.length] = items[items.length-2];
        newItems.item[newItems.item.length] = items[items.length-1];
    

        var date = (((moment()
        .utcOffset('+05:30')
        .format('YYYY-MM-DD hh:mm:ss')).replaceAll(" ", "")).replaceAll(":","")).replaceAll("-","");

      console.log(date);
    //   let year = "";
    //   let longMonth = "";
    //   if(searchTextFrom!==""){
    //   year = searchTextFrom.split("-")[0];
    //   let month = (searchTextFrom.split("-")[1]).split("-")[0];
    //   let day = ((searchTextFrom.split("-")[1]).split("-")[1]);
    //   let datee = new Date(year, month, day); // 2020-06-21
    //   longMonth = datee.toLocaleString('en-us', { month: 'long' }); }
        // let address1 = address.split("$$$$")[0];
        // let address2 = address.split("$$$$")[1];
         const InvoiceData = {
            fullname: searchTextCompany,
            phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße " + longMonth + ", " + year,
            email: "Für die ausgeführten Dienstleistungen berechnen wir wie folgt:",
            
            invoice_no: date,
            address: address.split("$$$$")[0],
            address2: address.split("$$$$")[1],
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
        // for ( let j = 0; j<newItems.length; j++){
        //     InvoiceData.items[j].sno = newItems.item[j].sno;
        //     InvoiceData.items[j].desc = newItems.item[j].desc;
        //     InvoiceData.items[j].remarks = newItems.item[j].remarks;
        // }
        InvoiceData.items = [...newItems.item];
        console.log("this is pdf data" + InvoiceData.items);


  return(
    
    <div className="container1">
    <form onSubmit={handleSearchSubmit}>
          <div className='container2'>
          <img className="logo" src ={logo}/>
          <div style={{"margin-top":"60px"}}>
          <input type="text" placeholder='Geben Sie den Firmennamen ein' onChange={e => setSearchTextCompany(e.target.value)}/><br/>
          <input type="text" placeholder='Aus YYYY-MM-DD' onChange={e => setSearchTextFrom(e.target.value)}/><br/>
          <input type="text" placeholder='Zu YYYY-MM-DD' onChange={e => setSearchTextTo(e.target.value)}/><br/>
          <button className='buttonmargin search' type="submit">Suche</button>
      <p style={{"color":"#9B0000"}}>{noRecord}</p>
      <table id="customers">
                <tr>
                    <th>Beschreibung</th>
                    <th>Bemerkungen</th>
                    <th>Preis</th>
                </tr>
                {/* [32,40,50,48,75,60,16.5] */}
                <tr>
                    <td>bis 3,5 t</td>
                    <td>{upto3point5tons}</td>
                    <td>{(getFormattedPrice(upto3point5tons * prices[0])).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>3,5 t bis 7,5 t</td>
                    <td>{upto7point5tons}</td>
                    <td>{(getFormattedPrice(upto7point5tons * prices[1])).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>ab 7,5 t</td>
                    <td>{from7point5tons}</td>
                    <td>{(getFormattedPrice(from7point5tons * prices[2])).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                    <td>{trucksolo}</td>
                    <td>{(getFormattedPrice(trucksolo * prices[3])).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                    <td>{trailertrain}</td>
                    <td>{(getFormattedPrice(trailertrain * prices[4])).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                    <td>{trailer}</td>
                    <td>{(getFormattedPrice(trailer * prices[5])).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Innen-reini-gung</td>
                    <td>{interiorcleaning}</td>
                    <td>{(getFormattedPrice(interiorcleaning * interiorcleaningTotal)).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                    <td>{liftingplatform}</td>
                    <td>{(getFormattedPrice(liftingplatform * prices[6])).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Spezial-reini-gung mit Säure</td>
                    <td>{cleanignwithacid}</td>
                    <td>{(getFormattedPrice(cleanignwithacid * cleanignwithacidTotal)).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Tank spezial</td>
                    <td>{tankspecial}</td>
                    <td>{(getFormattedPrice(tankspecial * 11)).replace(".",",")}</td>
                </tr>
                <tr>
                    <td>Felge spezial</td>
                    <td>{rimspecial}</td>
                    <td>{(getFormattedPrice(tankspecial * 4)).replace(".",",")}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Summe Netto</td>
                    <td>{(getFormattedPrice((upto3point5tons * prices[0])
                     + (upto7point5tons * prices[1]) 
                     + (from7point5tons * prices[2])
                     + (trucksolo * prices[3]) 
                     + (trailertrain * prices[4])
                     + (trailer * prices[5])
                     + (interiorcleaning * interiorcleaningTotal)
                     + (liftingplatform * prices[6])
                     + (cleanignwithacid * cleanignwithacidTotal)
                     + (tankspecial * 11)
                     + (tankspecial * 4))).replace(".",",")}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>MwSt. 19 %</td>
                    <td>{(getFormattedPrice((((upto3point5tons * prices[0])
                     + (upto7point5tons * prices[1]) 
                     + (from7point5tons * prices[2])
                     + (trucksolo * prices[3]) 
                     + (trailertrain * prices[4])
                     + (trailer * prices[5])
                     + (interiorcleaning * interiorcleaningTotal)
                     + (liftingplatform * prices[6])
                     + (cleanignwithacid * cleanignwithacidTotal)
                     + (tankspecial * 11)
                     + (tankspecial * 4))/100)*19)).replace(".",",")}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Gesamtbetrag</td>
                    <td>{(getFormattedPrice(((((upto3point5tons * prices[0])
                     + (upto7point5tons * prices[1]) 
                     + (from7point5tons * prices[2])
                     + (trucksolo * prices[3]) 
                     + (trailertrain * prices[4])
                     + (trailer * prices[5])
                     + (interiorcleaning * interiorcleaningTotal)
                     + (liftingplatform * prices[6])
                     + (cleanignwithacid * cleanignwithacidTotal)
                     + (tankspecial * 11)
                     + (tankspecial * 4))/100)*19) + ((upto3point5tons * prices[0])
                     + (upto7point5tons * prices[1]) 
                     + (from7point5tons * prices[2])
                     + (trucksolo * prices[3]) 
                     + (trailertrain * prices[4])
                     + (trailer * prices[5])
                     + (interiorcleaning * interiorcleaningTotal)
                     + (liftingplatform * prices[6])
                     + (cleanignwithacid * cleanignwithacidTotal)
                     + (tankspecial * 11)
                     + (tankspecial * 4)))).replace(".",",")}</td>
                </tr>
                {/* <tr>
                    <td>Datum</td>
                    <td>{data.date.split("T")[0] + "(" + moment.utc(data.date.split("T")[1].split(".")[0], "HH:mm").tz('Europe/Berlin').format("HH:mm") + ")"}</td>
                    <td>-</td>
                </tr> */}
                </table>
      {/* <label>{upto3point5tons}</label>
      <label>{upto7point5tons}</label>
      <label>{from7point5tons}</label>
      <label>{trucksolo}</label>
      <label>{trailertrain}</label>
      <label>{trailer}</label>
      <label>{liftingplatform}</label>
      <label>{tankspecial}</label>
      <label>{rimspecial}</label> */}
          </div></div>
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

  );
}