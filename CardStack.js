import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const CardStack=(props)=>{
    return (
     <View style={styles.container}>
     <View style={styles.card}>
     <Text>{props.title}</Text>
     </View>
     <View>
     <View style={styles.card2}>
     </View>
     <View style={styles.card3}>
     </View>
     </View>
       
     </View>
     
    );
}

const styles=StyleSheet.create({
    container:{
        top:40,
        left:30,
    },
 card:{
     width:300,
     height:150,
   backgroundColor:'#F5F5F5',
     borderRadius:10,
     borderWidth:1,
     borderColor:'blue',
     zIndex:15,
     position:'absolute',
 },
 card2:{
      width:300,
     height:150,
    
     borderRadius:10,
     borderWidth:1,
     borderColor:'red',
    bottom:5, 
    marginLeft:5,
    position:'absolute',
    zIndex:5,
 },
 card3:{
 width:300,
     height:150,
    
     borderRadius:10,
     borderWidth:1,
     borderColor:'blue',
     marginLeft:10,
     bottom:10,
      
 }
});
export default CardStack;