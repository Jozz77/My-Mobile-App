import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/addTodo";

const Todo = () => {
  const [todos, setTodos] = useState([
    { name: "Mellon is drinking", key: 1 },
    { name: "Goody is playing", key: 2 },
    { name: "Sonny is good", key: 3 },
    { name: "Marion was bad", key: 4 },
    { name: "rob is nice", key: 5 },
    { name: "now or never", key: 6 },
  ]);

  const pressButton = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  };
  const submitHandler = (text) => {
   if (text.length > 3) {
    setTodos((prevTodos) => {
      return [
        {name: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
   } else {
    Alert.alert("Ohhh!", "Your character is too short"), [
      {text: 'Yeah', onPress: () => console.log('alert closed')}
    ]
   }
  }

  return (
   <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss
   }}>
     <View style={styles.container}>
      {/* header */}
      <Header />
      <View></View>

      {/* content */}
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list} >
          {/* flatlist */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item  } pressButton={pressButton} />
            )}
          />
        </View>
      </View>
    </View>
   </TouchableWithoutFeedback>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "pink",
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  todo: {
    flex: 1,
    color: "blue",
    fontSize: 20,
    marginTop: 10,
    // paddingHorizontal: 100,
    // paddingVertical: 20,
    // marginVertical: 20,
    // backgroundColor: "red",
  },
});
