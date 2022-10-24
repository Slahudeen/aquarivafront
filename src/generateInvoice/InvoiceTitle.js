import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 5,
    },
    reportTitle: {
        color: '#3778C2',
        letterSpacing: 4,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    lighterText: {
        fontSize: 7
    }
});

const InvoiceTitle = ({ title }) => (
    <View style={styles.titleContainer}>
         <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

export default InvoiceTitle;