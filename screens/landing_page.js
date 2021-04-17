import * as React from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const LandingScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.parent}>

      <View style={styles.twobuttons}>
        <TouchableOpacity
          style={styles.gridbutton}>
          <Text style={styles.buttontext}>Today's Vendors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridbutton}>
          <Text style={styles.buttontext}>Pop-Up (Seasonal)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.twobuttons}>
        <TouchableOpacity
          style={styles.gridbutton}>
          <Text style={styles.buttontext}>Community Vendors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridbutton}>
          <Text style={styles.buttontext}>All Vendors</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.todaylayout}>
          <Text style={styles.buttontext}>Today's Layout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  todaylayout: {
    marginTop: 50,
    alignSelf: 'center',
    height: 250,
    width: 400,
    borderRadius: 35,
    alignItems: 'center',
    paddingTop: 25,
    backgroundColor: '#725B45',
  },
  twobuttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gridbutton: {
    marginTop: 50,
    alignSelf: 'center',
    height: 140,
    width: 190,
    borderRadius: 35,
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    backgroundColor: '#725B45',
  },
  buttontext: {
    fontSize: 20,
    color: '#ffffff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  hview: {
    backgroundColor: '#40322E',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    paddingVertical: 30,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
    position: 'relative',
    paddingHorizontal: 40,
  },
  tview: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  parent: {
    flex: 1,
  }
});