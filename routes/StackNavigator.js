import React, {useState} from 'react';
import { Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/Georgetown_logotype_S_blueRGB-300x64.png';
import announcements from '../assets/notification 2.png';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from '../screens/Home';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

const StackNavigatorMain = () =>(
    <Stack.Navigator>
        <Stack.Screen
        name="Home" 
        component={Home} 
        options={({navigation}) => ({
            headerStyle: {
                backgroundColor: '#C4C4C4',
                height: height * .15,
            },
            headerRight: () => (
                <MaterialCommunityIcons name="bell-ring" size={33} color="white" style={{marginHorizontal: 30}}/>
            ),
            headerTitle: () => (
                <Image source={logo} style={{width: 180, height: 40, resizeMode: "contain"}} />
            ),
            
        })}/>
    </Stack.Navigator>
);

export default stackNavigator = () => {
    return(
        <NavigationContainer>
            <StackNavigatorMain/>
        </NavigationContainer>
    );
};
  