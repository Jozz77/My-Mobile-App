import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Button} >
        <Text style={styles.text}>{text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 30,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: 'nunito-extrabold'
    }
})