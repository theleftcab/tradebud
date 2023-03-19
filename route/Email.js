import React, { useState,useEffect } from "react";
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
  Keyboard,
  StatusBar,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import {BASE_URL,PATH} from "../HomeAA/api/index";
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';



const window = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  };

const Email = ({navigation}) => {
    const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [loader, setLoader] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log("on hai ")
        setKeyboardVisible(true);
      }
      );
      
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);  
          console.log("off hai ")
      }
    );
  
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    }
  }, [])

  var login = {
    method: 'post',
    url: BASE_URL + PATH.LOGIN,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      'email': text,
      'password': text2
    }),
  };
  
   const loginData = async () =>
  {
    setLoader(true)

    await axios(login)
    .then(async(res) => {
          console.log(res.status);  
          if(res.status=='200'){
            setLoader(false)
             await AsyncStorage.setItem('emailID',text);
            navigation.navigate("HomeStack");
          }
    })
    .catch((err) => {
      console.log(err);
      setLoader(false)
    });
  }

  return (
    <View style={styles.container} >

    <View style={{   marginTop:isKeyboardVisible? window.width * 0.3 :window.width * 0.05,
      width: window.width * 0.8,}}>
            <TextInput style={styles.email}
              // style={styles.curve}
              // style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, borderRadius: 20,  marginBottom: 20, fontSize: 18 }}
              label="Email"
              value={text}
              outlineStyle={{ borderRadius: 30 }}
              mode="outlined"
              onChangeText={(text) => setText(text)}
            />

            <TextInput style={styles.password}
              // style={styles.curve}
              value={text2}
              placeholder="password"
              outlineStyle={{ borderRadius: 30 }}
              mode="outlined"
              onChangeText={(text2) => setText2(text2)}
            />

            <TouchableOpacity
              style={styles.btn1}
              mode="outlined"
              buttonColor="#380AFF"
              textColor="white"
              onPress={() => {
                loginData();
              }}
            >
              <Text style={styles.btntext}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.inputtext}>
              By signing up you agree with the Fanstox Terms & Conditions and
              Privacy Policy
            </Text>
          </View>
          <Spinner
           visible={loader} 
        />
    </View>
  )
}

export default Email;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      // height: window.height * 0.5
    },
  
    rectangle: {
      marginTop: window.width * 0.3
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
      textAlign: 'center'
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
      textAlign: 'center',
      marginBottom: window.width*0.03
    },
  
    inputtext1: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 12,
      marginHorizontal: window.width * 0.1,
      marginTop: window.width * 0.05,
      textAlign: 'center',
      marginBottom: window.width*0.13
    },
    inputtwoline: {
      height: window.height * 0.08,
      width: window.width * 0.85,
      marginTop: window.width * 0.15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    inputfixed: {
      width: window.width * 0.2,
    },
    inputvariable: {
      width: window.width * 0.6,
    },
  });