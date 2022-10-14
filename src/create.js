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
export default function Dashboard() {
    const [licenseplate, setlicenseplate] = useState("");
    const [upto3point5tons, setupto3point5tons] = useState("");
    const [upto7point5tons, setupto7point5tons] = useState("");
    const [from7point5tons, setfrom7point5tons] = useState("");
    const [trucksolo, settrucksolo] = useState("");
    const [trailertrain, settrailertrain] = useState("");
    const [trailer, settrailer] = useState("");
    const [interiorcleaning, setinteriorcleaning] = useState("");
    const [liftingplatform, setliftingplatform] = useState("");
    const [cleanignwithacid, setcleanignwithacid] = useState("");
    const [tankspecial, settankspecial] = useState("");
    const [rimspecial, setrimspecial] = useState("");
    const [drivername, setdrivername] = useState("");
    const [signature, setsignature] = useState("");
    const [customer, setcustomer] = useState("");
    const [address, setaddress] = useState("");
    const [error,setErrorMessage]=useState("");
    const cname = "test";
   // const [token, setToken] = useState("");
    // let tok = "";
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

    const InvoiceData = {
        // id: "5df3180a09ea16dc4b95f910",
        // invoice_no: "201906-28",
        // balance: "$2,283.74",
        fullname: customer,
        // email: "susanafuentes@mantrix.com",
        // phone: "+1 (872) 588-3809",
        // address: "922 Campus Road, Drytown, Wisconsin, 1986",
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
                sno: 2,
                desc: "bis 3,5 t",
                remarks: upto3point5tons,
            },
            {
                sno: 3,
                desc: "3,5 t bis 7,5 t",
                remarks: upto7point5tons,
            },
            {
                sno: 4,
                desc: "ab 7,5 t",
                remarks: from7point5tons,
            },
            {
                sno: 5,
                desc: "SZM solo",
                remarks: trucksolo,
            },
            {
                sno: 6,
                desc: "SZM+Hänger-zug",
                remarks: trailertrain,
            },
            {
                sno: 7,
                desc: "SZM+Auflieger",
                remarks: trailer,
            },
            {
                sno: 8,
                desc: "Innen-reini-gung",
                remarks: interiorcleaning,
            },
            {
                sno: 9,
                desc: "Hebe-bühne",
                remarks: liftingplatform,
            },
            {
                sno: 10,
                desc: "Spezial-reini-gung mit Säure",
                remarks: cleanignwithacid,
            },
            {
                sno: 11,
                desc: "Tank spezial",
                remarks: tankspecial,
            },
            {
                sno: 12,
                desc: "Felge spezial",
                remarks: rimspecial,
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
            }
        ]
    }
    const handleSubmit = async e => {
        e.preventDefault();
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
            address
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
    <h1> Welcome to Aqua Riva</h1>
    <form id="my-node" onSubmit={handleSubmit}>
        <div className='container2'>
        <p>Kunde</p>
      <input type="text" onChange={e => setcustomer(e.target.value)} required/>
      <p>Anschrift</p>
      <input type="text" onChange={e => setaddress(e.target.value)} required/>
      <p>Kennzeichen</p>
      <input type="text" onChange={e => setlicenseplate(e.target.value)} required/>
      <p>bis 3,5 t</p>
      <input type="text" onChange={e => setupto3point5tons(e.target.value)} required/>
      <p>3,5 t bis 7,5 t</p>
      <input type="text" onChange={e => setupto7point5tons(e.target.value)} required/>
      <p>ab 7,5 t</p>
      <input type="text" onChange={e => setfrom7point5tons(e.target.value)} required/>
      <p>SZM solo</p>
      <input type="text" onChange={e => settrucksolo(e.target.value)} required/>
      <p>SZM+Hänger-zug</p>
      <input type="text" onChange={e => settrailertrain(e.target.value)} required/>
    </div>
    <div className='container2'>
    <p>SZM+Auflieger</p>
      <input type="text" onChange={e => settrailer(e.target.value)} required/>
      <p>Innen-reini-gung</p>
      <input type="text" onChange={e => setinteriorcleaning(e.target.value)} required/>
      <p>Hebe-bühne</p>
      <input type="text" onChange={e => setliftingplatform(e.target.value)} required/>
      <p>Spezial-reini-gung mit Säure</p>
      <input type="text" onChange={e => setcleanignwithacid(e.target.value)} required/>
      <p>Tank spezial</p>
      <input type="text" onChange={e => settankspecial(e.target.value)} required/>
      <p>Felge spezial</p>
      <input type="text" onChange={e => setrimspecial(e.target.value)} required/>
      <p>Fahrer Name </p>
      <input type="text" onChange={e => setdrivername(e.target.value)} required/>
      <p>Unterschrift</p>
      <input type="text" onChange={e => setsignature(e.target.value)} required/>
    </div>
    <div className='container3' align="right">
    <button type="submit">Submit</button>
    
      </div>
      <div className='container3' align="left">
      <p style={{"color":"#9B0000", "margin-left": "10%"}}>{error}</p>
    </div>
    {/* <button onClick={onButtonClick}>Download PDF</button> */}
    <PDFViewer width={800} height={500} showToolbar={false}>
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