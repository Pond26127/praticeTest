import React from "react";
import {View , Text, TouchableOpacity} from 'react-native';



export default function ViewCart({navigation}) {
    return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 60,
            zIndex: 999,
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                flexDirection: "row",
                justifyContent: 'flex-end',
                padding: 15,
                borderRadius: 30,
                width: 250,
                position: "relative",
              }}>
              <Text style={{ color: "white", fontSize: 20 , marginRight: 60   }}>
                View Cart
              </Text>
              
            </TouchableOpacity>
          </View>
        </View>
    );
}