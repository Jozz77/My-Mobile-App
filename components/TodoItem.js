import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressButton } ) {
  return (
    <TouchableOpacity onPress={() => pressButton(item.key)}>
      <Text style={styles.item}> {item.name} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'dotted',
        margin: 20,
        padding: 10,
        fontSize: 16,
    }
})
