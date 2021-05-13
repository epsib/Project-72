import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import {Header} from 'react-native-elements';
import * as firebase from 'firebase';
import db from '../config'


class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.state={
      title:'',
      author:'',
      story:''
    }
  }

  submitStory = ()=>{
    db.collection("Story Hub").add({
      'Title': this.state.title,
      'Author': this.state.author,
      'Story': this.state.story,
   });
   this.setState({
     title: this.state.title,
      author: this.state.author,
      story: this.state.story,
   })
   var message = "Story is Submitted";
   ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  render(){
     return(
    <KeyboardAvoidingView style={styles.container} behaviour="padding" enabled>
       <View>
           <Header backgroundColor={'rgb(227, 89, 79)'} centerComponent={{text:'Write a Story', color: '#fff'}}/>
    
           <TouchableOpacity style = {styles.submit} onPress={this.submitStory}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white', textAlign:'center'}}>Submit</Text>
        </TouchableOpacity>

           <TextInput style={styles.inputBox} placeholder="Title" 
           onChangeText={text => {
            this.setState({ title: text });
          }}
          value={this.state.title}/>
          
           <TextInput style={styles.inputBox} placeholder="Author"  onChangeText={text => {this.setState({ author: text });}} value={this.state.author}/>

           <TextInput style={{marginTop: 50, width: '80%', alignSelf: 'center',   height: 250, textAlign: 'center',  borderWidth: 4,}}  onChangeText={text=>this.setState({story: text})} placeholder="Write Your Story" value={this.state.story} multiline={true}/>
       </View>
       </KeyboardAvoidingView>
     )
 }

}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center'
  },
  inputBox:{marginTop: 50, width: '80%', alignSelf: 'center',   height: 50, textAlign: 'center',  borderWidth: 4,  
            },
  submit:{   
      backgroundColor: 'maroon', 
      width:150,
      height:50,
      marginTop:50,
      alignSelf: 'center'
    
  }          


})
export default WriteStoryScreen