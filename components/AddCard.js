import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewCard from '../NewCard';

function AddCard({navigation,NewCard}){
 
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(NewCard)}>
        <Image source={require('C:/Users/Dhruv/Desktop/reactProjects/CardPreview/assets/plus2_icon.png') } style={styles.image}/>
        </TouchableOpacity>
    )
}
const Stack=createStackNavigator();
function  App() {
    <NavigationContainer>
      
    </NavigationContainer>
    
}
const styles = StyleSheet.create({
    image:{
      width:30,
      height:30,
      top:18,
      //  transform: [{ rotate: '90deg' }],
  
  },
}); 
export default AddCard;
