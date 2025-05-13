import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddFarmScreen from "./screens/AddFarmScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Farms" component={HomeScreen} />
        <Stack.Screen name="Add Farm" component={AddFarmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
