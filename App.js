import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.parent}>
      <View style={styles.hview}>
        <Text style={styles.tview}>Georgetown University{"\n"}Farmer's Market</Text>
      </View>

      <View style={styles.twobuttons}>
        <TouchableOpacity
          onPress={console.log("Button Pressed")}
          style={styles.gridbuttonL}>
          <Text style={styles.buttontext}>Today's Vendors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={console.log("Button Pressed")}
          style={styles.gridbuttonR}>
          <Text style={styles.buttontext}>Pop-Up (Seasonal)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.twobuttons}>
        <TouchableOpacity
          onPress={console.log("Button Pressed")}
          style={styles.gridbuttonL}>
          <Text style={styles.buttontext}>Community Vendors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={console.log("Button Pressed")}
          style={styles.gridbuttonR}>
          <Text style={styles.buttontext}>All Vendors</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={console.log("Button Pressed")}
        style={styles.todaylayout}>
          <Text style={styles.buttontext}>Today's Layout</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

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
  gridbuttonL: {
    marginTop: 50,
    alignSelf: 'center',
    marginRight: 20,
    height: 140,
    width: 190,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#725B45',
  },
  gridbuttonR: {
    marginTop: 50,
    alignSelf: 'center',
    height: 140,
    width: 190,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingTop: 30,
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
