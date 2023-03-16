import React, {useState, useEffect} from 'react';
import './create.css';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './generateInvoice/Invoice';
import PdfDocument2 from './generateInvoiceWithDrivers/Invoice';
import moment from "moment";
import logo from "./assets/logo.png";
import { useNavigate } from 'react-router-dom'



export default function Dashboard() {
   
    

   
    const [noRecord, setNoRecord] = useState();
    // const [records, setRecords] = useState();
    const [searchTextCompany, setSearchTextCompany] = useState("");
    const [records, setRecords] = useState([]);
    const [counter, setCounter] = useState([0]);
    const [searchTextFrom, setSearchTextFrom] = useState("");
    const [customer, setCustomer] = useState("");
    const [street, setStreat] = useState("");
    const [ryear, setryear] = useState(moment().format("YYYY"));
    const [rmonth, setrmonth] = useState(moment().format("MM"));
    const [rdate, setrdate] = useState(moment().format("DD"));
    const [priceData, setPriceData] = useState([0]);
    const [postcode, setPostcode] = useState(" ");
    const [rnumber, setrnumber] = useState(" ");
    
    const [year, setyear] = useState(moment().format("YYYY"));
    const [longMonth, setlongMonth] = useState(moment().format("MMMM"));
    const navigate = useNavigate();
    var prices = new Array(29).fill("0");
    const [loginError, setLoginError] = useState("")
    const [discount, setdiscount] = useState(0)
    const getFormattedPrice = (price) => `${price.toFixed(2)} €`;
    // prices[9] = "";
    const [responseLength, setResponseLength] = useState(0);
    console.log("the lkength is " + responseLength);
    
        var Transporterbis3_5t  = new Array(responseLength).fill(false);
        var LKWbis7_5t  = new Array(responseLength).fill(false);
        var LKWab7_5t  = new Array(responseLength).fill(false);
        var SZMsolo  = new Array(responseLength).fill(false);
        var SZMsolomitchassis  = new Array(responseLength).fill(false);
        var AufliegerSolo  = new Array(responseLength).fill(false);
        var SZMHänger_zug  = new Array(responseLength).fill(false);
        var SZM_Auflieger  = new Array(responseLength).fill(false);
        var PlaneSpezialbis8m  = new Array(responseLength).fill(false);
        var PlaneSpezialab8m  = new Array(responseLength).fill(false);
        var WBContainerChassis3Achser  = new Array(responseLength).fill(false);
        var WBContainerChassis5Achser  = new Array(responseLength).fill(false);
        var Tankfahrzeugbis3Achser  = new Array(responseLength).fill(false);
        var Tankfahrzeug5Achser  = new Array(responseLength).fill(false);
        var Kipperbis3Achser  = new Array(responseLength).fill(false);
        var Kipper5Achser  = new Array(responseLength).fill(false);
        var AbrollerAbsetzer3Achser  = new Array(responseLength).fill(false);
        var AbrollerAbsetzerbis3AchsermitSäure  = new Array(responseLength).fill(false);
        var AbrollerAbsetzer5Achser  = new Array(responseLength).fill(false);
        var AbrollerAbsetzer5AchsermitSäure  = new Array(responseLength).fill(false);
        var Müllfahrzeugebis3Achser  = new Array(responseLength).fill(false);
        var StrakezVerschmutzungbis3Achser  = new Array(responseLength).fill(false);
        var StarkeVerschmutzung5Achser  = new Array(responseLength).fill(false);
        var Innen_ReinigungAuflieger_LadeflächemitSeitenwänden  = new Array(responseLength).fill(false);
        var Tankspezial  = new Array(responseLength).fill('0');
        var Felgespezial  = new Array(responseLength).fill('0');
        var Hebe_bühne  = new Array(responseLength).fill(false);
        var InnenReinigung  = new Array(responseLength).fill(false);
        var SpezialReinigungmitSäure  = new Array(responseLength).fill(false);

    const [searchTextTo, setSearchTextTo] = useState("");
    const fileName = searchTextCompany + ".pdf";
    const [token, setToken] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("token"));
    const initialValue = JSON.stringify(saved);
    return initialValue || "";
  });
