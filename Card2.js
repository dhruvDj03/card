import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Card2=(props)=>{

    return(
      <View style={styles.cardContainer}>
      <View style={[styles.card]}>
      <View style={styles.header}>
       <Text >{props.title}</Text>
       </View>
       <View style={styles.subHeader}>
       <Text>{props.id}</Text>
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
   
width:220,
height:150,
justifyContent:'center',
alignItems:'center',
marginTop:10,
borderRadius:8,
borderWidth:1,
borderColor:'black',


},
header:{
    justifyContent:'flex-end',
alignItems:'flex-start',
   backgroundColor:'#F5F5F5',
   flex:1,
   width:'100%',
   height:'75%',
   borderRadius:8,
   borderBottomLeftRadius:4,
   borderBottomRightRadius:4,
},
subHeader:{
 justifyContent:'flex-end',
alignItems:'flex-start',
 backgroundColor:'white',
 width:'100%',
 flex:0.2,
 borderRadius:8,
 borderTopLeftRadius:4,
  borderTopRightRadius:4,
}

});
 export default Card2;