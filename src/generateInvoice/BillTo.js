import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: -25,
        marginBottom: 11,
        justifyContent: 'flex-start',
        width: '70%',
        fontSize: 12,
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
        <Text>{invoice.fullname}</Text>
        <Text>{invoice.address}</Text>
        <Text >{invoice.address2}</Text>
    </View>
);

export default BillTo;