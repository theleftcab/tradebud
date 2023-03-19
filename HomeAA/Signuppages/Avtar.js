import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { Header } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
import { TextInput, Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay";
import { fonts } from "@rneui/base";
import { PATH, BASE_URL } from "../api";
import axios from "axios";

const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Avtar = ({ navigation }) => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('')
  const [loader, setLoader] = useState(false);
  const [errorcall, setErrorcall] = useState(false);
  const [emptytext, setEmptytext] = useState(false);
  const [avtselected, setAvtselected] = useState(false);

  const [data, setData] = useState([
    {
      imgsrc: "../../assets/avt1.png",
      isSelected: false,
    },
    {
      imgsrc: "../../assets/avt1.png",
      isSelected: false,
    },
    {
      imgsrc: "../../assets/avt1.png",
      isSelected: false,
    },
  ]);
  
//function for handling registration 

const registration = ()=>{
  const data = {text, text1, text2}
axios.post(`${BASE_URL + PATH.REGISTER}`, data).then((res)=>{
  alert(res)
})  
}
  const nextpage = async () => {
    navigation.navigate("Authnum");
 
  };

  const newpage = async () => {
    navigation.navigate("Login");
  };

  const imgSelect = (ind) => {
    const temp = [];
    data.map((item, index) => {
      if (index == ind) {
        if (item.isSelected == false) {
          item.isSelected = true;
          setErrorcall(false);
          setAvtselected(true);
          temp.push(item);
        } else if (item.isSelected == true) {
          item.isSelected = false;
          setErrorcall(true);
          setAvtselected(false);
          temp.push(item);
        }
      } else {
        if (item.isSelected) {
          item.isSelected = false;
          temp.push(item);
        } else {
          temp.push(item);
        }
      }
    });

    setData(temp);
  };

  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" color="white" size={25} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          margin: window.width * 0.05,
          color: "white",
        }}
      >
        {" "}
        Choose you profile avatar{" "}
      </Text>

      <View style={{}}>
        {/* flatlist    */}
        <FlatList
          data={data}
          horizontal={true}
          style={{ marginTop: window.width * 0 }}
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => (item.toString(), index.toString())}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles.slider}
                onPress={() => {
                  imgSelect(index);
                }}
              >
                {item.isSelected == true ? (
                  <Image
                    source={require("../../assets/avt1.png")}
                    style={styles.borderimage}
                  />
                ) : (
                  <Image source={require("../../assets/avt1.png")} />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.innercontainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TextInput
            style={styles.email}
            // style={styles.curve}
            // style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, borderRadius: 20,  marginBottom: 20, fontSize: 18 }}
            label="First name"
            theme={{ colors: { primary: "black" } }}
            // value={text}
            error={emptytext}
            outlineStyle={{ borderRadius: 10 }}
            mode="flat"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.email}
            // style={styles.curve}
            // style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, borderRadius: 20,  marginBottom: 20, fontSize: 18 }}
            label="Last name"
            // value={text}
            error={emptytext}
            theme={{ colors: { primary: "black" } }}
            outlineStyle={{ borderRadius: 10 }}
            mode="flat"
            onChangeText={(text) => setText1(text)}
          />
        </View>

        <TextInput
          // style={styles.email}
          // style={styles.curve}
          style={{
            borderRadius: 5,
            marginLeft: window.width * 0.03,
            marginTop: window.width * 0.1,
            fontSize: 18,
            height: window.width * 0.15,
            width: window.width * 0.85,
          }}
          label="Your Email Address"
          // value={text}
          // error={emptytext}
          outlineStyle={{ borderRadius: 5 }}
          mode="flat"
          theme={{ colors: { primary: "black" } }}
          onChangeText={(text) => setText2(text)}
        />
        {errorcall && (
          <Text style={{ textAlign: "center", fontSize: 16, color: "red" }}>
            {" "}
            Please select avatar{" "}
          </Text>
        )}
        {emptytext && (
          <Text style={{ textAlign: "center", fontSize: 16, color: "red" }}>
            {text == ""
              ? "Please choose correct username"
              : "Username already exist"}
          </Text>
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginVertical: window.width * 0.1,
            marginHorizontal: window.width * 0.05,
            width: window.width * 0.8,
          }}
        >
          <Ionicons name={"checkbox"} size={20} color={"white"} />
          <Text style={{ color: "white", fontSize: 16 }}>
            I agree to the terms and conditions
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: window.width * 0.9,
            height: window.width * 0.13,
            backgroundColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 200,
            marginVertical: window.width * 0.05,
          }}
          //onPress={registration}
           onPress={() => {
           nextpage();
           }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 18,
            }}
          >
            {" "}
            REGISTER{" "}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
          <Text style={{ fontSize: 16, color: "white" }}> Already have an account?  </Text>
          <TouchableOpacity onPress={()=>{
            newpage()
          }}>
            <Text style={{ fontSize: 16, color: "#22A7A7" }}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spinner visible={loader} />
      <StatusBar style="auto" translucent={false} />
    </View>
  );
};

export default Avtar;

const styles = StyleSheet.create({
  borderimage: {
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 200,
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    height: window.height * 1,
    flex: 1,
    flexDirection: "column",
  },
  slider: {
    paddingLeft: window.width * 0.06,
    flexDirection: "row",
  },
  innercontainer: {
    marginHorizontal: window.width * 0.05,
    paddingTop: window.width * 0.1,
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
    // elevation: 10,
    borderTopLeftRadius: 10,
    height: window.height * 0.08,
  },
  email: {
    height: window.width * 0.15,
    width: window.width * 0.4,
    color: "white",
    // backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
});
