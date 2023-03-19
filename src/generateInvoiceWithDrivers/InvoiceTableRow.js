import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import signature from '../assets/cbimage.png'

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 70,
        fontStyle: 'bold',
    },
    date: {
        width: '25%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    description: {
        width: '30%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
    },
    rate: {
        width: '55%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
        paddingLeft: 8,
    },
    remarks: {
        width: '40%',
        textAlign: 'center',
        paddingRight: 8,
    },
    imagestyle: {
        width: "25%",
        height: "25%",
        paddingLeft: 20,
        paddingRight: 20
    }
});

const InvoiceTableRow = ({ items }) => {
    const rows = items.map(item =>
        <View style={styles.row}>
        <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.qty}>{item.platenumber}</Text>
            <Text style={styles.rate}>{item.services}</Text>
            <Text style={styles.qty}>{item.trailorplatenumber}</Text>
            <Text style={styles.description}>{item.name}</Text>
            <Image style={styles.imagestyle} src={item.image}></Image>
            {/* <Text style={styles.remarks}>{item.image}</Text> */}
        </View>
        
    );
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow;