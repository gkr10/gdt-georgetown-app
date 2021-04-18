import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const PopUpVendors = ({navigation}) => {
return (
    <ScrollView>
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

export default PopUpVendors;

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