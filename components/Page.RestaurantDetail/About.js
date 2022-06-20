import React from "react";
import {View , Text , Image} from 'react-native'

const image = 'https://media-cdn.tripadvisor.com/media/photo-s/19/c3/62/df/variety-of-korean-appetizers.jpg';
const title = 'Korea Noodle Kitchen'
const description = 'Korea * Spicy Food * $$ ';



export default function About() {
    return (

    <View>
        <RestaurantImage image={image} /> 
        <RestaurantTitle title={title} /> 
        <RestaurantDescription description={description} /> 
    </View>
    
    );
}

const RestaurantImage = (props) => (
    <Image source={{Uri: props.image}} 
        style={{ width: '100%' , height: 180 }}/>
)

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        {props.title}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5,
    }}>
        {props.description}
    </Text>
)