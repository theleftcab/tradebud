import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Switch,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
 import {BASE_URL,PATH} from "../HomeAA/api/index";
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import Spinner from 'react-native-loading-spinner-overlay';

 import axios from "axios";
const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Phone = ({navigation}) => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [loader, setLoader] = useState(false);
  const [valid, setValid] = useState(false);
  

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
  var logincall = {
    method: 'post',
    url: BASE_URL + PATH.LOGIN,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      'phone':'+91'+text3,
    }),
  };
  
   const maindata = async () =>
  {
    setLoader(true)

    await axios(logincall)
    .then(async(res) => {
          // console.log(res.data);  
       AsyncStorage.setItem('phonenum',(text3) );

       console.log("valid user",res)
          if(res.status=='200'){
            await axios(otpcall)
            .then((results)=>{
              if(results.data.code=='200'){
                console.log(results.data.code,"login otp verify ");
                setLoader(false);
                navigation.navigate("Otp");
              
              }
            })
            .catch((err)=>{
console.log(err);
setLoader(false);
            })

          }
    })
    .catch((err) => {
      console.log(err);
      setLoader(false);
       

    });
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.inputtwoline}>
          <TextInput
            style={styles.inputfixed}
            value={text}
            placeholder="+91"
            mode="outlined"
            outlineStyle={{ borderRadius: 30 }}
            disabled="false"
            placeholderTextColor="black"
            onChangeText={(text2) => setText2(text2)}
          />
          <TextInput
            style={styles.inputvariable}
            keyboardType="number-pad"
            value={text3}
            maxLength={10}
            outlineStyle={{ borderRadius: 30 }}
            mode="outlined"
            placeholderTextColor="black"
            onChangeText={(text3) => setText3(text3)}
          />
        </View>

        <Button
          style={styles.inputlastbtn}
          mode="outlined"
          buttonColor="#380AFF"
          textColor="white"
          onPress={  () => {
            maindata()
          }}
        >
          Submit
        </Button>

        <Text style={styles.inputtext1}>
          By signing up you agree with the Fanstox {"\n"}Terms Conditions and
          Privacy Policy
        </Text>
      </View>
      <Spinner
           visible={loader} 
        />
    </View>
  );
};

export default Phone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: window.height * 1.02,
  },

  rectangle: {
    marginTop: window.width * 0.3,
  },

  password: {
    marginTop: window.width * 0.07,
  },

  toggle: {
    height: window.height * 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: window.width * 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#E3DDFF",
    marginTop: window.width * 0.1,
    textAlign: "center",
  },
  first: {
    width: "50%",
  },

  input1: {
    marginTop: window.width * 0.05,
    width: window.width * 0.8,
  },
  btn1: {
    marginTop: window.width * 0.1,
    width: window.width * 0.8,
    height: window.height * 0.05,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#380AFF",
    borderRadius: 20,
    textColor: "white",
  },
  btntext: {
    color: "white",
  },
  inputlast: {
    marginTop: window.width * 0.2,
    width: window.width * 0.8,
  },
  inputlastbtn: {
    marginTop: window.width * 0.1,
    width: window.width * 0.8,
  },
  inputtext: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    marginHorizontal: window.width * 0.1,
    marginTop: window.width * 0.02,
    textAlign: "center",
    marginBottom: window.width * 0.03,
  },

  inputtext1: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    marginHorizontal: window.width * 0.1,
    marginTop: window.width * 0.05,
    textAlign: "center",
    marginBottom: window.width * 0.13,
  },
  inputtwoline: {
    height: window.height * 0.08,
    width: window.width * 0.85,
    marginTop: window.width * 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputfixed: {
    width: window.width * 0.22, 
    textAlign:"center",
    justifyContent:"center"


  },
  inputvariable: {
    width: window.width * 0.6, 
    justifyContent:"center", 
  },
});
