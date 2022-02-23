import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,Image} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import imgback from "../assets/anhyeuem.jpg"


export default function Loginfb() {
  return (
    <View style={styles.container}>
        <StatusBar style="dask"/>

      

        <View style={styles.content}>
           
        <Image style={styles.img} source={imgback}/>
           
           
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
       

        <View style={styles.action} >
      <TouchableOpacity style={styles.buttonaction}>
        <Text style={styles.txtaction}>Quên mật khẩu</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonaction}>
        <Text style={styles.txtaction}>Quay lại</Text>

      </TouchableOpacity>
        </View>
        </View>
      
        <View style={styles.contentreg}>
          <View style={{flexDirection:"row",alignItems:"center",marginBottom:10,}}>
              <View style={{borderWidth:1, borderColor:"#000", width:150,height:1,opacity:0.1}}></View>
          
            <Text style={styles.labelreg}>HOẶC</Text>
              <View style={{borderWidth:1, borderColor:"#000", width:150,height:1,opacity:0.1}}></View>
          </View>
            <TouchableOpacity style={styles.buttonregis}>
            <Text style={styles.txtregis}>Tạo tài khoản mới</Text>
            </TouchableOpacity>
          
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
    justifyContent:"space-between",
    

  },
  labelreg:{
    textAlign: "center",
    width:50,
  },
  contentreg:{

    alignItems: "center",
    
   

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
    marginBottom:10,

  },
  txtaction:{
      ...TEXT,
  },
  txtregis:{
      color :"#1977F3",
  },
  content:{
       
      alignItems:"center",
     

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
    width:450,
    height:300,
       
       resizeMode:"contain",
      
    // marginBottom:16,

  },
  txt:{
      textAlign:"center",

    textTransform: "uppercase",
    color: "#cdccdf"
  }
});
