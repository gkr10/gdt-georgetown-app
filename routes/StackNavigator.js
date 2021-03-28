import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const Stack = createStackNavigator();

const StackNavigatorMain = () =>(
    <Stack.Navigator headerMode="none">
        <Stack.Screen
        name="Home" 
        component={Home} />
    </Stack.Navigator>
);

export default stackNavigator = () => {
    return(
        <NavigationContainer>
            <StackNavigatorMain/>
        </NavigationContainer>
    );
};
  
