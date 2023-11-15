import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../styles/GlobalStyles'

export default function Home({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Home screen</Text>
      <Button title="Go to review"  onPress={() => navigation.navigate('Review')} />
    </View>
  )
}
