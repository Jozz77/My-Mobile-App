import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const YourApp = () => {
  const [todo, setTodo] = useState([
    { name: "Mellon", key: 1 },
    { name: "Goody", key: 2 },
    { name: "Sonny", key: 3 },
    { name: "Marion", key: 4 },
    { name: "rob", key: 5 },
    { name: "now", key: 6 },
  ]);

  // const changeName = () => {
  //   setName("Jonathan");
  // };
  return (
    <View style={styles.container}>
      {/* header */}
      <View></View>

      {/* content */}
      <View style={styles.content}>

      </View>
      <TextInput
        style={styles.input}
        placeholder="new text"
        onChangeText={(newName) => setName(newName)}
      />
      <TextInput
        style={styles.input}
        placeholder="new text"
        keyboardType="numeric"
        onChangeText={(myAge) => setAge(myAge)}
      />

      {/* flatlist */}
      <FlatList 
      data={guys}
      renderItem={({ item }) => (
        <Text style={styles.guy}>{item.name}</Text>
      )}
      />
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  text: {
    color: "#b43654",
    fontSize: 20,
    padding: 10,
  },
  guy: {
    color: "blue",
    fontSize: 30,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginVertical: 20,
    backgroundColor: "red"
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    margin: 10,
    padding: 7,
    borderRadius: 6,
  },
});
