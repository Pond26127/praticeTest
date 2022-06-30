import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home'
import RestaurantDetail from "./screens/RestaurantDetail";
import Login from "./screens/Login";
import Register from "./screens/Register";




export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}