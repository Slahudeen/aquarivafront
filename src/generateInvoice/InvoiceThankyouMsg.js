import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 12
    },
    reportTitle: {
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 12
    },
    reportText: {
        fontSize: 8,
        textAlign: 'left',
        textTransform: 'uppercase',
    }
});

const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportText}>Bankverbindung: Volksbank Sandhofen eG </Text>
        <Text style={styles.reportText}>IBAN: DE39 6706 0031 0029 6968 10 </Text>
        <Text style={styles.reportText}>BIC: GENODE61 MA3</Text>
        <Text style={styles.reportTitle}>*** Vielen Dank ***</Text>
    </View>
);

export default InvoiceThankYouMsg;