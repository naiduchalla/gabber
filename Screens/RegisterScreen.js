import React,{ useLayoutEffect, useState } from 'react';
import { StyleSheet,View } from 'react-native';
import {KeyboardAvoidingView} from'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input,Image,Text } from 'react-native-elements';
import { auth,db } from '../firebase';
const RegisterScreen =({ navigation}) => {
    const [name,setName] = useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    useLayoutEffect(() => { navigation.setOptions({
        headerBackTitle:"Back to Login",
    });
    },[navigation]);
    const register = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName:name,
                photoURL:
                imageUrl ||
                 "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            });
        })
        .catch((error)=> alert(error.message));
        };
    return(
        <KeyboardAvoidingView behavior='padding' style= {styles.container}>
            <StatusBar style='light'/>
            <Text h1 style={{ marginBottom:50}}> Create a gabber account
            </Text>
            <View style= {styles.inputcontainer}>
                <Input placeholder='Full Name' autofocus type='text' value={name} onChangeText={(text) => setName(text)}/>
                <Input placeholder='Email' type='email' value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder='Password'  type='password' SecureTextEntry value={password} onChangeText={(text) => setPassword(text)}/>
                <Input placeholder='Profile Picture URL (optional)' type='Text' value={imageUrl} onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register} />
                
            </View>
            <Button container Style={styles.button} raised onPress ={register} title ="Register" />
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
        
    );
};

export default RegisterScreen;
const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:'center',
        justifyContent :'center',
        padding:10,
        backgroundColor:'white',
    },
    button:{
        width:200,
        marginTop:10,
    },
    inputcontainer:{
        width:300,
    },
});
