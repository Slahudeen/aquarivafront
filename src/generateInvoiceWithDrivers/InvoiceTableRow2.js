import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 20,
        fontStyle: 'bold',
    },
    description: {
        width: '25%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        paddingRight: 8,
    },
    rate: {
        width: '40%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    remarks: {
        width: '50%',
        textAlign: 'center',
        paddingRight: 8,
    },
});

const InvoiceTableRow = ({ items }) => {
    const rows = items.map(data =>
        <View style={styles.row}>
            <Text style={styles.rate}>{data.service}</Text>
        </View>
        
    );
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow;