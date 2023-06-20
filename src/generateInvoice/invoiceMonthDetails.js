import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 5,
        justifyContent: 'flex-start',
        width: '70%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
    fontChange: {
        marginTop: 5,
        fontFamily: 'Helvetica-Oblique',
        fontSize:10
    },
    fontChange2: {
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique',
        fontSize:10
    },
});

const BillTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.fontChange}>{invoice.phone}</Text>
        <Text style={styles.fontChange2}>{invoice.email}</Text>
        <Text style={styles.fontChange}>{invoice.categoryaddress1}</Text>
        <Text style={styles.fontChange2}>{invoice.categoryaddress2}</Text>
        <Text style={styles.fontChange2}>{invoice.categoryaddress3}</Text>
    </View>
);

export default BillTo;