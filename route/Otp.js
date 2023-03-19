import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import OTPTextView from 'react-native-otp-textinput';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { BottomNav } from '../HomeAA';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {BASE_URL,PATH} from "../HomeAA/api/index";
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import { CommonActions } from '@react-navigation/native';

const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

function Otp({navigation}) {
  const [phonenum,setPhonenum]=useState(0);
  const [otpcode,setOtpcode]=useState('');
  const [loader, setLoader] = useState(false);

  let phn;
const get=async()=>{
   phn=(await ( (AsyncStorage.getItem('phonenum'))));
   setPhonenum(Number(phn)) 
}
get();


 
var otpcall = {
  method: 'post',
  url: BASE_URL + PATH.VERIFY,
  headers: {
    'Content-Type': 'application/json',
  },
  data: ({
    'phone':'+91'+ phonenum,
    'code': otpcode,
  }),
};

 const maindata = async () =>
{
  setLoader(true) 
  await axios(otpcall)
  .then((res) => {
        console.log(res.data);  
        console.log(otpcode);  
   
        if(res.data.code=='200'){
          setLoader(false);  
          navigation.dispatch(navigation.pop(3) );
          navigation.replace('HomeStack');
          
        }
         else{
        
          setLoader(false);
        }
  })
  .catch((err) => {
    setLoader(false);
    console.log(err);
  });
}
  return (
    <SafeAreaView>
      <View style={styles.container}>


        <Text style={styles.authentication}>Enter authentication code</Text>

        <Text style={styles.code}>Enter the 4-digit OTP sent to phone number + 91 {phonenum}</Text>




        <View style={styles.otp}>
          <OTPTextView
            handleTextChange={(otpcode) => {setOtpcode(otpcode) }}
            containerStyle={styles.textInputContainer}
            textInputStyle={[styles.roundedTextInput, { borderRadius: 100 }]}
            tintColor="#380AFF"
          />

        </View>




        <View>
          <Text style={styles.change} onPress={()=> navigation.navigate('Number_validate')}>Change Number</Text>
        </View>


      

        <Button
              style={styles.input1}
              mode="outlined"
              buttonColor="#380AFF"
              textColor="white"
              onPress={() => {
               maindata();
              }}
            >
              {" "}
          Continue
            </Button>

        <View>
          <Text style={styles.resend}>Resend Code </Text>
        </View>
      </View>
      <Spinner
           visible={loader} 
        />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    height: window.height * 1.02
  },
  keyboardViewContainer: {
    width: '100%',
    alignItems: 'center'
  },
  input1: {
    marginTop: window.width * 0.1,
    width: window.width * 0.8,
    borderColor: '#fff'
    // fontFamily: 'DMSans-Regular'
  },
  authentication: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 120,
    marginBottom: 10,
    // fontFamily: 'DMSans-Regular'
  },
  code: {
    width: 250,
    textAlign: 'center',
    // fontFamily: 'DMSans-Regular'
  },
  change: {
    color: "#380AFF",
    // fontFamily: 'DMSans-Regular'
  },
  resend: {
    color: "#380AFF",
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: window.width * 1.1
    // fontFamily: 'DMSans-Regular'
  },
  otp: {
    marginTop: 20
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },

});

export default Otp;