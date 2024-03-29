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
        marginRight:-50,
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

const InvoiceThankYouMsg = () => (
    <Fragment style={styles.titleContainer}>
        <View style={styles.titleContainer4}>
        <Text style={styles.reportText}>Bankverbindung:</Text>
        <Text style={styles.bankDetails}> Sparkasse Rhein Neckar Nord </Text>
        </View>
        <View style={styles.titleContainer4}>
        <Text style={styles.reportText}>IBAN:</Text>
        <Text style={styles.bankDetails3}>DE06 6705 0505 0040 2145 42</Text>
        </View>
        <View style={styles.titleContainer4}>
        <Text style={styles.reportText}>BIC:</Text>
        <Text style={styles.bankDetails2}>MANSDE66XXX</Text>
        {/* <Text style={styles.reportTitle}>*** Vielen Dank ***</Text> */}
        
        </View>
        
        <View style={styles.titleContainer4}>
        <Text style={styles.reportText2}>***Zahlungszeil: </Text>
        <Text style={styles.reportText2}> 8 Tage ab Rechnungsdatum </Text>
        </View>
        <View fixed style={styles.titleContainer3}>
        <Text style={styles.footer} >AQUA ARIVA GmbH          Tel:0621-80619920          aquaariva@t-online.de    Steuer-Nr.3818026965    Amtsgericht Mannheim     Geschäftsführer</Text>
        </View>
        <View fixed style={styles.titleContainer2}>
        <Text style={styles.footer}>Marie-Curie-Straße           Handy:0176-15828582    www.aqua-ariva.de         Ust.IdNr.DE358031303   HRB745091                       Faiq Rasheed</Text>
        {/* <Text style={styles.footer}>Tel:- 0621-80619920</Text>
        <Text style={styles.footer}>Handy:- 0176-15828582</Text>
        <Text style={styles.footer}>aquaariva@t-online.de</Text>
        <Text style={styles.footer}>www.aqua-ariva.de</Text>
        <Text style={styles.footer}>Steuer-Nr. 123456789100</Text>
        <Text style={styles.footer}>Ust.IdNr. DE123456789</Text>
        <Text style={styles.footer}>Amtsgericht Mannheim</Text>
        <Text style={styles.footer}>HRB745091</Text>
        <Text style={styles.footer}>Geschäftsführer</Text>
        <Text style={styles.footer}>Faiq Rasheed</Text> */}
    </View>
    <View fixed style={styles.titleContainer5}>
        <Text style={styles.footer}>24,D-68219 Mannheim</Text>
        </View>
    </Fragment>
);

export default InvoiceThankYouMsg;