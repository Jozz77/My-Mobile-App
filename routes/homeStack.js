import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Review from "../screens/Review";
import Todo from "../Todo";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="About" component={About} /> */}
      <Stack.Screen name="Review"  component={Review} />
      <Stack.Screen name="Todo" component={Todo} />
    </Stack.Navigator>
  );
};
