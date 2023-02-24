import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        color: '#3778C2',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        color: '#3778C2',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 8,
        fontStyle: 'bold',
    },
    label: {
        width: 100
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
        
       <Text style={styles.lighterText}>Aqua Ariva GmbH. Marie-Curie-Straße 24 D-68219 Mannheim                                                                               </Text>
    <Text style={styles.label}>AQUA ARIVA GmbH<br/></Text>
    {/* <Text style={styles.label}>68219, Mannheim</Text>
    <Text style={styles.label}>Tel:-0621-80 61 99 20</Text> */}
        {/* <Text >{invoice.trans_date}</Text> */}
    </View >
        <View style={styles.invoiceDateContainer}>
            
    <Text style={styles.label}>Marie-Curie-Straße 24</Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            
        <Text style={styles.label}>D-68219 Mannheim</Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            
    <Text style={styles.label}>Tel: 0621 80 61 99 20</Text>
        </View >
    </Fragment>
);

export default InvoiceNo;