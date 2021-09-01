import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';

const Card=({navigation,route})=>{
  const id=route.params.id;
  const name=route.params.name;
    return(
      <View style={{flex:1}}>
        <Header title={"Card"}/>
      
      <View style={styles.cardContainer}>
      <View style={[styles.card,{ backgroundColor: id }]}>
       <Text >NAME:{name}</Text>
       <Text>ID:{id}</Text>
       </View>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
  cardContainer:{
    flex:1,
justifyContent:'center',
alignItems:'center',
  },
card:{
width:'90%',
height:650,
justifyContent:'center',
alignItems:'center',
marginTop:10,
borderRadius:8,
borderWidth:1,
borderColor:'black'
},
header:{
    fontSize:28,
    justifyContent:'flex-start',
},
image:{
  width:'90%',
}

});
 export default Card;