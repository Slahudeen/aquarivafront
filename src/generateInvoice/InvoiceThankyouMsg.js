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
        bottom:30,
        paddingLeft:35,
        marginRight:-50
    },
    titleContainer3: {
        fontSize:6,
        flexDirection: 'row',
        position:'absolute',
        bottom:50,
        paddingLeft:35,
        marginRight:-50
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
    footer: {
        fontSize: 7,
        textAlign: 'left',
    }
});

const InvoiceThankYouMsg = () => (
    <Fragment>
    <View style={styles.titleContainer}>
        <Text style={styles.reportText}>Bankverbindung: SPARKASSE RHEIN NECKAR NORD </Text>
        <Text style={styles.reportText}>IBAN: DE06 6705 0505 0040 2145 42 </Text>
        <Text style={styles.reportText}>BIC: MANSDE66XXX</Text>
        {/* <Text style={styles.reportTitle}>*** Vielen Dank ***</Text> */}
        
        </View>
        <View fixed style={styles.titleContainer3}>
        <Text style={styles.footer}>AQUA ARIVA GmbH                             Tel:-   0621-80619920          aquaariva@t-online.de     Steuer-Nr.                Amtsgericht Mannheim      Geschäftsführer</Text>
        </View>
        <View fixed style={styles.titleContainer2}>
        <Text style={styles.footer}>Marie Curie str.24, 68219 Mannheim    Handy:- 0176-15828582      www.aqua-ariva.de          Ust.IdNr.                   HRB745091                       Faiq Rasheed</Text>
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
    </Fragment>
);

export default InvoiceThankYouMsg;