import React from "react";
import {View , Text} from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

{/* Left button on search bar is start on line 34 */}
{/* Right button on search bar is start on line 40 */}
{/* Search bar is start on line 16 to 32 */}


export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>

            <GooglePlacesAutocomplete 
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    } 
                }}

                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name='location-sharp' size={24}/>
                    </View>
                )}
                
                renderRightButton={() => ( 
                    <View 
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 30,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 8,
                            padding: 9,
                        }}>

                        <AntDesign 
                            name='clockcircle' 
                            size={11} 
                            style={{ marginRight: 6 }}
                        />

                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    );
};