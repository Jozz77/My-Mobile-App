import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo App</Text>
      {/* <Text style={styles.title}>Welcome!!!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    padding: 10,
    // flex: 1,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  },
});
