import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { GlobalStyles, images } from "../styles/GlobalStyles";
import Card from "./Card";

export default function Review({ route }) {
    const { title, rating, body } = route.params;

    // const ratings = 
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={GlobalStyles.container}>
      <Card>
      <Text style={GlobalStyles.text}>{title}</Text>
      <Text style={GlobalStyles.text}>{body}</Text>
      <View style={styles.rating}>
        <Text>Game Rating:</Text>
        <Image source={images.rating[rating]} />
      </View>
      </Card>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 10,
    gap: 6,
    borderTopWidth: 2,
    borderTopColor: 'blue'
  }
})