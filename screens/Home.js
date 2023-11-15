import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={GlobalStyles.container}>
      {/* <Text style={GlobalStyles.text}>Home screen</Text>
      <Button title="Go to review"  onPress={() => navigation.navigate('Review')} />
      <View style={{marginTop: 30,}}>
      <Button title="Todo"  onPress={() => navigation.navigate('Todo')} />
      </View> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
            <Text style={GlobalStyles.text}>{item.title} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

