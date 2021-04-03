import * as React from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function TodaysVendorsScreen() {
  return (
    <ScrollView style={styles.parent}>
      <View style={styles.hview}>
        <Text style={styles.tview}>Today's Vendors</Text>
      </View>
    </ScrollView>
  )
}

function PopUpScreen() {
  return (
    <ScrollView style={styles.parent}>
      <View style={styles.hview}>
        <Text style={styles.tview}>Pop-Up (Seasonal)</Text>
      </View>
    </ScrollView>
  )
}

function CommunityVendorsScreen() {
  return (
    <ScrollView style={styles.parent}>
      <View style={styles.hview}>
        <Text style={styles.tview}>Community Vendors</Text>
      </View>
    </ScrollView>
  )
}

function AllVendorsScreen() {
  return (
    <ScrollView style={styles.parent}>
      <View style={styles.hview}>
        <Text style={styles.tview}>All Vendors</Text>
      </View>
    </ScrollView>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Landing"
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  );
}

function LandingScreen({ navigation }) {
  return (
    <ScrollView style={styles.parent}>
      <View style={styles.hview}>
        <Text style={styles.tview}>Georgetown University{"\n"}Farmer's Market</Text>
      </View>

      <View style={styles.twobuttons}>
        <TouchableOpacity
          style={styles.gridbutton}
          onPress={() => navigation.push('TodaysVendors')}>
          <Text style={styles.buttontext}>Today's Vendors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridbutton}
          onPress={() => navigation.push('PopUp')}>
          <Text style={styles.buttontext}>Pop-Up (Seasonal)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.twobuttons}>
        <TouchableOpacity
          style={styles.gridbutton}
          onPress={() => navigation.push('CommunityVendors')}>
          <Text style={styles.buttontext}>Community Vendors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridbutton}
          onPress={() => navigation.push('AllVendors')}>
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Landing" component={LandingScreen}/>
        <Stack.Screen name="TodaysVendors" component={TodaysVendorsScreen}/>
        <Stack.Screen name="PopUp" component={PopUpScreen}/>
        <Stack.Screen name="CommunityVendors" component={CommunityVendorsScreen}/>
        <Stack.Screen name="AllVendors" component={AllVendorsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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