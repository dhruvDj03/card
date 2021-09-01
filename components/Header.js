import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, View, Text, Dimensions ,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import NewCard from '../NewCard';
import AddCard from './AddCard';


 function Header(props,{NewCard}) {
 
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flex:1}}>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
       <AddCard/>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();
   function  App({NewCard}) {
     <NavigationContainer>
       <Stack.Screen name="NewCard" component={NewCard}
       options={{headerShown:false}}/>
     </NavigationContainer>
   }


const styles = StyleSheet.create({
  image:{
    width:30,
    height:30,
    top:18,
    //  transform: [{ rotate: '90deg' }],

},
  container: {
  
    backgroundColor: '#CAEEC2',
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    height:80,
  },
  headerContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom:10,
    flexDirection:'row',
   justifyContent:'space-between',
  },
  headerText: {
    fontSize: 20,
    
    color: '#333',
    textAlign:'center',
    marginTop: 15
  }
});
export default Header;