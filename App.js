import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNav = createBottomTabNavigator({
  Read: { screen: ReadStoryScreen},
  Write: { screen: WriteStoryScreen}
},
{ defaultNavigationOptions:({navigation})=>({
     tabBarIcon:({})=>{
       const ScreenName = navigation.state.routeName;
       if (ScreenName==='Read'){
        return( <Image source={require('./PRO+C70+Images/read.png')} style={{width: 40, height:40}}/>)
       } else if (ScreenName === 'Write'){
         return(<Image source={require('./PRO+C70+Images/write.png')} style={{width: 40, height:40}}/>)
       }
     }


})}

)

const AppContainer =createAppContainer(TabNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
