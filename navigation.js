import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


export default function navigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}></Stack.Navigator>
        </NavigationContainer>

    );
}