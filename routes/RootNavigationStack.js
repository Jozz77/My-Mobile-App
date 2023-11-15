import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./homeStack";
import { AboutStack } from "./AboutStack";
import Home from "../screens/Home";
import About from "../screens/About";
import HeaderTest from "../HeaderTest";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

export function RootNavigationStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3498db", // Set your header background color
        },
        headerTintColor: "#fff", // Set your header text color
        headerTitleStyle: {
          fontFamily: "nunito-semibold",
          fontSize: 24,
        },
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        
        options={{
          headerTitle: () => <HeaderTest />,
      headerTitleAlign: 'left',
          // headerStyle: {
          //   backgroundColor: "#2ecc71",
          //    // Set your header background color for About
          // },
          // headerTintColor: "#fff", // Set your header text color for About
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
          //     <AntDesign name="delete" size={20} color="black" />
          //   </TouchableOpacity>
          // ),
        }}
      />
      <Drawer.Screen name="AboutStack" component={AboutStack} />
    </Drawer.Navigator>
  );
}
