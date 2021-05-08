import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const CommunityVendors = ({navigation}) => {
return (
    <ScrollView>
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
    </ScrollView>
);
}

export default CommunityVendors;

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