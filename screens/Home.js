import React, { useState } from "react";
import {
  Button,
  FlatList,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "./Card";
import { AntDesign } from "@expo/vector-icons";

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
    {
      title: 'It is "fair" Finally',
      rating: 2,
      body: "lorem ipsum",
      key: "4",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={GlobalStyles.container}
    >
      {/* <Text style={GlobalStyles.text}>Home screen</Text>
      <Button title="Go to review"  onPress={() => navigation.navigate('Review')} />
      <View style={{marginTop: 30,}}> 
      <Button title="Todo"  onPress={() => navigation.navigate('Todo')} />
      </View> */}

      <Modal visible={openModal} animationType="slide">
        <View>
          <Text>Hey, I'm a modal</Text>
        </View>
        <AntDesign
          name="close"
          size={24}
          color="black"
          style={{ ...styles.modal, ...styles.modalOther }}
          onPress={() => setOpenModal(false)}
        />
      </Modal>

      <AntDesign
        name="plus"
        size={24}
        color="black"
        style={styles.modal}
        onPress={() => setOpenModal(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
            <Card>
              <Text style={GlobalStyles.text}>{item.title} </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
    gap: 6,
    borderWidth: 2,
    borderColor: "blue",
    alignSelf: 'center',
    borderRadius: 12,
  },
  modalOther: {
    borderColor: "red",
  }
});
