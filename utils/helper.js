import {Linking} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
//helper functions go here

export async function openURL( url ) {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
          WebBrowser.openBrowserAsync(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      })
}