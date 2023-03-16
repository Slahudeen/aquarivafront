import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        backgroundColor: '#3778C2',
        color: '#fff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    date: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    description: {
        width: '30%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        width: '55%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    remarks: {
        width: '40%'
    },
});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
    <Text style={styles.date}>Datum</Text>
        <Text style={styles.description}>Fahrer Name</Text>
        <Text style={styles.qty}>Kennzeichen</Text>
        <Text style={styles.rate}>Dienstleistungen</Text>
        <Text style={styles.remarks}>Unterschrift</Text>
    </View>
);

export default InvoiceTableHeader;