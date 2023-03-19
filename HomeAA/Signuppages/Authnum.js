import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
  } from "react-native";
  import { Header } from "@rneui/themed";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { SearchBar } from 'react-native-elements';
  import { TextInput, Button } from "react-native-paper";
  import { StatusBar } from 'expo-status-bar';
  import Spinner from 'react-native-loading-spinner-overlay';

  import {BASE_URL,PATH} from "../api/index";
  import AsyncStorage from '@react-native-async-storage/async-storage';
 
  import axios from "axios";
   
  const window = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  };
const Authnum = ({navigation}) => {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [loader, setLoader] = useState(false);

    var otpcall = {
      method: 'post',
      url: BASE_URL + PATH.OTP,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        'phone':'+91'+text3,
      }),
    };
    
     const maindata = async () =>
    {
      // setLoader(true)
      // await axios(otpcall)
      // .then((res) => {
      //       console.log(res.data);  
      //    AsyncStorage.setItem('phonenum',(text3) ); 
      //      console.log(res.data.code);
      //       if(res.data.code=='200'){
      // setLoader(false);

      //         navigation.navigate("Otp2");
      //       }
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      navigation.navigate("Otp2");
    }
  


  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <Image source={require("../../assets/crown.png")} />
        <Text style={{fontSize:36,color:'white',fontWeight:"600",marginBottom:window.width*0.02}}>OTP Verification</Text>
        <Text style={styles.inputtext}>
            We will send you an One Time Password on this mobile number
            </Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.inputtwoline}>
              <TextInput
                style={styles.inputfixed}
                value={text}
                
                placeholder="+91"
                mode="outlined"
                outlineStyle={{ borderRadius: 5 }}
                disabled="false"
                placeholderTextColor="black"
                onChangeText={(text2) => setText2(text2)}
              />
              <TextInput
                style={styles.inputvariable}
                keyboardType="number-pad"
                value={text3}
                outlineStyle={{ borderRadius: 5 }}
                mode="outlined"
                placeholderTextColor="black"
                maxLength={10}
                placeholder="Enter Number"
                theme={{colors: {primary: 'black'}}}

                onChangeText={(text3) => setText3(text3)}
              />
            </View> 
          </View>

            <TouchableOpacity
              style={styles.btn1}
              mode="outlined"
              buttonColor="#380AFF"
              textColor="white"
              onPress={() => {
                maindata();
              }}
            >
              <Text style={styles.btntext}>Send OTP </Text>
            </TouchableOpacity>
           
          </View>
          <Spinner
           visible={loader} 
        />
          <StatusBar style='auto' translucent={false} />

    </View>
  )
}

export default Authnum;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "rgba(0, 0, 0, 0.9)",

        height: window.height * 1,
        paddingTop: window.height * 0.15, 
        // paddingHorizontal: window.height * 0.1,
        
    },
    inputtwoline: {
        height: window.height * 0.08,
        width: window.width * 0.85,
        marginTop: window.width * 0.05,
        flexDirection: "row",
        justifyContent: "space-around",
      },
      inputfixed: {
        width: window.width * 0.17,
        height: window.width * 0.17,
        textAlign:"center"
      },
      inputvariable: {
        width: window.width * 0.6,
        height: window.width * 0.17,
      },
    
    input1: {  
        justifyContent:"center",
        alignItems:"center", 
        marginTop:window.width*0.1, 
      },
      btn1: {
        marginTop: window.width * 0.15,
        width: window.width * 0.8,
        height: window.width * 0.15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 30,
        textColor: "white",
      },
      btntext: {
        color: "black",
        fontSize:16
      }, 
      inputtext: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 13,
        marginHorizontal: window.width * 0.1,
        marginTop: window.width * 0.02,
        textAlign: 'center',
        marginBottom: window.width*0.05,
        width: window.width*0.65,
        color:"white"
      },
     


    })