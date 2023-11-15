import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../styles/GlobalStyles'

export default function About() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>About screen</Text>
    </View>
  )
}

