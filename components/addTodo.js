import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function addTodo( {submitHandler} ) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='New Todo...'
      onChangeText={changeHandler}
      />
      <Button title='Add Todo' color='blue'  onPress={() => submitHandler(text) }/>
      {/* <Text>{text}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontSize: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
        marginVertical: 10,
    }
})