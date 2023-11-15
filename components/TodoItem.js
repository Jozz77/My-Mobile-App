import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoItem({ item, pressButton } ) {
  return (
    <TouchableOpacity onPress={() => pressButton(item.key)}>
      <View  style={styles.item}>
      <AntDesign name="delete" size={20} color="black" />
      <Text> {item.name} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'dotted',
        margin: 10,
        padding: 20,
        fontSize: 16,
        flexDirection: 'row',
        gap: 10,
    }
})
