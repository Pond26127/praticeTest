import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
//import { auth } from '../firebase';

const Login = ({navigation}) => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  //const handleRegister = () => {
    //auth
    //.createUserWithEmailAndPassword(email,password)
    //.then(userCredentials => {
    //    const user = userCredentials.user;
    //    console.log(user.email);
    //})
    //.catch(error => alert(error.message))
  //}
    
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.inputContainer}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Login</Text>
            </View>
            <TextInput 
                placeholder='Email'
                style={styles.input}

                value={email}
                onChangeText={text => setEmail(text)}
                
            />
            <TextInput 
                placeholder='Password'
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={text => setPassword(text)}
            />

        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                style={styles.button}>
                
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Register')}
                style={[styles.button , styles.buttonOutline]}>
                
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
    },
    LoginText:{
        
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2, 
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

})