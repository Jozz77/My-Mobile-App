import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Review from "../screens/Review";
import Todo from "../Todo";

const Stack = createStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Todo" component={Todo} /> */}
    </Stack.Navigator>
  );
};
