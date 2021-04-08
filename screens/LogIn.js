import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Modal, Button, Alert, Linking} from 'react-native';
import { Table, TableWrapper, Cell, Row, Rows, Col, Cols } from 'react-native-table-component';
import { StatusBar } from 'expo-status-bar';
import HomeStyles from '../styles/HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './Home';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {openURL} from '../utils/helper';

const LogIn = ({navigation}) =>{
    const [netId, onChangeNetId] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const PASSWORD_HELP_URL = 'https://uis.georgetown.edu/password/';
    
    async function validate(){
        if(netId.length==0 || password.length ==0){
            Alert.alert('Fields cannot be empty!')
        }
        else{
            //changes can be stored in global variable
            navigation.navigate('Home')
        }
    }




    return (
        <SafeAreaView style={styles.area}>
    <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNetId}
        value={netId}
        placeholder="NetID"
        keyboardType="email-address"
        autoCorrect={false}
        autoCompleteType="off"
        autoCapitalize='none'
        maxLength={40}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
        maxLength={100}
      />
      <Button
        title="Log In"
        color="#041E42"
        onPress={validate}
      />
      <Button
        title="Forgot your password?"
        color="#041E42"
        onPress={() => openURL(PASSWORD_HELP_URL)}
      />
      
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    margin: 12,
    borderWidth: 3,
    borderRadius: 10
  },
  area:{
    alignItems: 'center',
    top: '25%'
  },
    title: {
      fontSize: 30,
      fontFamily: 'SourceSansPro-SemiBold',
      margin: 20,
      
      //justifyContent: 'space-evenly'
    },
});

export default LogIn;