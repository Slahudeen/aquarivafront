import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
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
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique',
        fontSize:10
    },
});

const BillTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Quittung zu:</Text>
        <Text>{invoice.fullname}</Text>
        <Text>{invoice.address}</Text>
        <Text style={styles.fontChange}>{invoice.phone}</Text>
        <Text style={styles.fontChange}>{invoice.email}</Text>
    </View>
);

export default BillTo;