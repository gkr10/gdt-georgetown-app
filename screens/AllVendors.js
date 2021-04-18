import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const AllVendors = ({navigation}) => {
return (
    <ScrollView>
        <View>
            <Text style={{marginTop: 25, fontSize: 26, alignSelf: 'center'}}>- Vendors -</Text>
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

        <View>
            <Text style={{marginTop: 25, fontSize: 26, alignSelf: 'center'}}>- Georgetown Community Vendors -</Text>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Georgetown Bubble</Text>
                <Text style={styles.itemtext}>Student-run bubble tea company</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Oneil's Famous Jerk</Text>
                <Text style={styles.itemtext}>Authentic Jamaican jerk chicken</Text>
            </TouchableOpacity>
        </View>

        <View>
            <Text style={{marginTop: 25, fontSize: 26, alignSelf: 'center'}}>- 
Pop-Up Vendors (Once a Season)
 -</Text>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Pearl Fine Teas (March 13th)</Text>
                <Text style={styles.itemtext}>Fine teas</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Phil's Dills (March 20th)</Text>
                <Text style={styles.itemtext}>Gourmet pickles</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Yufka Bakery (March 20th {'&'} April 17th)</Text>
                <Text style={styles.itemtext}>Vegan desserts {'&'} foods</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Lost Sock Roasters (March 27th)</Text>
                <Text style={styles.itemtext}>Artisanal coffee</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Muggerz BBQ (March 27th)</Text>
                <Text style={styles.itemtext}>Barbeque meat</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>O earth (April 3rd {'&'} April 17th)</Text>
                <Text style={styles.itemtext}>Gluten free bread and pastries</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Lynnette's (April 3rd)</Text>
                <Text style={styles.itemtext}>[no information yet]</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Dodah's (April 10th {'&'} April 24th)</Text>
                <Text style={styles.itemtext}>Vegan desserts {'&'} foodst</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>VegHeaven (April 10th)</Text>
                <Text style={styles.itemtext}>Vegetable based entrees</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Greenheart Juice (April 17th)</Text>
                <Text style={styles.itemtext}>Cold-pressed juices</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.column}>
            <TouchableOpacity style={styles.logocont}>
                <Text style={{alignSelf: 'center', color: '#ffffff'}}>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.griditem}>
                <Text style={styles.itemheader}>Mesisam (April 24th)</Text>
                <Text style={styles.itemtext}>Ethiopia entrees</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
);
}

export default AllVendors;

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