import React, { useState } from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeStyles from '../HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';
import GUTSStyles from '../GUTSStyles.js'; 
import Home from './Home';

const GUTS = ({navigation}) => {
    const {width, height} = Dimensions.get('window');
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style= {{marginVertical: height * .01}}>

                </View>
                <StatusBar style="auto" />
                <TouchableOpacity activeOpacity={0.8} style={GUTSStyles.GutsTransportBox}>
                    
                    <Text style={GUTSStyles.LocationText}>DUPONT</Text>
                    {/* <Text style={GUTSStyles.vector}></Text> */}
                    {/* <Image source={logo} style={{width: 180, height: 40, resizeMode: "contain"}} /> */}
    
                    
                    <View style={{flexDirection: 'row',}}>
                        <View style= {GUTSStyles.Rectangle1}/> 
                        <View> 
                            <Text style={GUTSStyles.SubheadText}>Arrival</Text>
                            <Text style={GUTSStyles.SmallText}>Bus Turnaround {'\n'}6:00AM</Text>
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <View style= {GUTSStyles.Rectangle2}/>
                        <View>
                            <Text style={GUTSStyles.SubheadText}>Departure</Text>
                            <Text style={GUTSStyles.SmallText}>20th Street and Massachusetts Avenue, NW {'\n'}6:15AM</Text>
                        </View>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={GUTSStyles.GutsTransportBox}>
                    
                    <Text style={GUTSStyles.LocationText}>ROSSLYN</Text>
                    {/* <Text style={GUTSStyles.vector}></Text> */}
                    {/* <Image source={logo} style={{width: 180, height: 40, resizeMode: "contain"}} /> */}
    
                    
                    <View style={{flexDirection: 'row',}}>
                        <View style= {GUTSStyles.Rectangle1}/> 
                            <View> 
                                <Text style={GUTSStyles.SubheadText}>Arrival</Text>
                                <Text style={GUTSStyles.SmallText}>Bus Turnaround {'\n'}4:45AM</Text>
                            </View>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <View style= {GUTSStyles.Rectangle2}/>
                        <View>
                            <Text style={GUTSStyles.SubheadText}>Departure</Text>
                            <Text style={GUTSStyles.SmallText}>19th Street and North Moore Street {'\n'}5:00AM</Text>
                        </View>
                    </View>
                    
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

export default GUTS;