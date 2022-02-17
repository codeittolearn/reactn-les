import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';
import Loginmomo from './components/loginmomo';
import Loginfb from './components/loginfacebook';



export default class App extends React.Component {
  render() {
    return (
       <Loginfb/>
       <Text>hello</Text>
    );
  }
}

const TEXT={

  color:"#fff",
  textAlign:"center",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#b0006d',


  },

});
