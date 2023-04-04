import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 15,
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
    content: {
        fontSize: 12
    },
    reportTitle: {
        color: 'red',
        letterSpacing: 1,
        fontSize: 13,
        textAlign: 'center',
        textDecoration: 'underline'
        
    },
    comapnydetails: {
        textDecoration: 'underline'
        
    },
});

const InvoiceThankYouMsg = ({ invoice }) => (
    <Fragment style={styles.titleContainer}>
        <View fixed >
        <Text>{invoice.details}</Text>
        </View>
        <View fixed style={styles.titleContainer}>
        <Text>Sehr geehrte Damen und Herren,</Text>
        <Text> </Text>
        <Text>bei der Überprüfung unserer Zahlungseingänge haben wir festgestellt, dass folgende Rechnung aus dem Jahr 2023 immer noch nicht von Ihnen beglichen ist.</Text>
        <Text> </Text>
        <Text>Rechnung Nr.:            {invoice.invoice_no}                        vom {invoice.date}</Text>
        <Text> </Text>
        <Text style={styles.comapnydetails}>Summe Forderungsbetrag                                                         {invoice.amount}€  .</Text>
        <Text> </Text>
        <Text>Wir bitten um schnellstmöglichen Ausgleich dieses Forderungsbetrages auf unser Konto bei der  </Text>
        <Text> </Text>
        <Text style={styles.reportTitle}>Sparkasse Rhein Neckar Nord</Text>
        <Text style={styles.reportTitle}>IBAN.- DE06 6705 0505 0040 2145 42</Text>
        <Text style={styles.reportTitle}>BIC:- MANSDE66XXX</Text>
        <Text> </Text>
        <Text>zu überwiesen.</Text>
        <Text> </Text>
        <Text>Wir möchten Sie bitten, in Zukunft unsere Rechnungen zeitnah zu begleichen.</Text>
        <Text>Sollte sich Ihre Zahlung mit diesem Schreiben überschnitten haben, so sehen Sie dieses Schreiben bitte als gegenstandslos an.</Text>
        <Text> </Text>
        <Text>Mit freundlichen Grüßen</Text>
        <Text>AQUA ARIVA GmbH</Text>
        {/* <Text>Marie-Curie-Straße 24</Text>
        <Text>68219 Mannheim</Text>
        <Text>0621-80 61 99 20</Text> */}
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