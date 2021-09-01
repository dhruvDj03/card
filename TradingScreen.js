import 'react-native-gesture-handler';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardStack from './CardStack'
import ScreenGrid from './ScreenGrid'
import TradingCardPreview from './TradingCardPreview';
import Header from './components/Header';
import ChatScreen from './ChatScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { set } from 'react-native-reanimated';

  const TradingScreen=({navigation},props)=>{
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
 // isTrade=false;
 let topic="Chat";
 const [text, setText] = React.useState("Chat");
 const [done,setDone]=React.useState(true);
 const RenderElement = () => {
  if (done) {
  setText("Chat->");
    return <TradingCardPreview onPress={()=>navigation.navigate("Grid")} />;
  }
 else {
  setText("<-Trade");
    return<ChatScreen/>;
  } 
};
const SetTopic = () =>{
if(done){
  setText("Trade");
}
else{
  setText("Chat");
}

};

      return(
       
          <View >
           <Header title={"Trading"}/>
          <View style={styles.trading_view} >
          <Text style={styles.trading_text}  >Trade Status:</Text>
          <Text style={styles.trading_textChange}>Ongoing</Text>
          </View>
          <View style={styles.trading_card1}>
          <CardStack title={"Your card"}/>
          </View>
          <Image source={require('C:/Users/Dhruv/Desktop/reactProjects/CardPreview/assets/trade_icon.jpg') } style={styles.image}/>
           <View style={styles.trading_card1}>
          <CardStack title={"There card"}/>
          </View>
         <View >
          <TouchableOpacity  onPress={()=>{setDone(!done);SetTopic;}} style={styles.chatContainer}>
          <Text  style={styles.chat} >{text}</Text>
          </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#cef0f1',marginBottom:20,borderTopEndRadius:18,borderTopLeftRadius:18,marginTop:'2%'}}>
          <RenderElement />
        </View>
                    <View style={styles.bigContainer}> 
         {/* <View style={styles.tradingCard}>
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
          
        
  </View>*/}
  
    </View>
  
          </View>
         
      );
  }
  const Stack = createStackNavigator();

function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Trading"  component={TradingScreen}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
          <Stack.Screen name="Grid" component={ScreenGrid}/>
      </Stack.Navigator>
   </NavigationContainer>
    
  );
}
  const styles = StyleSheet.create({
trading_view:{
    height:50,
    backgroundColor:'#fff',
    flexDirection:'row',
     alignItems:'center',
    borderRadius:20,
    width:'95%',
    marginLeft:'2.5%',
    marginTop:'1%',
},
trading_text:{
   fontSize:20,
   marginLeft:10, 
},
chat:{
    fontSize:18,
    top:5,
    color:'black',
    width:'17%',
    backgroundColor:'#CAEEC2',
    borderRadius:20,
    },
trading_textChange:{
fontSize:20,
color:'#27ae60',
},
trading_card1:{
    height:180,
},
image:{
    width:30,
    height:30,
    top:18,
    //  transform: [{ rotate: '90deg' }],
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
    backgroundColor:'red',
    top:'5%',
    borderRadius:5,
}
  });
  export default TradingScreen;