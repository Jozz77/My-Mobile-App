import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function Review({ route }) {
    const { title, rating, body } = route.params;
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Review screen</Text>
      <Text style={GlobalStyles.text}>{title}</Text>
      <Text style={GlobalStyles.text}>{rating}</Text>
      <Text style={GlobalStyles.text}>{body}</Text>
    </View>
  );
}
