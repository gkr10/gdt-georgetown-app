import React, {useState} from 'react';
import { Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/Georgetown_logotype_S_blueRGB-300x64.png';
import announcements from '../assets/notification 2.png';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from '../screens/Home';
import LogIn from '../screens/LogIn';
import GUTS from '../screens/GUTS';
import Announcement from '../screens/Announcement';
import Dining from '../screens/Dining';
import Leos from '../screens/DiningOptions/Leos'; 
import LeosMKT from '../screens/DiningOptions/LeosMKT';  
import RoyalJacket from '../screens/DiningOptions/RoyalJacket';
import Hilltoss from '../screens/DiningOptions/Hilltoss';
import LandingScreen from '../screens/landing_page';
import AllVendors from '../screens/AllVendors';
import TodayVendors from '../screens/TodayVendors';
import PopUpVendors from '../screens/PopUpVendors';
import CommunityVendors from '../screens/CommunityVendors';

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
        <Stack.Screen
        name="LogIn" 
        component={LogIn} 
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
        <Stack.Screen
        name="GUTS" 
        component={GUTS} 
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

        <Stack.Screen
        name="Announcement" 
        component={Announcement} 
        options={({navigation}) => ({
            headerStyle: {
                backgroundColor: '#C4C4C4',
                height: height * .15,
            },
            headerRight: () => (
                <MaterialCommunityIcons name="bell-ring" size={33} color="white" style={{marginHorizontal: 30}}/>
            ),
            headerTitle: () => (
                <Text style={{fontSize: 30,
                    fontFamily: 'SourceSansPro-SemiBold', color: '#041E42'}}>Announcements</Text>
            ),
            
        })}/>

        <Stack.Screen
            name="Dining" 
            component={Dining} 
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

        <Stack.Screen
            name="Leo's" 
            component={Leos} 
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

        <Stack.Screen
            name="Leo's Market" 
            component={LeosMKT} 
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

    <Stack.Screen
            name="Royal Jacket Deli" 
            component={RoyalJacket} 
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

    <Stack.Screen
            name="Hilltoss" 
            component={Hilltoss} 
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
        <Stack.Screen
        name="LandingScreen" 
        component={LandingScreen} 
        options={({navigation}) => ({
            headerStyle: {
                backgroundColor: '#45413b',
                height: height * .1,
            },
            headerTitle: "GU Farmer's Market",
            headerTintColor: '#fff',
        })}/>
        <Stack.Screen
        name="AllVendors" 
        component={AllVendors} 
        options={({navigation}) => ({
            headerStyle: {
                backgroundColor: '#45413b',
                height: height * .1,
                
            },
            headerTitle: "All Vendors",
            headerTintColor: '#fff',
        })}/>
        <Stack.Screen
        name="TodayVendors" 
        component={TodayVendors} 
        options={({navigation}) => ({
            headerStyle: {
                backgroundColor: '#45413b',
                height: height * .1,
                
            },
            headerTitle: "Today's Vendors",
            headerTintColor: '#fff',
        })}/>
        <Stack.Screen
        name="PopUpVendors" 
        component={PopUpVendors} 
        options={({navigation}) => ({
            headerStyle: {
                backgroundColor: '#45413b',
                height: height * .1,
                
            },
            headerTitle: "Pop-Up Vendors (Seasonal)",
            headerTintColor: '#fff',
        })}/>
        <Stack.Screen
        name="CommunityVendors" 
        component={CommunityVendors} 
        options={({navigation}) => ({
            headerStyle: {
                backgroundColor: '#45413b',
                height: height * .1,
                
            },
            headerTitle: "Georgetown Community Vendors",
            headerTintColor: '#fff',
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
  
