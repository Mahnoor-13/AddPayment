import { StatusBar } from "expo-status-bar";
import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import AddPayment from "./Components/AddPayment";
import Picker from "./Components/Picker"


export default function App() {
  return (
    <View style={styles.container}>
      <AddPayment />
      {/* <Picker/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C31",
  },
});
