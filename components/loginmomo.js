import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';



export default function Loginmomo(props) {
  return (



    <SafeAreaView style={styles.container}>

      <StatusBar style="light" />
      <View style={styles.content} >

        <View style={styles.textWrapper} >
          <Text style={styles.hitxt} >Xin chào!</Text>
          <Text style={styles.usertxt}>Nguyễn Bạch Nhi</Text>
          <Text style={styles.usertxt}>0767885948</Text>
        </View>
      </View>

    <View style={styles.form}>
    <FontAwesome style={styles.iconinput} name="lock" size={20} color="black"


    />
      <TextInput style={styles.inputpassword}
        placeholder="Nhập mật khẩu"
        keyboardType='numeric'
        autoFocus={true}
        placeholderTextColor="#92929"
        secureTextEntry={true}
        maxLength={6}

      />

      <TouchableOpacity style={styles.buttonlogin} >
        <Text style={styles.txtlogin} >Đăng nhập</Text>
      </TouchableOpacity>

    </View>

    <View style={styles.action} >
      <TouchableOpacity style={styles.buttonaction}>
        <Text style={styles.txtaction}>quên mật khẩu</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonaction}>
        <Text style={styles.txtaction}>thoát tài khoản</Text>

      </TouchableOpacity>
    </View>

    </SafeAreaView>

  );
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
      content:{
        marginTop:120,
  },
  hitxt:{
    ...TEXT,
    fontSize:20,
    fontWeight: "bold",
  },
  usertxt: {
    ...TEXT,
    fontSize:16,
    lineHeight:35,


  },
  iconinput:{
    position: "absolute",
    top:20,left:80,
    zIndex: 5,
    opacity:0.5,

  },

  inputpassword: {
    backgroundColor:"#fff",
    height:60,
    width:300,
    borderRadius:50,
    textAlign:"center",


  },
  form:{
    alignItems:"center",
  },
  buttonlogin: {

    backgroundColor:"#35323281",
    height:50,
    width:300,
    marginTop:15,
    borderRadius:25,
    textAlign:"center",
    justifyContent: "center",
    alignItems:"center",

  },
  txtlogin:{
    ...TEXT,
    textTransform: "uppercase",
  },
  action:{
    flexDirection:"row",
    justifyContent: "space-between",

    marginTop:20,
    marginRight:50,
    marginLeft:50,

  },
  buttonaction:{

  }
  ,
  txtaction: {
    ...TEXT,
    textTransform: "uppercase",

  }
});
