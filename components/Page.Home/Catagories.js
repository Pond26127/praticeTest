import React from "react";
import {View , Text, Image, ScrollView} from 'react-native'

{/* Decare all items contain with pic for icon and word that descibe it. */}
const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: 'Pick-up',
    },
    {
        image: require('../../assets/images/bread.png'),
        text: 'Bakery Items',
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: 'Fast-foods',
    },
    {
        image: require('../../assets/images/desserts.png'),
        text: 'Desserts Items',
    },
    {
        image: require('../../assets/images/deals.png'),
        text: 'Deals',
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: 'Soft-drinks',
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: 'Coffees',
    },
];

 
export default function Catagories() {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 20,
            
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>

                {/* Loop to make it not spageti for icon catagories*/}
                {/* loop start here */}

                {items.map((item, index) => (
                    <View style={{ alignItems: 'center' , marginRight: 30}} key={index}>
                        <Image source = {items[index].image} style={{
                            width: 60,
                            height: 40,
                            resizeMode: 'contain',
                        }}/>
                        <Text style={{ fontSize: 13, fontWeight: '900'}}>{items[index].text}</Text>
                    </View>
                ))}

                {/* loop end here */}

            </ScrollView>
        </View>
    );
};