import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

class ReadStoryScreen extends React.Component{
 render(){
     return(
         <View>
            <Header backgroundColor={'rgb(227, 89, 79)'} centerComponent={{text:'Write a Story', color: '#fff'}}/>
           <Text>Read a Story</Text>
         </View>
         
     )
 }
 
}

export default ReadStoryScreen