import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.hview}>
      <Text style={styles.tview}>Georgetown University{"\n"}Farmer's Market</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hview: {
    backgroundColor: '#1B1513ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    paddingHorizontal: 40,
  },
  tview: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
    textAlign: 'center',

  }
});
