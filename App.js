import React from "react";
import { StyleSheet, Text, View } from "react-native";

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yaaaaaahhhh, my 🎉</Text>
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  text: {
    color: "#b43654",
    fontSize: 30,
    padding: 10,
  },
});
