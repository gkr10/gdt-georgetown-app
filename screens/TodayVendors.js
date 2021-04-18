import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const TodayVendors = ({navigation}) => {
return (
    <ScrollView>
        <View>
            <Text style={{marginTop: 25, fontSize: 26, alignSelf: 'center'}}>- Today's Vendors -</Text>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>[Logo]</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Ashton Farms</Text>
                <Text style={styles.itemtext}>Peaches {'&'} other orchard fruits</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>[Logo]</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Borekg Turkish</Text>
                <Text style={styles.itemtext}>Gyros {'&'} chicken</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Bun'd Up</Text>
                <Text style={styles.itemtext}>Hand made buns</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Call Your Mother</Text>
                <Text style={styles.itemtext}>Bagels {'&'} breakfast sandwiches</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Craft Kombucha</Text>
                <Text style={styles.itemtext}>Locally bottled kombucha tea</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>[Logo]</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Cucina al Volo</Text>
                <Text style={styles.itemtext}>Porchetta {'&'} burrata</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>[Logo]</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>DMV Empanadas</Text>
                <Text style={styles.itemtext}>Handmade empanadas</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Grandma Vera's</Text>
                <Text style={styles.itemtext}>South American inspired dishes</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Les Caprices de Joelle</Text>
                <Text style={styles.itemtext}>Paella {'&'} waffles</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Maracas Ice Pops</Text>
                <Text style={styles.itemtext}>The ultimate ice pop</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>[Logo]</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Panorama Bakery</Text>
                <Text style={styles.itemtext}>Artisan baker</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>[Logo]</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Rita's Crepes</Text>
                <Text style={styles.itemtext}>Sweet {'&'} savory crepes</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Swizzler</Text>
                <Text style={styles.itemtext}>Premium hotdogs {'&'} hamburgers</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Timber Pizza Co.</Text>
                <Text style={styles.itemtext}>Wood-fired pizza</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Twin Springs Fruit Market</Text>
                <Text style={styles.itemtext}>Home grown produce</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Yoga in a Bowl</Text>
                <Text style={styles.itemtext}>Gourmet Indian curries</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
);
}

export default TodayVendors;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    logocont: {
        marginTop: 20,
        borderRadius: 0,
        height: 180,
        width: 180,
        backgroundColor: '#1c1b19',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    griditem: {
        marginTop: 20,
        borderRadius: 10,
        height: 180,
        width: 240,
        backgroundColor: '#3b4540',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    itemheader: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#ffffff',
    },
    itemtext: {
        flex: 3,
        fontSize: 14,
        color: '#ffffff',
        marginHorizontal: 5,
    }
})