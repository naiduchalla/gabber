import { NavigationContainer } from '@react-navigation/native';
import React,{ useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button,Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from '../firebase';
const AddChatScreen =({navigation}) => {
    const[input,setInput] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Add a new Chat",
            headerBackTitle:'Chats',
        
        });
    },[navigation]);
    const createChat = async () =>{
        await db
        .collection('chats') 
        .add({chatName:input,})
        .then(() => {
            navigation.goBack();
        })
    };
    
    return(
        <View style={styles.container}>

            <Input placeholder='Enter a chat name' value={input} onChangeText={(text) => setInput(text)} onSubmitEditing={createChat}
            leftIcon={<Icon name='wechat' type='antedesign' size={24} color='black'/>
    }
    />
            <Button disabled={!input} onPress={createChat} title='create new chat'/>
        </View>
    );
};
export default AddChatScreen;

const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:30,
        height:'100',
    },
});