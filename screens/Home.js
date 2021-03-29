import React, { useState } from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeStyles from '../HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({navigation}) => {
    const {width, height} = Dimensions.get('window');
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style= {{marginVertical: height * .01}}>

                </View>
                <StatusBar style="auto" />
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer1}>
                    <Text style={HomeStyles.ButtonText1}>GUTS Bus</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer2}>
                    <Text style={HomeStyles.ButtonText1}>Check Flex Dollars</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer1}>
                    <Text style={HomeStyles.ButtonText1}>Building Access Card</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer2}>
                    <Text style={HomeStyles.ButtonText1}>Dining Options</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer1}>
                    <Text style={HomeStyles.ButtonText1}>GU Farmer's Market</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'space-evenly'
    },
});

export default Home;