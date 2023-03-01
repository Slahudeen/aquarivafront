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
        <Text>Sehr geehrte Geschäftspartner,</Text>
        <Text> </Text>
        <Text>Gerade in Zeiten wie diesen, die von globalen Unruhen und sich ständig ändernden Rahmenbedingungen geprägt sind, ist es für uns wichtig Ihnen eine kompromisslose Qualität zu bieten. Die hohe Qualität gepaart mit ihrem Vertrauen und der langfristigen Partnerschaft sind die wesentlichen Bausteine für unseren gemeinsamen Erfolg mit Ihnen.Trotz aller Umständen und mit ihnen erstandenen Unsicherheiten, die uns weiterhin begleiten, haben wir es geschafft unsere außergewöhnlich gute Zusammenarbeit mit Ihnen weiter zu festigen.</Text>
        <Text> </Text>
        <Text>Wie Sie sicher feststellen konnten, haben wir es geschafft seit 2015 unsere preise konstant zu halten, da uns Ihre Zufriedenheit gepaart mit Ihrem Vertrauen wichtiger ist als alles andere, aber leider sind auch wir nun von den Preisexplosionen im Energiesektor (Benzin, Erdgas, Öl und Strom) betroffen. Trotz ständiger Optimierung der Geschäftsprozesse konnten wir die Preisexplosionen nur marginal kompensieren.</Text>
        <Text> </Text>
        <Text>Aus diesem Grund sind wir nun leider gezwungen unsere Preise um mindestens 15% ab Februar 2023 zu erhöhen.</Text>
        <Text> </Text>
        <Text>Wir freuen uns auf eine weiterhin gute und erfolgreiche Zusammenarbeit mit ihnen und sind überzeugt, dass wir auch in den aktuellen herausfordernden Zeiten unseren gemeinsamen Erfolg mit Ihnen ausbauen und für die Zukunft festigen werden.</Text>
        <Text> </Text>
        <Text>Für weitere Fragen stehen wir Ihnen gerne zur Verfügung.</Text>
        <Text> </Text>
        <Text>Mit freundlichen Grüßen</Text>
        <Text>AQUA ARIVA</Text>
        <Text>Marie-Curie-Straße 24</Text>
        <Text>68219 Mannheim</Text>
        <Text>0621-80 61 99 20</Text>
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