import * as React from 'react';
import { View, Text,Button,StyleSheet ,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenGrid from './ScreenGrid';
import Card from'./Card';
import DeckView from './DeckView';
import Card2 from './Card2';



const TradingCardPreview=({navigation})=> {
  const [cardItem,setCardItem]=React.useState([
   {name:'example', id:'1'},
   {name:'example', id:'2'},
   {name:'example', id:'3'},
   {name:'example', id:'4'},
   {name:'example', id:'5'},
   {name:'example', id:'6'},
   {name:'example', id:'7'},
   {name:'example', id:'8'},
   {name:'example', id:'9'},
   
 ]);

  return (
    <View style={styles.bigContainer}> 
     <View style={styles.tradingCard}>
    <FlatList 
data={cardItem}
renderItem={({item})=>  
<View style={styles.deckViewConatiner}>
<TouchableOpacity onPress={()=>navigation.navigate("Grid")}> 
<DeckView title={item.name} id={item.id}/>
</TouchableOpacity>  

</View>
}
horizontal={true}
/>   
     
   
</View>
</View>
  );
}



 const Stack = createStackNavigator();

 function Bpp() {
   return (
   <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={TradingCardPreview} />
         <Stack.Screen name="Grid" component={ScreenGrid}/>
         <Stack.Screen name="Card" container={Card}/>
       </Stack.Navigator>
       </NavigationContainer>
   );
 }
const styles = StyleSheet.create({
deckViewConatiner:{
marginTop:70,
width:250,
height:180,
backgroundColor:'#D3D3D3',
bottom:35,
},
cardPreview:{
  fontSize:28,
},
cardPreviewConatiner:{
  alignItems:'flex-start',
},
trading_view:{
  height:50,
  backgroundColor:'#D3D3D3',
  flexDirection:'row',
   alignItems:'center',
},
trading_text:{
 fontSize:20,
 marginLeft:10,

},
chat:{
  fontSize:20,
  top:25,
  color:'white',
  },
trading_textChange:{
fontSize:20,
color:'#0000CD',
},
trading_card1:{
  height:180,
},
image:{
  width:30,
  height:30,
  top:18,
   transform: [{ rotate: '90deg' }],
   left:165,
},
tradingCard:{
  height:600,
},
chatContainer:{
  alignItems:'flex-end',
  right:5,
},
bigContainer:{
  backgroundColor:'#cef0f1',
  top:15,
  borderRadius:5,
}
});

export default TradingCardPreview;