let newToken = token.split(':"')[1];
newToken = newToken.split('"')[0];
const getExistingPrices = async () => {
    fetch("http://localhost:3000/prices", {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
             'Content-Type': 'application/json',
             "Authorization": "Bearer " + newToken
        })
    }).then(async response => await response.json())
        .then(data => {
           setPriceData(data[0])
           
            
     
        }).catch( error => {
           setLoginError("Something went wrong. Try to log in again 😢")
           console.error("error is " + error);
        
          
        });
        
 }

 console.log(priceData)
    const handleSearchSubmit = async e => {
        e.preventDefault();
        // getExistingPrices();
        // console.log(prices.PlaneSpezialab8m);
    
     
        
        const getCustomer = await fetch("http://localhost:3000/companyvehicle/" + searchTextFrom + "/" + searchTextTo + "/" + searchTextCompany, {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     "Authorization": "Bearer " + newToken
                })
            }).then(async response => await response.json())
                .then(data => {
                    
                    console.log(JSON.stringify(data) )
                    if(JSON.stringify(data) === "[]"){
                        setNoRecord("No record found 😢");
                        setTimeout(function(){ setNoRecord(" "); },2000);
                    }
                    if(JSON.stringify(data) !== "[]"){
                        setRecords(data);
                        setCustomer(data[0].Kunde)
                        setStreat(data[0].StraßeNr)
                        setPostcode(data[0].PLZOrt)
                        setResponseLength(data.length);
                        setNoRecord("Record has been found 😊");
                        setTimeout(function(){ setNoRecord(" "); },2000);
                        for(let i=0; i<data.length; i++){
                            if(data[i].Transporterbis3_5t == "true"){
                                Transporterbis3_5t[i] = true; 
                            }
                            if(data[i].Transporterbis3_5t == "false"){
                                Transporterbis3_5t[i] = false; 
                            }
                            if(data[i].LKWbis7_5t == "true"){
                                LKWbis7_5t[i] = true; 
                            }
                            if(data[i].LKWbis7_5t == "false"){
                                LKWbis7_5t[i] = false; 
                            }
                            if(data[i].LKWab7_5t == "true"){
                                LKWab7_5t[i] = true; 
                            }
                            if(data[i].LKWab7_5t == "false"){
                                LKWab7_5t[i] = false; 
                            }
                            if(data[i].SZMsolo == "true"){
                                SZMsolo[i] = true; 
                            }
                            if(data[i].SZMsolo == "false"){
                                SZMsolo[i] = false; 
                            }
                            if(data[i].SZMsolomitchassis == "true"){
                                SZMsolomitchassis[i] = true; 
                            }
                            if(data[i].SZMsolomitchassis == "false"){
                                SZMsolomitchassis[i] = false; 
                            }
                            if(data[i].AufliegerSolo == "true"){
                                AufliegerSolo[i] = true; 
                            }
                            if(data[i].AufliegerSolo == "false"){
                                AufliegerSolo[i] = false; 
                            }
                            if(data[i].SZMHänger_zug == "true"){
                                SZMHänger_zug[i] = true; 
                            }
                            if(data[i].SZMHänger_zug == "false"){
                                SZMHänger_zug[i] = false; 
                            }
                            if(data[i].SZM_Auflieger == "true"){
                                SZM_Auflieger[i] = true; 
                            }
                            if(data[i].SZM_Auflieger == "false"){
                                SZM_Auflieger[i] = false; 
                            }
                            if(data[i].PlaneSpezialbis8m == "true"){
                                PlaneSpezialbis8m[i] = true; 
                            }
                            if(data[i].PlaneSpezialbis8m == "false"){
                                PlaneSpezialbis8m[i] = false; 
                            }
                            if(data[i].PlaneSpezialab8m == "true"){
                                PlaneSpezialab8m[i] = true; 
                            }
                            if(data[i].PlaneSpezialab8m == "false"){
                                PlaneSpezialab8m[i] = false; 
                            }
                            if(data[i].WBContainerChassis3Achser == "true"){
                                WBContainerChassis3Achser[i] = true; 
                            }
                            if(data[i].WBContainerChassis3Achser == "false"){
                                WBContainerChassis3Achser[i] = false; 
                            }
                            if(data[i].WBContainerChassis5Achser == "true"){
                                WBContainerChassis5Achser[i] = true; 
                            }
                            if(data[i].WBContainerChassis5Achser == "false"){
                                WBContainerChassis5Achser[i] = false; 
                            }
                            if(data[i].Tankfahrzeugbis3Achser == "true"){
                                Tankfahrzeugbis3Achser[i] = true; 
                            }
                            if(data[i].Tankfahrzeugbis3Achser == "false"){
                                Tankfahrzeugbis3Achser[i] = false; 
                            }
                            if(data[i].Tankfahrzeug5Achser == "true"){
                                Tankfahrzeug5Achser[i] = true; 
                            }
                            if(data[i].Tankfahrzeug5Achser == "false"){
                                Tankfahrzeug5Achser[i] = false; 
                            }
                            if(data[i].Kipperbis3Achser == "true"){
                                Kipperbis3Achser[i] = true; 
                            }
                            if(data[i].Kipperbis3Achser == "false"){
                                Kipperbis3Achser[i] = false; 
                            }
                            if(data[i].Kipper5Achser == "true"){
                                Kipper5Achser[i] = true; 
                            }
                            if(data[i].Kipper5Achser == "false"){
                                Kipper5Achser[i] = false; 
                            }
                            if(data[i].AbrollerAbsetzer3Achser == "true"){
                                AbrollerAbsetzer3Achser[i] = true; 
                            }
                            if(data[i].AbrollerAbsetzer3Achser == "false"){
                                AbrollerAbsetzer3Achser[i] = false; 
                            }
                            if(data[i].AbrollerAbsetzerbis3AchsermitSäure == "true"){
                                AbrollerAbsetzerbis3AchsermitSäure[i] = true; 
                            }
                            if(data[i].AbrollerAbsetzerbis3AchsermitSäure == "false"){
                                AbrollerAbsetzerbis3AchsermitSäure[i] = false; 
                            }
                            if(data[i].AbrollerAbsetzer5Achser == "true"){
                                AbrollerAbsetzer5Achser[i] = true; 
                            }
                            if(data[i].AbrollerAbsetzer5Achser == "false"){
                                AbrollerAbsetzer5Achser[i] = false; 
                            }
                            if(data[i].AbrollerAbsetzer5AchsermitSäure == "true"){
                                AbrollerAbsetzer5AchsermitSäure[i] = true; 
                            }
                            if(data[i].AbrollerAbsetzer5AchsermitSäure == "false"){
                                AbrollerAbsetzer5AchsermitSäure[i] = false; 
                            }
                            if(data[i].Müllfahrzeugebis3Achser == "true"){
                                Müllfahrzeugebis3Achser[i] = true; 
                            }
                            if(data[i].Müllfahrzeugebis3Achser == "false"){
                                Müllfahrzeugebis3Achser[i] = false; 
                            }
                            if(data[i].StrakezVerschmutzungbis3Achser == "true"){
                                StrakezVerschmutzungbis3Achser[i] = true; 
                            }
                            if(data[i].StrakezVerschmutzungbis3Achser == "false"){
                                StrakezVerschmutzungbis3Achser[i] = false; 
                            }
                            if(data[i].StarkeVerschmutzung5Achser == "true"){
                                StarkeVerschmutzung5Achser[i] = true; 
                            }
                            if(data[i].StarkeVerschmutzung5Achser == "false"){
                                StarkeVerschmutzung5Achser[i] = false; 
                            }
                            if(data[i].Innen_ReinigungAuflieger_LadeflächemitSeitenwänden == "true"){
                                Innen_ReinigungAuflieger_LadeflächemitSeitenwänden[i] = true; 
                            }
                            if(data[i].Innen_ReinigungAuflieger_LadeflächemitSeitenwänden == "false"){
                                Innen_ReinigungAuflieger_LadeflächemitSeitenwänden[i] = false; 
                            }
                            if(data[i].Tankspezial != "0"){
                                Tankspezial[i] = data[i].Tankspezial; 
                            }
                            if(data[i].Tankspezial == "0"){
                                Tankspezial[i] = data[i].Tankspezial; 
                            }
                            if(data[i].Felgespezial != "0"){
                                Felgespezial[i] = data[i].Felgespezial; 
                            }
                            if(data[i].Felgespezial == "0"){
                                Felgespezial[i] = data[i].Felgespezial; 
                            }
                            if(data[i].Hebe_bühne == "true"){
                                Hebe_bühne[i] = true; 
                            }
                            if(data[i].Hebe_bühne == "false"){
                                Hebe_bühne[i] = false; 
                            }
                            if(data[i].InnenReinigung == "true"){
                                InnenReinigung[i] = true; 
                            }
                            if(data[i].InnenReinigung == "false"){
                                InnenReinigung[i] = false; 
                            }
                            if(data[i].SpezialReinigungmitSäure == "true"){
                                SpezialReinigungmitSäure[i] = true; 
                            }
                            if(data[i].SpezialReinigungmitSäure == "false"){
                                SpezialReinigungmitSäure[i] = false; 
                            }

                        }
                        console.log(Transporterbis3_5t, LKWbis7_5t, LKWab7_5t, SZMsolo,
                            SZMsolomitchassis, AufliegerSolo, SZMHänger_zug, SZM_Auflieger,
                            PlaneSpezialbis8m, PlaneSpezialab8m, WBContainerChassis3Achser,
                            WBContainerChassis5Achser, Tankfahrzeugbis3Achser, Tankfahrzeug5Achser,
                            Kipperbis3Achser,Kipper5Achser, AbrollerAbsetzer3Achser, AbrollerAbsetzerbis3AchsermitSäure,
                            AbrollerAbsetzer5Achser, AbrollerAbsetzer5AchsermitSäure, Müllfahrzeugebis3Achser,
                            StrakezVerschmutzungbis3Achser, StarkeVerschmutzung5Achser,
                            Innen_ReinigungAuflieger_LadeflächemitSeitenwänden, Tankspezial,Felgespezial,
                            Hebe_bühne,InnenReinigung, SpezialReinigungmitSäure);
                            // console.log(trueCounter(Transporterbis3_5t));
                            // console.log(trueCounter(LKWbis7_5t));
                            setCounter([trueCounter(Transporterbis3_5t),trueCounter(LKWbis7_5t),
                                trueCounter(LKWab7_5t),trueCounter(SZMsolo),
                                trueCounter(SZMsolomitchassis),trueCounter(AufliegerSolo),
                                trueCounter(SZMHänger_zug),trueCounter(SZM_Auflieger),
                                trueCounter(PlaneSpezialbis8m),trueCounter(PlaneSpezialab8m),
                                trueCounter(WBContainerChassis3Achser),trueCounter(WBContainerChassis5Achser),
                                trueCounter(Tankfahrzeugbis3Achser),trueCounter(Tankfahrzeug5Achser),
                                trueCounter(Kipperbis3Achser),trueCounter(Kipper5Achser),
                                trueCounter(AbrollerAbsetzer3Achser),trueCounter(AbrollerAbsetzerbis3AchsermitSäure),
                                trueCounter(AbrollerAbsetzer5Achser),trueCounter(AbrollerAbsetzer5AchsermitSäure),
                                trueCounter(Müllfahrzeugebis3Achser),trueCounter(StrakezVerschmutzungbis3Achser),
                                trueCounter(StarkeVerschmutzung5Achser),trueCounter(Innen_ReinigungAuflieger_LadeflächemitSeitenwänden),
                                trueCounter(Tankspezial),trueCounter(Felgespezial),
                                trueCounter(Hebe_bühne),trueCounter(InnenReinigung),
                                trueCounter(SpezialReinigungmitSäure)])

                        
                    }
                  
                })
            
         }

         const servicesNames = ["Transporter bis 3,5 t", "LKW bis 7,5 t", "LKW ab 7,5 t", "SZM solo",
         "SZM solo mit chassis", "Auflieger Solo", "SZM Hänger-zug", "SZM+Auflieger",
         "Plane Spezial bis 8 m", "Plane Spezial ab 8 m", "W.B & Container Chassis 3 Achser",
         "W.B & Container Chassis 5 Achser", "Tankfahrzeug bis 3 Achser", "Tankfahrzeug 5 Achser",
         "Kipper bis 3 Achser","Kipper 5 Achser", "Abroller & Absetzer 3 Achser", "Abroller & Absetzer bis 3 Achser mit Säure",
         "Abroller & Absetzer 5 Achser", "Abroller & Absetzer 5 Achser mit Säure", "Müllfahrzeuge bis 3 Achser",
         "Strakez Verschmutzung bis 3 Achser", "Starke Verschmutzung 5 Achser",
         "Innen-Reinigung Auflieger-Ladefläche mit Seitenwänden(ohne Dach)", "Tank spezial","Felge spezial",
         "Hebe-bühne","Innen Reinigung", "Spezial Reinigung mit Säure"]

         const servicesNames2 = ["Transporterbis3_5t", "LKWbis7_5t", "LKWab7_5t", "SZMsolo",
            "SZMsolomitchassis", "AufliegerSolo", "SZMHänger_zug", "SZM_Auflieger",
            "PlaneSpezialbis8m", "PlaneSpezialab8m", "WBContainerChassis3Achser",
            "WBContainerChassis5Achser", "Tankfahrzeugbis3Achser", "Tankfahrzeug5Achser",
            "Kipperbis3Achser","Kipper5Achser", "AbrollerAbsetzer3Achser", "AbrollerAbsetzerbis3AchsermitSäure",
            "AbrollerAbsetzer5Achser", "AbrollerAbsetzer5AchsermitSäure", "Müllfahrzeugebis3Achser",
            "StrakezVerschmutzungbis3Achser", "StarkeVerschmutzung5Achser",
            "Innen_ReinigungAuflieger_LadeflächemitSeitenwänden", "Tankspezial","Felgespezial",
            "Hebe_bühne","InnenReinigung", "SpezialReinigungmitSäure"]

         function trueCounter(variable){
            let sum = 0;
            for(let i = 0;i<variable.length;i++){
                
                if(variable[i] == true || variable[i] != "0"){
                    sum = sum + 1;
                }
            }
            return sum;
         }
         var items =
          [
            {
                sno: "",
                desc:"",
                remarks:"",
                qty: "",
                rate: ""
            },
        ]
        useEffect(() => {
            getExistingPrices();
         }, []);
         //console.log("testing " + priceData.Transporterbis3_5t)
         if(priceData != undefined){
         prices[0]=(priceData.Transporterbis3_5t);
           prices[1]=(priceData.LKWbis7_5t);
           prices[2]=(priceData.LKWab7_5t);
           prices[3]=(priceData.SZMsolo);
           prices[4]=(priceData.SZMsolomitchassis);
           prices[5]=(priceData.AufliegerSolo);
           prices[6]=(priceData.SZMHänger_zug);
           prices[7]=(priceData.SZM_Auflieger);
           prices[8]=(priceData.PlaneSpezialbis8m);
           prices[9]=(priceData.PlaneSpezialab8m);
           prices[10]=(priceData.WBContainerChassis3Achser);
           prices[11]=(priceData.WBContainerChassis5Achser);
           prices[12]=(priceData.Tankfahrzeugbis3Achser);
           prices[13]=(priceData.Tankfahrzeug5Achser);
           prices[14]=(priceData.Kipperbis3Achser);
           prices[15]=(priceData.Kipper5Achser);
           prices[16]=(priceData.AbrollerAbsetzer3Achser);
           prices[17]=(priceData.AbrollerAbsetzerbis3AchsermitSäure);
           prices[18]=(priceData.AbrollerAbsetzer5Achser);
           prices[19]=(priceData.AbrollerAbsetzer5AchsermitSäure);
           prices[20]=(priceData.Müllfahrzeugebis3Achser);
           prices[21]=(priceData.StrakezVerschmutzungbis3Achser);
           prices[22]=(priceData.StarkeVerschmutzung5Achser);
           prices[23]=(priceData.Innen_ReinigungAuflieger_LadeflächemitSeitenwänden);
           prices[24]=(priceData.Tankspezial);
           prices[25]=(priceData.Felgespezial);
           prices[26]=(priceData.Hebe_bühne);
           prices[27]=(priceData.InnenReinigung);
           prices[28]=(priceData.SpezialReinigungmitSäure);
        console.log("Prices are = " + prices);
         }

         console.log("Prices are = " + prices);
         let total = 0;
         for(let i=0;i< 29; i++){
            if(prices[i] == undefined || prices[i] == 0){}
            else{
            if(counter[i] == 0){
            }
            else{
                //console.log("initial prices are " + prices[i])
                
            var newEntry = 
            {
                "sno" : " ",
                "qty" : counter[i], 
                "desc" :servicesNames[i],
                "rate" : getFormattedPrice(prices[i]).replace(".",","),
                "remarks" : getFormattedPrice(prices[i]*counter[i]).replace(".",",")
            };
            total = total + (prices[i]*counter[i]);


            items.push(newEntry);
        }}
        }
        console.log("total is = " + total);
        // setTotalPricee(total);
        var newEntry = 
        {
            sno: " ",
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: "Summe Netto                              " + getFormattedPrice(total).replace(".",",")
        };
        items.push(newEntry);
        var disc = ((total/100)*discount);
        if(disc == 0){}
        else{
        newEntry = 
        {
            sno: " ",
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: "Rabatt ("+discount+"%)                                 " + getFormattedPrice(disc).replace(".",",")
        };
        items.push(newEntry);
        newEntry = 
        {
            sno: " ",
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: " "
        };
        items.push(newEntry);
        newEntry = 
        {
            sno: " ",
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: "Summe Netto                              " + getFormattedPrice(total-disc).replace(".",",")
        };
        items.push(newEntry);}
        newEntry = 
        {
            sno: " ",
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: "MwSt. 19 %                                 " + getFormattedPrice(((total-disc)/100)*19).replace(".",",")
        };
        items.push(newEntry);
        newEntry = 
        {
            sno: " ",
            qty:" ",
            rate: " ",
            desc: " ",
            remarks: "Gesamtbetrag                              " + getFormattedPrice((((total-disc)/100)*19)+(total-disc)).replace(".",",")
        };
        items.push(newEntry);


        let finaldate = moment().date(rdate).month(rmonth-1).year(ryear).format("DD-MM-YYYY");
    
         const InvoiceData = {
             invoice_no: rnumber,
            fullname: customer,
            address: street,
            address2: postcode,
            trans_date: finaldate,
            phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße " + longMonth + ", " + year,
        //phone: "Vielen Dank für Ihren Besuch in unserer Waschstraße February" + ", " + year,
        email: "Für die ausgeführten Dienstleistungen berechnen wir wie folgt:",
            items: [
                {
                    sno: "",
                    desc:"",
                    remarks:"",
                    qty: "",
                    rate: ""
                },
          ]
        }
        InvoiceData.items = [...items];

    //     var items2= [
    //         {
    //             name: "Slahudeen",
    //             Platenumber:"AFX691",
    //             data:[{
    //                 service:"serviice"
    //             }],
    //             image: "jshvbjuhgbvdf",
    //         },
    //   ]

        // drivers invoice
        const InvoiceData2 = {
            invoice_no: rnumber,
           fullname: customer,
           address: street,
           address2: postcode,
           trans_date: finaldate,
           
           items: [
            {
                name: "Slahudeen Rasheed",
                date: "2023-03-01",
                platenumber:"AFX691",
                services: "Transporterbis3_5t\nInnen_ReinigungAuflieger_LadeflächemitSeitenwänden",
                image: "jshvbjuhgbvdf",
            },
            {
                name: "Slahudeen",
                date: "2023-03-01",
                platenumber:"AFX691",
                services: "Transporterbis3_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\nLKWab7_5t\n",
                image: "jshvbjuhgbvdf",
            },
      ]
       }

  return(
    
    <div className="container1">
        <p style={{"color":"#9B0000"}}>{loginError}</p>
    <form onSubmit={handleSearchSubmit}>
          <div className='container2'>
          <img className="logo" src ={logo}/>
          <div style={{"margin-top":"60px"}}>
          <input type="text" placeholder='Geben Sie den Firmennamen ein' onChange={e => setSearchTextCompany(e.target.value)}/><br/>
          <input type="text" placeholder='Aus YYYY-MM-DD' onChange={e => setSearchTextFrom(e.target.value)}/><br/>
          <input type="text" placeholder='Zu YYYY-MM-DD' onChange={e => setSearchTextTo(e.target.value)}/><br/>
          <input type="text" placeholder='Rabatt' onChange={e => setdiscount(e.target.value)} /><br/>
          <input type="text" placeholder='Jahr' onChange={e => setyear(e.target.value)}/><br/>
          <input type="text" placeholder='Monat' onChange={e => setlongMonth(e.target.value)}/><br/>
          <input type="text" placeholder='Jahr erhalten' onChange={e => setryear(e.target.value)}/><br/>
          <input type="text" placeholder='Monat erhalten' onChange={e => setrmonth(e.target.value)} /><br/>
          <input type="text" placeholder='Eingangstag' onChange={e => setrdate(e.target.value)} /><br/>
          <input type="text" placeholder='Rechnungs-Nr' onChange={e => setrnumber(e.target.value)} /><br/>
          <button className='buttonmargin search' type="submit">Suche</button>
      <p style={{"color":"#9B0000"}}>{noRecord}</p>
      <div >
      <table id="customers" >
                <tr>
                    <th>Datum</th>
                    <th>Fahrer Name</th>
                    <th>Kennzeichen</th>
                </tr>
                </table>
      {records.map((data, key) => {

          return (
      <table id="customers" key={key}>
                {/* <tr>
                    <th>Beschreibung</th>
                    <th>Bemerkungen</th>
                    <th>Menge</th>
                </tr> */}
                <tr>
                    <th>{data.date.split("T")[0]}</th>
                    <th>{data.FahrerName}</th>
                    <th>{data.Kennzeichen}</th>
                </tr>
                
                </table>)
      })}
      </div>
      
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

         <PDFViewer width={800} height={1000} showToolbar={false}>
        <PdfDocument2 invoicedata={InvoiceData2} />
      </PDFViewer>

      <div className='download-link'>
        <PDFDownloadLink
          document={<PdfDocument2 invoicedata={InvoiceData2} />}
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