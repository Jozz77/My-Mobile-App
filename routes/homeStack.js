import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Review from "../screens/Review";

const Stack = createStackNavigator()

export const MyScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
    )
}


