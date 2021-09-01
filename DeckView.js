import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Card2 from './Card2';
const DeckView=(props)=>{
    return (
        <View style={styles.container}>
        <Card2 title={props.title}
        id={props.id}/>
        </View>
    );
}
const styles = StyleSheet.create({
container:{
   
   
    width:250,
    height:170,
  
},
});
export default DeckView;