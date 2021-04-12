import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './routes/StackNavigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const loadFonts = () => {
  return Font.loadAsync({
  'SourceSansPro-Black': require('./assets/fonts/SourceSansPro-Black.ttf'),
  'SourceSansPro-BlackItalic': require('./assets/fonts/SourceSansPro-BlackItalic.ttf'),
  'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
  'SourceSansPro-BoldItalic': require('./assets/fonts/SourceSansPro-BoldItalic.ttf'),
  'SourceSansPro-ExtraLight': require('./assets/fonts/SourceSansPro-ExtraLight.ttf'),
  'SourceSansPro-ExtraLightItalic': require('./assets/fonts/SourceSansPro-ExtraLightItalic.ttf'),
  'SourceSansPro-Italic': require('./assets/fonts/SourceSansPro-Italic.ttf'),
  'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
  'SourceSansPro-LightItalic': require('./assets/fonts/SourceSansPro-LightItalic.ttf'),
  'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  'SourceSansPro-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
  'SourceSansPro-SemiBoldItalic': require('./assets/fonts/SourceSansPro-SemiBoldItalic.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

   if (!fontLoaded){
     return(
       <AppLoading
         startAsync={loadFonts}
         onFinish={() => setFontLoaded(true)}
         onError={(err) => console.error(err)}
       />
     )}
    else{
      return (
        <StackNavigator />
      )
    }
    

      
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
