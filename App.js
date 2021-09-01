import * as React from 'react';
import { View, Text,Button,StyleSheet ,TouchableOpacity,FlatList,StatusBar,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenGrid from './ScreenGrid';
import Card from'./Card';
import DeckView from './DeckView';
import Header from './components/Header';
import TradingScreen from './TradingScreen';
import NewCard from './NewCard';


const HomeScreen=({navigation})=> {
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
 cardItem.isSelected=false;
 cardItem.selectedClass=styles.deckViewConatiner;
 selectedItem=data=>{
   data.item.isSelected=!data.item.isSelected;
   data.item.selectedClass=data.item.isSelected?styles.selected:styles.card;

   const index=cardItem.findIndex(
     item=>data.item.id==item.id
   );
   cardItem[index]=data.item;
   this.setState({
     cardItem:cardItem,
   });
 };
  return (
    
    <View style={{ flex: 1, }}>
<Header title={"Card Preview"} />
  
    <FlatList 
   data={cardItem}
   renderItem={({item})=>  
   <View style={styles.deckViewConatiner}>
    <TouchableOpacity onPress={()=>navigation.navigate('Grid')}>
    <DeckView title={item.name} id={item.id}/>
    </TouchableOpacity> 

    </View>
   }
   horizontal={true}
   
   />   
    <TouchableOpacity onPress={()=>navigation.navigate('NewCard')}>
        <Image source={require('C:/Users/Dhruv/Desktop/reactProjects/CardPreview/assets/plus2_icon.png') } style={styles.image}/>
        </TouchableOpacity>
   <Button title={"Trading screen"} onPress={()=>navigation.navigate('Trading')}/>
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
         options={{ headerShown: false }}/>
        <Stack.Screen name="Grid" component={ScreenGrid}
        options={{ headerShown: false }}/>
        <Stack.Screen name="Card" component={Card}
        options={{ headerShown: false }}/>
         <Stack.Screen name="Trading" component={TradingScreen}
         options={{ headerShown: false }} />
         <Stack.Screen name="NewCard" component={NewCard}
         options={{ headerShown: false }} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  image:{
    width:30,
    height:30,
    top:18,
    //  transform: [{ rotate: '90deg' }],

},
deckViewConatiner:{
marginTop:90,
width:250,
height:180,
backgroundColor:'#D3D3D3',
},
cardPreview:{
  fontSize:28,
},
cardPreviewConatiner:{
 
  alignItems:'flex-start',
},
selected:{
  borderWidth:3,
  borderColor:'blue',
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
});

export default App;