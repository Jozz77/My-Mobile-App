import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./homeStack";
import { AboutStack } from "./AboutStack";
import Home from "../screens/Home";
import About from "../screens/About";

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
        name="Home"
        component={Home}
        options={{
          title: "My Home",
          headerStyle: {
            backgroundColor: "#2ecc71", // Set your header background color for About
          },
          headerTintColor: "#fff", // Set your header text color for About
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
