import React from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from './styles/GlobalStyles'


export default function HeaderTest() {
  return (
    <View style={GlobalStyles.header}>
      <Text style={GlobalStyles.text}>New Headers</Text>
    </View>
  )
}
