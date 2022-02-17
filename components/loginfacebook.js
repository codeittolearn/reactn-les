import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,Image} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import imgback from "../assets/anhyeuem.jpg"


export default function Loginfb() {
  return (
    <View style={styles.container}>
        <StatusBar style="dark"/>
            <View style={styles.imgview}>
            <Image style={styles.img} source={imgback}/>
            </View>

        <View style={styles.content}>

            <TextInput style={styles.inputuser}
                placeholder="Số điện thoại hoặc email"
                placeholderTextColor="#cdcdcf"
            />
            <TextInput style={styles.inputuser}
                placeholder="Mật khẩu"
                secureTextEntry={true}
                placeholderTextColor="#cdcdcf"
            />

            <TouchableOpacity style={styles.buttonlogin}>
                <Text style={styles.txt}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.action} >
      <TouchableOpacity style={styles.buttonaction}>
        <Text style={styles.txtaction}>Quên mật khẩu</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonaction}>
        <Text style={styles.txtaction}>Quay lại</Text>

      </TouchableOpacity>

        <View style={styles.content}>


      <TouchableOpacity style={styles.buttonregis}>
                <Text style={styles.txtregis}>tao tai khoan</Text>
            </TouchableOpacity>

    </View>
    </View>
   </View>

  );
}

const TEXT={

  color:"#1977F3",
  textAlign:"center",

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',



  },
  buttonaction:{
        marginTop:16,
  },

  buttonregis:{
    backgroundColor:"#FAFDFF",
    width:350,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,

  },
  txtaction:{
      ...TEXT,
  },
  txtregis:{
      color :"#1977F3",
  },
  content:{
      alignItems:"center",
      marginTop:16,
      justifyContent:"center",

  },
  inputuser:{
    width:350,
    height:40,
    borderWidth:0.17,
    borderRadius:5,
    padding:10,

  },
  buttonlogin:{
    backgroundColor: "#1977F3",
    height:40,
    borderRadius:5,
    width:350,
    textAlign:"center",
    justifyContent:"center",
    marginTop:16,
  },

  imgview:{
      alignItems:"center",
  },
  img:{
    width:400,
    height:230,
    marginBottom:16,

  },
  txt:{
      textAlign:"center",

    textTransform: "uppercase",
    color: "#cdccdf"
  }
});
