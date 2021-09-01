import React from 'react';
import { StyleSheet, Text, View ,Image,SafeAreaView, Platform,KeyboardAvoidingView,TextInput,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GiftedChat } from 'react-native-gifted-chat';



const ChatScreen=()=>{
   
        
        if(Platform.OS==="android"){
            return(
                <View style={{}}>
                <KeyboardAvoidingView style={{alignItems:'flex-end',height:'100%',position:'relative'}}>
                    <View style={{ borderRadius:20,marginLeft:'2%',flexDirection:'row'}}>
                        <View style={{width:'80%'}}>
                    <TextInput label="Type your message" style={{color:'black',height:40,borderRadius:20,backgroundColor:'white'}}/>
                    </View>
                  <View style={{marginLeft:'3%',borderRadius:20,justifyContent:'flex-end'}}>
                    <Button  style={{borderRadius:20}} title="Send" />
                    </View>
                    </View>
                </KeyboardAvoidingView>
                </View>
               
            );
        }
    
    
}

const styles=StyleSheet.create({

});
export default ChatScreen;