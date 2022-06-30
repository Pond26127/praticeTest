import React from "react";
import {View , Text , Image, StyleSheet , ScrollView } from 'react-native';
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";



const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
        title: "Chilaquiles",
        description:"Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:"https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
     
];



const style = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontWeight: '600',
        fontSize: 19,
    },
});

export default function MenuItem() {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'pink',}} >
                {foods.map((food, index) =>(
                    <View key={index}>
                        <View style={style.menuItemStyle}>
                            <BouncyCheckbox iconStyle={{borderColor: 'lightgray' , borderRadius: 0 }} fillColor='green' />
                            < FoodInfo food={food} />
                            < FoodImage food={food} />
                        </View>
                        <Divider 
                            width={0.5} 
                            orientation='vertical' 
                            style={{marginHorizontal: 20}} />
                    </View>
                ))}
            </ScrollView>
        </>
    );
}
 
const FoodInfo = (props) => (
    <View 
        style={{width: 205 , 
        justifyContent: 'space-evenly'}}>

        <Text style={style.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>

    </View>
);

const FoodImage = (props) => (
    <Image source={{uri: props.food.image}} style={{width: 100 , height: 100 , borderRadius: 8}} />
)

