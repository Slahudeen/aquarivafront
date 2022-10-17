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

async function createItem(item, token){
    
let result = await fetch("https://rattle-innate-roar.glitch.me/service", {
  method: 'POST',
  headers: {
    "content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify(item)
});
let statuss=result.status;
// console.log("YOLOO" + statuss);
result =await result.json();
return statuss;
// if(statuss!=200){
//     setErrorMessage("Something went wrong. Please try again")
// }
// if(statuss==200){
//     setErrorMessage("Record has been saved.")
// }
}
const getFormattedPrice = (price) => `${price.toFixed(2)} €`;

export default function Dashboard() {
    const [licenseplate, setlicenseplate] = useState("");
    // const [upto3point5tons, setupto3point5tons] = useState(false);
    // const [upto7point5tons, setupto7point5tons] = useState("");
    // const [from7point5tons, setfrom7point5tons] = useState("");
    // const [trucksolo, settrucksolo] = useState("");
    // const [trailertrain, settrailertrain] = useState("");
    // const [trailer, settrailer] = useState("");
    const [interiorcleaning, setinteriorcleaning] = useState("");
    // const [liftingplatform, setliftingplatform] = useState("");
    const [cleanignwithacid, setcleanignwithacid] = useState("");
    const [tankspecial, settankspecial] = useState("");
    const [rimspecial, setrimspecial] = useState("");
    const [drivername, setdrivername] = useState("");
    const [signature, setsignature] = useState("");
    const [customer, setcustomer] = useState("");
    const [address, setaddress] = useState("");
    const [company, setCompany] = useState("");
    const [trailorNumber, setTrailorNumber] = useState("");
    const [error,setErrorMessage]=useState("");
    const [totalPrice, setTotalPrice] = useState();
    const cname = "test";
    let upto3point5tons="";
      let upto7point5tons="";
      let from7point5tons="";
      let trucksolo="";
      let trailertrain="";
      let trailer="";
      let liftingplatform="";

    
    const [prices, setPrices]=useState([32,40,50,48,75,60,16.5]);
    const [checkedState, setCheckedState] = useState(
      new Array(prices.length).fill(false)
    );
  
    const [total, setTotal] = useState(0);
  
    const handleOnChange = (position) => {
      
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
  
      setCheckedState(updatedCheckedState);
  
      const totalPrice = updatedCheckedState.reduce(
        (sum, currentState, index) => {
          if (currentState === true) {
            return sum + prices[index];
          }
          return sum;
        },
        0
      );
  
      setTotal(totalPrice);
      
    };
    const [isChecked, setIsChecked] = useState([false]);
    const fileName = "Invoice.pdf";
    const [token, setToken] = useState(() => {
        // getting stored value
        const saved = JSON.parse(localStorage.getItem("token"));
        const initialValue = JSON.stringify(saved);
        return initialValue || "";
      });
    let newToken = token.split(':"')[1];
    newToken = newToken.split('"')[0];
    //console.log("token is "+ newToken);
      let var1=0;
      let var2=0;
      let var3=0;
      let var4=0;
      let var5=0;
      let var6=0;
      let var7=0;
      console.log("thiss" + checkedState[0]);
      

      if(checkedState[0] === true){
        var1=prices[0]+",00";
      }
      if(checkedState[0] === false){
        var1="-";
      }

      if(checkedState[1] === true){
        var2=prices[1]+",00";
      }
      if(checkedState[1] === false){
        var2="-";
      }

      if(checkedState[2] === true){
        var3=prices[2]+",00";
      }
      if(checkedState[2] === false){
        var3="-";
      }

      if(checkedState[3] === true){
        var4=prices[3]+",00";
      }
      if(checkedState[3] === false){
        var4="-";
      }

      if(checkedState[4] === true){
        var5=prices[4]+",00";
      }
      if(checkedState[4] === false){
        var5="-";
      }

      if(checkedState[5] === true){
        var6=prices[5]+",00";
      }
      if(checkedState[5] === false){
        var6="-";
      }

      if(checkedState[6] === true){
        var7="16,50";
      }
      if(checkedState[6] === false){
        var7="-";
      }
      let pri =  (total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1));
      let tax = (((total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1))/100)*19);
      let finalTotal = (pri + tax) + " €";
      pri =  (total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1)) + " €";
      tax = (((total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1))/100)*19) + " €";
      

      let newrim = "";
      if(rimspecial === ""){
        newrim ="-";
      }
      if(rimspecial!==""){
        newrim = rimspecial + " * 4,00"
      }
      let newtank = "";
      if(tankspecial === ""){
        newtank ="-";
      }
      if(tankspecial!==""){
        newtank = tankspecial + " * 11,00"
      }
    const InvoiceData = {
        // id: "5df3180a09ea16dc4b95f910",
        // invoice_no: "201906-28",
        // balance: "$2,283.74",
        fullname: customer,
        // email: "susanafuentes@mantrix.com",
        // phone: "+1 (872) 588-3809",
        address: address,
        trans_date: moment().format("DD-MM-YYYY"),
        // due_date: "26-11-2021",
        // companyID: "10001",
        // companyName: "xyz company",
        items: [
          {
            sno: 1,
            desc: "Kennzeichen",
            remarks: licenseplate,
        },
              {
                sno: 1,
                desc: "Kennzeichen Anhänger/Auflieger",
                remarks: trailorNumber,
            },
            {
                sno: 2,
                desc: "bis 3,5 t",
                remarks: var1,
            },
            {
                sno: 3,
                desc: "3,5 t bis 7,5 t",
                remarks: var2,
            },
            {
                sno: 4,
                desc: "ab 7,5 t",
                remarks: var3,
            },
            {
                sno: 5,
                desc: "SZM solo",
                remarks: var4,
            },
            {
                sno: 6,
                desc: "SZM+Hänger-zug",
                remarks: var5,
            },
            {
                sno: 7,
                desc: "SZM+Auflieger",
                remarks: var6,
            },
            {
                sno: 8,
                desc: "Innen-reini-gung",
                remarks: interiorcleaning.replace(".",","),
            },
            {
                sno: 9,
                desc: "Hebe-bühne",
                remarks: var7,
            },
            {
                sno: 10,
                desc: "Spezial-reini-gung mit Säure",
                remarks: cleanignwithacid.replace(".",","),
            },
            {
                sno: 11,
                desc: "Tank spezial",
                remarks: newtank,
            },
            {
                sno: 12,
                desc: "Felge spezial",
                remarks: newrim,
            },
            {
                sno: 13,
                desc: "Fahrer Name",
                remarks: drivername,
            },
            {
                sno: 14,
                desc: "Unterschrift",
                remarks: signature,
            },
            {
                sno: 15,
                desc: "Summe Netto",
                remarks: pri.replace(".",",")
            },
            {
              sno: 16,
              desc: "MwSt. 19 %",
              remarks: tax.replace(".",",")
          },
          {
            sno: 17,
            desc: "Gesamtbetrag",
            remarks: finalTotal.replace(".",",")
        }
        ]
    }
    const handleSubmit = async e => {
        e.preventDefault();
      let totalPrice = total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1);
      let tax = (totalPrice/100)*19;
      totalPrice = totalPrice + tax;
      //console.log("yolo" + checkedState[0]);
      // if(checkedState[0]){
      //   console.log("yoloooo" + checkedState[0]);
      //   setupto3point5tons(true);
      //   console.log("yo" + upto3point5tons);
      // }
      let upto3point5tons=checkedState[0];
      let upto7point5tons=checkedState[1];
      let from7point5tons=checkedState[2];
      let trucksolo=checkedState[3];
      let trailertrain=checkedState[4];
      let trailer=checkedState[5];
      let liftingplatform=checkedState[6];
        let statuss = await createItem({
            licenseplate,
            upto3point5tons,
            upto7point5tons,
            from7point5tons,
            trucksolo,
            trailertrain,
            trailer,
            interiorcleaning,
            liftingplatform,
            cleanignwithacid,
            tankspecial,
            rimspecial,
            drivername,
            signature,
            customer,
            address,
            company,
            trailorNumber,
            totalPrice
        }, newToken);

        if(statuss == 200){
            setErrorMessage("Record added successfully ✔️");
            InvoiceData.fullname = customer;
        }

        if(statuss == 403){
            setErrorMessage("Unauthorized. Kindly login again ❌");
        }
        
        // setToken(token);
      }

    //   const onButtonClick = () => {
    //     let domElement = document.getElementById('my-node');
    //     console.log(domElement);
    //     htmlToImage.toPng(domElement)
    //       .then(function (dataUrl) {
    //         console.log("data url is " + dataUrl);
    //         const pdf = new jsPDF();
    //         pdf.addImage(dataUrl, 'PNG', 300, 300, 600, 300);
    //         pdf.save("download.pdf");
    //       })
    //       .catch(function (error) {
    //         console.error('oops, something went wrong!', error);
    //       });
    //   };
    
  return(
    
    <div className="container1">
        {/* <InvoiceData data={cname}></InvoiceData> */}
    <h1> Welcome to Aqua Ariva</h1>
    <div className='container3'>
    <form id="my-node" onSubmit={handleSubmit}>
        
        <table id="customers">
                <tr>
                    <th>Beschreibung</th>
                    <th>Bemerkungen</th>
                    <th>Preis</th>
                </tr>
                <tr>
                    <td>Gesellschaft</td>
                    <td><input type="text" onChange={e => setCompany(e.target.value)} required/></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Kennzeichen</td>
                    <td><input type="text" onChange={e => setlicenseplate(e.target.value)} required/></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Kennzeichen Anhänger/Auflieger</td>
                    <td><input type="text" onChange={e => setTrailorNumber(e.target.value)} required/></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>bis 3,5 t</td>
                    {/* <td><input type="checkbox" onChange={e => setupto3point5tons(e.target.value)} required/></td> */}
                    <td><input type="checkbox"  checked={checkedState[0]}
                    onChange={() => handleOnChange(0)} /></td>
                    <td>32,00</td>
                </tr>
                <tr>
                    <td>3,5 t bis 7,5 t</td>
                    {/* <td><input type="text" onChange={e => setupto7point5tons(e.target.value)} required/></td> */}
                    <td><input type="checkbox"  checked={checkedState[1]}
                    onChange={() => handleOnChange(1)} /></td>
                    <td>40,00</td>
                </tr>
                <tr>
                    <td>ab 7,5 t</td>
                    {/* <td><input type="text" onChange={e => setfrom7point5tons(e.target.value)} required/></td> */}
                    <td><input type="checkbox" checked={checkedState[2]}
                    onChange={() => handleOnChange(2)} /></td>
                    <td>50,00</td>
                </tr>
                <tr>
                    <td>SZM solo</td>
                    {/* <td><input type="text" onChange={e => settrucksolo(e.target.value)} required/></td> */}
                    <td><input type="checkbox"  checked={checkedState[3]}
                    onChange={() => handleOnChange(3)} /></td>
                    <td>48,00</td>
                </tr>
                <tr>
                    <td>SZM Hänger-zug</td>
                    {/* <td><input type="text" onChange={e => settrailertrain(e.target.value)} required/></td> */}
                    <td><input type="checkbox"  checked={checkedState[4]}
                    onChange={() => handleOnChange(4)} /></td>
                    <td>75,00</td>
                </tr>
                <tr>
                    <td>SZM+Auflieger</td>
                    {/* <td><input type="text" onChange={e => settrailer(e.target.value)} required/></td> */}
                    <td><input type="checkbox"  checked={checkedState[5]}
                    onChange={() => handleOnChange(5)} /></td>
                    <td>60,00</td>
                </tr>
                <tr>
                    <td>Innen-reini-gung</td>
                    <td><input type="text" onChange={e => setinteriorcleaning(e.target.value)} /></td>
                    <td>{interiorcleaning + ",00"}</td>
                </tr>
                <tr>
                    <td>Hebe-bühne</td>
                    {/* <td><input type="text" onChange={e => setliftingplatform(e.target.value)} required/></td> */}
                    <td><input type="checkbox"  checked={checkedState[6]}
                    onChange={() => handleOnChange(6)} /></td>
                    <td>16,50</td>
                </tr>
                <tr>
                    <td>Spezial-reini-gung mit Säure</td>
                    <td><input type="text" onChange={e => setcleanignwithacid(e.target.value)} /></td>
                    <td>{cleanignwithacid + ",00"}</td>
                </tr>
                <tr>
                    <td>Tank spezial</td>
                    <td><input type="text" onChange={e => settankspecial(e.target.value)} /></td>
                    <td>{tankspecial * 11 + ",00"}</td>
                </tr>
                <tr>
                    <td>Felge spezial</td>
                    <td><input type="text" onChange={e => setrimspecial(e.target.value)} /></td>
                    <td>{rimspecial * 4 + ",00"}</td>
                </tr>
                <tr>
                    <td>Fahrer Name</td>
                    <td><input type="text" onChange={e => setdrivername(e.target.value)} required/></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Unterschrift</td>
                    <td><input type="text" onChange={e => setsignature(e.target.value)} required/></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Kunde</td>
                    <td><input type="text" onChange={e => setcustomer(e.target.value)} required/></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Anschrift</td>
                    <td><input type="text" onChange={e => setaddress(e.target.value)} required/></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Summe Netto </td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>{getFormattedPrice(total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1)).replace(".",",") }</td>
                </tr>
                <tr>
                    <td>MwSt. 19 %</td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>{getFormattedPrice(((total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1))/100)*19).replace(".",",") }</td>
                </tr>
                <tr>
                    <td>Gesamtbetrag</td>
                    {/* <td>{getFormattedPrice(total).split(".")[0] + "," + getFormattedPrice(total).split(".")[1] }</td> */}
                    <td></td>
                    <td>{getFormattedPrice((((total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1))/100)*19)+(total + (rimspecial * 4) + (tankspecial * 11) + (cleanignwithacid*1) + (interiorcleaning*1))).replace(".",",") }</td>
                </tr>
                </table>
        {/* <p>Kunde</p>
      <input type="text" onChange={e => setcustomer(e.target.value)} required/> */}
      {/* <p>Anschrift</p>
      <input type="text" onChange={e => setaddress(e.target.value)} required/> */}
      {/* <p>Kennzeichen</p>
      <input type="text" onChange={e => setlicenseplate(e.target.value)} required/> */}
      {/* <p>bis 3,5 t</p>
      <input type="text" onChange={e => setupto3point5tons(e.target.value)} required/> */}
      {/* <p>3,5 t bis 7,5 t</p>
      <input type="text" onChange={e => setupto7point5tons(e.target.value)} required/> */}
      {/* <p>ab 7,5 t</p>
      <input type="text" onChange={e => setfrom7point5tons(e.target.value)} required/> */}
      {/* <p>SZM solo</p>
      <input type="text" onChange={e => settrucksolo(e.target.value)} required/> */}
      {/* <p>SZM+Hänger-zug</p>
      <input type="text" onChange={e => settrailertrain(e.target.value)} required/> */}
    {/* </div> */}
    {/* <div className='container2'> */}
    {/* <p>SZM+Auflieger</p>
      <input type="text" onChange={e => settrailer(e.target.value)} required/>
      <p>Innen-reini-gung</p>
      <input type="text" onChange={e => setinteriorcleaning(e.target.value)} required/> */}
      {/* <p>Hebe-bühne</p>
      <input type="text" onChange={e => setliftingplatform(e.target.value)} required/> */}
      {/* <p>Spezial-reini-gung mit Säure</p>
      <input type="text" onChange={e => setcleanignwithacid(e.target.value)} required/> */}
      {/* <p>Tank spezial</p>
      <input type="text" onChange={e => settankspecial(e.target.value)} required/>
      <p>Felge spezial</p>
      <input type="text" onChange={e => setrimspecial(e.target.value)} required/> */}
      {/* <p>Fahrer Name </p>
      <input type="text" onChange={e => setdrivername(e.target.value)} required/> */}
      {/* <p>Unterschrift</p>
      <input type="text" onChange={e => setsignature(e.target.value)} required/> */}
    
    <div className='container4' align="center">
    <button type="submit" style={{"margin-bottom": "-12px"}}>Submit</button>
    <p style={{"color":"#9B0000"}}>{error}</p>
    
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