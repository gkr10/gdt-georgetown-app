import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import HomeStyles from '../HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({navigation}) => {
    const {width, height} = Dimensions.get('window');
    const [accessCardModal, setAccessCardModal] = useState(false);

    const getCurrentDate=()=>{
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return date + '/' + month + '/' + year;//format: dd-mm-yyyy;
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Modal
                    animationType = "slide"
                    transparent = {true}
                    //backgroundOpacity = {0.5}
                    hasBackdrop = {true}
                    backdropOpacity={0.7}
                    backdropColor="black"
                    isVisible = {accessCardModal}
                    onBackdropPress={() => setAccessCardModal(!accessCardModal)}>
                    <View style = {HomeStyles.modalView}>
                        <Text style = {HomeStyles.modalTextTitle}>GoCard Information</Text>
                        <Text style = {HomeStyles.modalText}>First Name:</Text>
                        <Text style = {HomeStyles.modalText}>Last Name:</Text>
                        <Text style = {HomeStyles.modalText}>Today's Date: {getCurrentDate()}</Text>
                        <Text style = {HomeStyles.modalText}>GoCard Number:</Text>
                    </View>
                </Modal>
                <View style= {{marginVertical: height * .01}}>

                </View>
                <StatusBar style="auto" />
                <TouchableOpacity activeOpacity={0.8} onPress = {() => navigation.navigate('GUTS')} style={HomeStyles.ButtonContainer1}>
                    <Text style={HomeStyles.ButtonText1}>GUTS Bus</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={HomeStyles.ButtonContainer2}>
                    <Text style={HomeStyles.ButtonText1}>Check Flex Dollars</Text>
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.8} onPress = {() => setAccessCardModal(!accessCardModal)} style={HomeStyles.ButtonContainer1}>
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