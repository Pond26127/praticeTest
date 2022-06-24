import React from "react";
import {View , Text} from 'react-native'
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/Page.RestaurantDetail/About";
import MenuItem from "../components/Page.RestaurantDetail/MenuItem";
import ViewCart from "../components/Page.RestaurantDetail/ViewCart";





export default function RestaurantDetail({ route , navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20}} />
            <MenuItem />
            <ViewCart navigation={navigation} restaurantName={route.params.name}/>
        </View>
    );
}