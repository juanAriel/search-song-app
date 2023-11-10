
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SongPageDetails from "./src/components/pages/SongPageDetails";
import { Provider } from "react-redux";
import { store } from "./src/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={SongPageDetails} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 100,
  },
});
