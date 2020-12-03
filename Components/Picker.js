import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  state = {
    language: "java",
  };

  return (
    <ScrollView style={{ width: "100%" }}>
      <Text>Hello</Text>

      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ language: itemValue })
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  SelectPetButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    // width: 220,
  },
});
