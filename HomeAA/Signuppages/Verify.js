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

function Verify({ navigation }) {
  const [phonenum, setPhonenum] = useState(0);
  const [name, setName] = useState("");
  const [otpcode, setOtpcode] = useState("");
  const [loader, setLoader] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [already, setAlready] = useState(false);

  let phn;
  let nm;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: window.height*0.1 }}>
          <Text style={{ color: "#fff", fontSize: 30, fontWeight: '600' }}>Verify Otp</Text>
          <Text style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: 20 }}>OTP Sent to your number</Text>
        </View>

        <View style={styles.otp}>
          <OTPTextView
            handleTextChange={(otpcode) => setOtpcode(otpcode)}
            containerStyle={styles.textInputContainer}
            textInputStyle={[styles.roundedTextInput, { borderRadius: 100 }]}
            tintColor="white"
          />
        </View>

        <View>
          {wrong && <Text style={{ color: "red", marginBottom: window.width * 0.02 }}>{already ? 'Number already exists' : 'Invalid OTP'}</Text>}
          {already && <Text style={{ color: "red", marginBottom: window.width * 0.02 }}>{'Number already exists'}</Text>}
        </View>


        <TouchableOpacity>
          <Text style={styles.resend}>Didn’t received an OTP?   RESEND OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.resend}>OTP Send to +91 1234567890  <Text style={{color: '#2C97FA'}}>Change Number?</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn1}
          mode="outlined"
          buttonColor="#380AFF"
          textColor="white"
          onPress={()=>{
            navigation.navigate('HomeStack')
          }}
        >
          <Text style={styles.btntext}>VERIFY </Text>
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
    alignItems: "center",
    height: window.height * 1.02,
  },
  btntext: {
    color: "black",
    fontSize: 25,
    fontWeight: '500',
  },
  btn1: {
    marginTop: window.width * 0.1,
    width: window.width * 0.8,
    height: window.width * 0.15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 30,
    textColor: "white",
  },
  header: {
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
    height: window.width * 0.15,
    justifyContent: "center",
    borderColor: "#fff",
    borderRadius: 35,
    // fontFamily: 'DMSans-Regular'
  },
  authentication: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 12,
    marginBottom: 10,
    color: "white"
    // fontFamily: 'DMSans-Regular'
  },
  code: {
    width: 250,
    textAlign: "center",
    color: "white"
    // fontFamily: 'DMSans-Regular'
  },

  resend: {
    color: "white",
    marginTop: window.width * 0.01,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginBottom: window.width * 0.01,
    // fontFamily: 'DMSans-Regular'
  },
  otp: {
    marginTop: window.height*0.05,
  },
  textInputContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
    color: 'white'
  },
});

export default Verify;
