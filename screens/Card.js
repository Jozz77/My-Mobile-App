import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View>
        { props.children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: '0',
    marginVertical: 8,
    paddingHorizontal: '8%',
    paddingVertical: '8%',
  }
})
