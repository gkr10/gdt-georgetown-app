import React, { useState } from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Modal, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeStyles from '../HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';
import GUTSStyles from '../GUTSStyles';
// import creditCard from '../assets/credit-card-black-png-0.png';
import FlexDollarsStyles from '../FlexDollarsStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { BlurView } from 'expo-blur';
import * as WebBrowser from 'expo-web-browser';

const Home = ({navigation}) => {
    const {width, height} = Dimensions.get('window');
    const [flexDollarsModalVisible, setFlexDollarsModalVisible] = useState(false);
    return (
        <SafeAreaView>
        {/* <BlurView intensity={50} tint='dark'> */}
        
        
            <View style={[styles.container, (flexDollarsModalVisible ? {backfaceVisibility:0} : null)]}>
                <View style= {{marginVertical: height * .01}}>

                </View>
                <StatusBar style="auto" />
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer1} 
                onPress={()=> navigation.push("GUTS")}>
                    <Text style={HomeStyles.ButtonText1}>GUTS Bus</Text>
                </TouchableOpacity>
                {/* <BlurView intensity={100} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
          <Text style={{fontSize:'25'}}>Hello! I am bluring contents underneath</Text>
        </BlurView> */}
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer2}
                onPress={()=> {
                    setFlexDollarsModalVisible(true);
                }}>
                    <Text style={HomeStyles.ButtonText1}>Check Flex Dollars</Text>
                </TouchableOpacity>

                <Modal  
                animationType="slide" transparent={true} visible={flexDollarsModalVisible}>
                <BlurView tint='dark' intensity={100} style={StyleSheet.absoluteFill}>

                    <View style={FlexDollarsStyles.modal}>
                        <TouchableOpacity                
                            onPress={() => {
                                setFlexDollarsModalVisible(!flexDollarsModalVisible);
                            }}>
                            {/* <Text style={GUTSStyles.hideButton}>Hide</Text> */}
                            <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft: '7%', marginTop: '5%'}} />
                        </TouchableOpacity> 
                        <Text style={GUTSStyles.dupontTimes}>Flex Dollars</Text>
                        
                            {/* <Image source={creditCard} style={{width: 180, height: 40, resizeMode: "contain"}}/> */}
                        <View style = {FlexDollarsStyles.dollarsBox}>
                            <View style={FlexDollarsStyles.wrapper}>
                                <AntDesign name="creditcard" size={24} color="black" />
                                <Text style={FlexDollarsStyles.dollarsText}>$94.06</Text>
                            </View>
                            <Text style={FlexDollarsStyles.dollarsBoxSmallerText}>Debit Dollars</Text>
                        </View>
                        <View style = {FlexDollarsStyles.dollarsBox}>
                        <View style={FlexDollarsStyles.wrapper}>
                                <AntDesign name="creditcard" size={24} color="black" />
                                <Text style={FlexDollarsStyles.dollarsText}>$12.31</Text>
                            </View>
                            <Text style={FlexDollarsStyles.dollarsBoxSmallerText}>Laundrey and Print Account</Text>

                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>
                            <View style = {FlexDollarsStyles.buttonBox}>
                            <TouchableOpacity
                            onPress={() => {
                                setFlexDollarsModalVisible(!flexDollarsModalVisible);
                               WebBrowser.openBrowserAsync('https://eacct-georgetown-sp.transactcampus.com/GOCard/');
                            }}
                            >
                                <Text style={FlexDollarsStyles.buttonText}>Add Money</Text>
                            </TouchableOpacity>
                                
                            </View>
                            <View style = {FlexDollarsStyles.buttonBox}>
                                <TouchableOpacity
                                onPress={() => {
                                    setFlexDollarsModalVisible(!flexDollarsModalVisible);
                                    WebBrowser.openBrowserAsync('https://eacct-georgetown-sp.transactcampus.com/GOCard/');
                                }}
                                >
                                    <Text style={FlexDollarsStyles.buttonText}>Account History</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                    </BlurView>
                </Modal>
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
            {/* </BlurView> */}
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