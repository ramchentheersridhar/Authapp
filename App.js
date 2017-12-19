import React,{Component} from 'react';
import {View} from 'react-native';
import {Header} from './src/components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

 class App extends Component{
   componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAN8VOKXAyGMifvmlW0uj4X_AXyEeRglps",
      authDomain: "auth-user-51e82.firebaseapp.com",
      databaseURL: "https://auth-user-51e82.firebaseio.com",
      projectId: "auth-user-51e82",
      storageBucket: "auth-user-51e82.appspot.com",
      messagingSenderId: "271821686940"
  });
}
   render(){
     return(
       <View>
         <Header />
         <LoginForm />
       </View>
     );
   }
 }
export default App;
