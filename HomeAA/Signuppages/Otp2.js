import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import OTPTextView from "react-native-otp-textinput";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { BottomNav } from "../BottomNav";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, PATH } from "../api/index";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

function Otp2({ navigation }) {
  const [phonenum, setPhonenum] = useState(0);
  const [name, setName] = useState("");
  const [otpcode, setOtpcode] = useState("");
  const [loader, setLoader] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [already, setAlready] = useState(false);

  let phn;
  let nm;
//   const get = async () => {
//     phn = await AsyncStorage.getItem("phonenum");
//     nm= await AsyncStorage.getItem('username');
//     setPhonenum(Number(phn)); 
//     setName(nm); 
//     console.log(name,phonenum);
//   };
//   get();

//   var otpcall = {
//     method: "post",
//     url: BASE_URL + PATH.VERIFY,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: {
//       phone: "+91" + phonenum,
//       code: otpcode,
//     },
//   };

//   var registercall = {
//     method: "post",
//     url: BASE_URL + PATH.REGISTER,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: {
//       phone: "+91" + phonenum, 
//       username: name,
//     },
//   };

//   const maindata = async () => {
//     setLoader(true);
//     setWrong(false);
//     setAlready(false);

//     await axios(otpcall)
//       .then(async(res) => {
//         console.log(res.data,"otp2");
//         console.log(otpcode);

//         if (res.data.code == 200) {
//           await axios(registercall)
//           .then((result)=>{
//             console.log(result,"register");
//             setLoader(false);
//    navigation.navigate("Getstarted");

//          })
//          .catch((err)=>{
// console.log(err);
// console.log("resgister error")
// setAlready(true);
// setLoader(false);
//          })
//         }
//         else{
//           setLoader(false);
//           setWrong(true);
//           console.log("else section means code not 200")
//         }
//       })
//       .catch((err) => {
//         setLoader(false);
//         console.log(err);
//       });
//   };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" color="black" size={25} />
          </TouchableOpacity>
        </View> */}
<Image source={require('../../assets/bluetick.png')}  style={{marginTop:window.width*0.5,height:window.width*0.1,width:window.width*0.1}} />
        <Text style={styles.authentication}>Enter authentication code</Text>

        <Text style={styles.code}>
          Enter the 4-digit OTP sent to phone number + 91 {phonenum}
        </Text>

        <View style={styles.otp}>
          <OTPTextView
          
            handleTextChange={(otpcode) => setOtpcode(otpcode) }
            containerStyle={styles.textInputContainer}
            textInputStyle={[styles.roundedTextInput, { borderRadius: 100 }]} 
            tintColor="white"
          />
        </View>

        <View>
{       wrong &&   <Text style={{color:"red",marginBottom:window.width*0.02}}>{ already?  'Number already exists' : 'Invalid OTP'}</Text>}    
{       already &&   <Text style={{color:"red",marginBottom:window.width*0.02}}>{ 'Number already exists' }</Text>}    
    </View>

       

        <Button
          style={styles.input1}
          mode="outlined"
          buttonColor="white"
          textColor="black" 
          onPress={()=>{
            navigation.navigate('HomeStack')
          }}
        >
          {" "}
      <Text style={{fontSize:18}}>  Continue</Text>    
        </Button>

        <TouchableOpacity>
          <Text style={styles.resend}>Didn’t received an OTP?   RESEND OTP</Text>
        </TouchableOpacity>
      </View>
      <Spinner visible={loader} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center", 
    height: window.height * 1.02,
  },
  header: {
    // flex: 0.08,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: window.width * 0.05,
    paddingRight: window.width * 0.05,
    paddingTop: window.width * 0.02,
    paddingBottom: window.width * 0.02,
    backgroundColor: "#FFFFFF",
    // elevation: 10,
    borderTopLeftRadius: 10,
    height: window.height * 0.08,
  },
  keyboardViewContainer: {
    width: "100%",
    alignItems: "center",
  },
  input1: {
    marginTop: window.width * 0.05,
    width: window.width * 0.8,
    height: window.width*0.15,
    justifyContent:"center",
    borderColor: "#fff",
    borderRadius:35,
    // fontFamily: 'DMSans-Regular'
  },
  authentication: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 12,
    marginBottom: 10,
    color:"white"
    // fontFamily: 'DMSans-Regular'
  },
  code: {
    width: 250,
    textAlign: "center",
    color:"white"
    // fontFamily: 'DMSans-Regular'
  },
   
  resend: {
    color: "white",
    marginTop:   window.width*0.05,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginBottom: window.width * 1.1,
    // fontFamily: 'DMSans-Regular'
  },
  otp: {
    marginTop: 20,
  },
  textInputContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
    color:'white'
  },
});

export default Otp2;
