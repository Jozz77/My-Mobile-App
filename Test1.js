import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Test = () => {
  const [name, setName] = useState("mella");
  const [age, setAge] = useState("10");
  const [guys, setGuys] = useState([
    { name: "Mellon", id: 1 },
    { name: "Goody", id: 2 },
    { name: "Sonny", id: 3 },
    { name: "Marion", id: 4 },
    { name: "rob", id: 5 },
    { name: "vow", id: 6 },
  ]);

  const changeName = () => {
    setName("Jonathan");
  };

  const pressButton = (id) => {
    setGuys((prevGuys) => {
      return prevGuys.filter(guy => guy.id != id)
    })
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Yaaaaaahhhh, my name is {name} 🎉</Text>
      <Text style={styles.text}>Yaaaaaahhhh, my age is {age}</Text>
      <View>
        <Button title="New button" onPress={changeName} />
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

      {/* scroll view */}
      {/* <ScrollView>
        {guys.map( guy => (
            <View key={guy.key}>
              <Text style={styles.guy}>{guy.name}</Text>
            </View>
          )
      )}
      </ScrollView> */}

      {/* flatlist */}
      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={guys}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressButton(item.id)}>
        <Text style={styles.guy}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
    // </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    paddingVertical: 50,
  },
  text: {
    color: "#b43654",
    fontSize: 20,
    padding: 10,
  },
  guy: {
    color: "blue",
    fontSize: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginVertical: 20,
    marginHorizontal: 5,
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
