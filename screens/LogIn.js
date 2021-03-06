import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
  Alert,
  Linking,
  KeyboardAvoidingView,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import HomeStyles from "../styles/HomeStyles";
import { LinearGradient } from "expo-linear-gradient";
import * as Home from "./Home";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { openURL } from "../utils/helper";

const LogIn = ({ navigation }) => {
  const [netId, onChangeNetId] = React.useState("");
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [goCardNumber, onChangeGoCardNumber] = React.useState("");
  const LOGIN_HELP_URL = "https://uis.georgetown.edu/netid-passwords/";

  async function validate() {
    if (netId.length == 0 || firstName.length == 0 || lastName.length == 0) {
      Alert.alert("Fields cannot be empty!");
    } else {
      //changes can be stored in global variable
      navigation.navigate({
        name: "Home",
        params: {
          netId: netId,
          firstName: firstName,
          lastName: lastName,
          goCardNumber: goCardNumber,
        },
        merge: true,
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.area}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        ></KeyboardAvoidingView>
        <Text style={styles.title}>Profile</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNetId}
          value={netId}
          placeholder="NetID"
          keyboardType="email-address"
          autoCorrect={false}
          autoCompleteType="off"
          autoCapitalize="none"
          maxLength={40}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeGoCardNumber}
          value={goCardNumber}
          placeholder="GoCard Number"
          keyboardType="numeric"
          autoCorrect={false}
          autoCompleteType="off"
          autoCapitalize="none"
          maxLength={40}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="First Name"
          keyboardType="default"
          maxLength={100}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Last Name"
          keyboardType="default"
          maxLength={100}
        />
        <Button title="Save" color="#041E42" onPress={validate} />
        <Button
          title="Help"
          color="#041E42"
          onPress={() => openURL(LOGIN_HELP_URL)}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    borderColor: "#041E42",
    fontFamily: "SourceSansPro-Regular",
    padding: "3%",
  },
  area: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "SourceSansPro-SemiBold",
    margin: 20,
    color: "#041E42",

    //justifyContent: 'space-evenly'
  },
});

export default LogIn;
