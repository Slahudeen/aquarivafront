import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 8,
        fontStyle: 'bold',
    },
    label: {
        width: 150
    },
    lighterText: {
        fontSize: 8
    }
});

const InvoiceNo = ({ invoice }) => (
    <Fragment>
        
        {/* <View >
            <Text >Datum:fdfsdfkjbdsfbjdskf</Text>
        </View > */}
    <View style={styles.invoiceNoContainer}>
    <Text style={styles.label}>Rechnungs-Nr: {invoice.invoice_no}</Text>
        {/* <Text >{invoice.trans_date}</Text> */}
    </View >
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Datum: {invoice.trans_date}</Text>
            {/* <Text >{invoice.trans_date}</Text> */}
        </View >
    </Fragment>
);

export default InvoiceNo;