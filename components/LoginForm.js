import React from "react";
import {View , Text , StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native'
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


const LoginForm = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputField}>
                <TextInput 
                    placeholderTextColor='#444'
                    placeholder="'Enter username or email-address"
                    autoCapitalize="none"
                    keyboardType="email - address"
                    { /* textContentType="emailAddress" */}
                    autoFocus={true}/>
                <TextInput  />
            </View>

           
            <View style={styles.inputField}>
                <TextInput 
                    placeholderTextColor='#444'
                    placeholder="'Password"
                    autoCapitalize="none"
                    autoConnect={false}
                    { /* textContentType="password"/> */}
                    secureTextEntry={true} />
                <TextInput  />
            </View>

            <Button title={'Log-in'}/>

        </View>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
})

export default LoginForm


