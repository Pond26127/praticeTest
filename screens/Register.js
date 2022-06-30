import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native';
import { Input , NativeBaseProvider , Button , Icon , Box , Image , AspectRatio } from 'native-base';
import { FontAwesome5 , MaterialCommunityIcons } from '@expo/vector-icons';


export default function Register({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Register</Text>
            </View>
            <View style={styles.Middle}>
                <Text>Already have account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* Username input */}
            <View style={styles.ButtonStyle}>
                <View style={styles.emailInput}>
                    <Input 
                        InputLeftElement={
                            <Icon 
                                as={<FontAwesome5 name='user' />}
                                size='sm'
                                m={2}
                                _light={{
                                    color: 'black',
                                }}
                                _dark={{
                                    color: 'grey.300',
                                }}
                            />
                        }
                        variant='outline'
                        placeholder='Username'
                        _light={{
                            placeholderTextColor: '#6699CC',
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGrey.50',
                        }}
                    />
                </View>
            </View>

            {/* Email input */}
            <View style={styles.ButtonStyle}>
                <View style={styles.emailInput}>
                    <Input 
                        InputLeftElement={
                            <Icon 
                                as={<MaterialCommunityIcons name='email' />}
                                size='sm'
                                m={2}
                                _light={{
                                    color: 'black',
                                }}
                                _dark={{
                                    color: 'grey.300',
                                }}
                            />
                        }
                        variant='outline'
                        placeholder='Email'
                        _light={{
                            placeholderTextColor: '#6699CC',
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGrey.50',
                        }}
                    />
                </View>
            </View>

            {/* Password input */}
            <View style={styles.ButtonStyle}>
                <View style={styles.emailInput}>
                    <Input 
                        InputLeftElement={
                            <Icon 
                                as={<FontAwesome5 name='key' />}
                                size='sm'
                                m={2}
                                _light={{
                                    color: 'black',
                                }}
                                _dark={{
                                    color: 'grey.300',
                                }}
                            />
                        }
                        variant='outline'
                        secureTextEntry={true}
                        placeholder='Password'
                        _light={{
                            placeholderTextColor: '#6699CC',
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGrey.50',
                        }}
                    />
                </View>
            </View>
                
            {/* Repeat password input */}
            <View style={styles.ButtonStyle}>
                <View style={styles.emailInput}>
                    <Input 
                        InputLeftElement={
                            <Icon 
                                as={<FontAwesome5 name='key' />}
                                size='sm'
                                m={2}
                                _light={{
                                    color: 'black',
                                }}
                                _dark={{
                                    color: 'grey.300',
                                }}
                            />
                        }
                        variant='outline'
                        placeholder='Repeat password'
                        _light={{
                            placeholderTextColor: '#6699CC',
                        }}
                        _dark={{
                            placeholderTextColor: 'blueGrey.50',
                        }}
                    />
                </View>
            </View>

            {/* Button */}
            <View style={styles.ButtonStyle}>
                <Button style={styles.ButtonDesign} onPress={() => navigation.navigate('Login')}>
                    Okay
                </Button>
            </View>

        </View>
    )
}




const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#',
    },

    LoginText:{
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },

    Middle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    text2:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5,
    },

    registerText:{
        fontWeight: 'bold'
    },

    emailInput:{
        marginTop: 10,
        marginRight: 5,
    },

    ButtonStyle:{
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
    },

    ButtonStyleX:{
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15,
    },

    ButtonDesign:{
        backgroundColor: '#026efd'
    },

    lineStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    }
})


