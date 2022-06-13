import React from "react";
import {View , Text, Image} from 'react-native'


export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage/>
        </View>
    );
}

const RestaurantImage = () => (
    <Image source = {{
        uri: 'https://www.bkkmenu.com/files/2019/06/YaoRestaurant-5.jpg'
    }}
    style={{ width: '100%' , height: 100 }}
    />
);