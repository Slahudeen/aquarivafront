import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 12
    },
    titleContainer2: {
        fontSize:6,
        flexDirection: 'row',
        position:'absolute',
        bottom:20,
        paddingLeft:35,
        marginRight:-50
    },
    titleContainer3: {
        fontSize:6,
        flexDirection: 'row',
        position:'absolute',
        bottom:30,
        paddingLeft:35,
        marginRight:-50
    },
    titleContainer5: {
        fontSize:6,
        flexDirection: 'row',
        position:'absolute',
        bottom:10,
        paddingLeft:35,
        marginRight:-50
    },
    titleContainer4: {
        flexDirection: 'row',
    },
    reportTitle: {
        fontSize: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 12
    },
    reportText: {
        fontSize: 9,
        textAlign: 'left',
        textTransform: 'uppercase',
    },
    reportText2: {
        fontSize: 7,
        textAlign: 'left',
        marginTop: 3
    },
    footer: {
        color: '#3778C2',
        fontSize: 8,
        textAlign: 'left',
    },
    padding: {
        fontSize: 12,
        paddingTop: 15
    },
    bankDetails: {
        fontSize: 9,
        textAlign: 'left'
    },
    bankDetails2: {
        fontSize: 9,
        textAlign: 'left',
        textTransform: 'uppercase',
        left: 72
    },
    bankDetails3: {
        fontSize: 9,
        textAlign: 'left',
        textTransform: 'uppercase',
        left: 66
    },
});

const InvoiceThankYouMsg = ({ invoice }) => (
    <Fragment style={styles.titleContainer}>
        <View fixed style={styles.padding}>
        <Text >{invoice.details}</Text>
        </View>
        <View fixed style={styles.titleContainer3}>
        <Text style={styles.footer}>AQUA ARIVA GmbH          Tel:0621-80619920          aquaariva@t-online.de    Steuer-Nr.3818026965    Amtsgericht Mannheim     Geschäftsführer</Text>
        </View>
        <View fixed style={styles.titleContainer2}>
        <Text style={styles.footer}>Marie-Curie-Straße           Handy:0176-15828582    www.aqua-ariva.de         Ust.IdNr.DE358031303   HRB745091                       Faiq Rasheed</Text>
        
    </View>
    <View fixed style={styles.titleContainer5}>
        <Text style={styles.footer}>24,D-68219 Mannheim</Text>
        </View>
    </Fragment>
);

export default InvoiceThankYouMsg;