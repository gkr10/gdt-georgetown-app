import {Linking} from 'react-native';
//helper functions go here

export async function openURL( url ) {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      })
}