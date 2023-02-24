import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../assets/logo.png";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import Invoiceheader1 from "./Invoiceheader1";
import InvoiceMonthDetails from "./invoiceMonthDetails";
import InvoiceThankYouMsg from "./InvoiceThankyouMsg";
import InvoiceItemsTable from "./InvoiceItemsTable";
import BillTo from "./BillTo";

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 10,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 150,
        height: 75,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const PdfDocument = ({ invoicedata }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <Image style={styles.logo} src ={logo}/>
                <Invoiceheader1 invoice={invoicedata} />
                <BillTo invoice={invoicedata} />
                <InvoiceNo invoice={invoicedata} />
                <InvoiceTitle invoice={invoicedata} />
                <InvoiceMonthDetails invoice={invoicedata} />
                <InvoiceThankYouMsg invoice={invoicedata}/>
            </Page>
        </Document>
    );
}

export default PdfDocument;