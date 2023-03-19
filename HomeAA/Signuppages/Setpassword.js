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

  const window = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  };


const Setpassword = ({navigation}) => {
    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const [secure, setSecure] = useState(true);
    const [secure1, setSecure1] = useState(true);
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);
  
    const togglrfun1=()=>{
        setToggle1((toggle1) => !toggle1);
        setSecure((secure)=>!secure);
    }
    const togglrfun2=()=>{
        setToggle2((toggle2) => !toggle2);
        setSecure1((secure1)=>!secure1);

    }
  return (
    <View style={styles.container}>
        {/* header  */}
      <View style={styles.header}>
          <TouchableOpacity  
          onPress={() => navigation.goBack()}
        >
            <Ionicons name="chevron-back-outline" color="black" size={25} />
          </TouchableOpacity>
         
        </View>
 
        <Text style={{fontSize:20,fontWeight:"600", margin: window.width * 0.05,
}}>Set Password </Text>

{/* password  */}
 
<TextInput style={{margin: window.width * 0.05}}
              // style={styles.curve}
              // style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, borderRadius: 20,  marginBottom: 20, fontSize: 18 }}
              label="Password "
              value={text}
              outlineStyle={{ borderRadius: 30 }}
              mode="outlined"
              secureTextEntry={secure}
              onChangeText={(text) => setText(text)}
            />
{/* icon  */} 
<TouchableOpacity style={{zIndex:200,position:"absolute",marginTop:window.height*0.202,
marginLeft:window.height*0.39}}
onPress={()=>{togglrfun1()}}
>
{
    toggle1 ?
    <Ionicons 
    name="eye-outline"
     color={"black"} 
     size={20} />:
     
<Ionicons 
name="eye-off-outline"
 color={"black"} 
 size={20} />
}
</TouchableOpacity>

{/* re-password  */}
 
<TextInput style={{margin: window.width * 0.05}}
              // style={styles.curve}
              // style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 2, borderRadius: 20,  marginBottom: 20, fontSize: 18 }}
              label="Retype Password "
              value={text1}
              outlineStyle={{ borderRadius: 30 }}
              mode="outlined"
              secureTextEntry={secure1}
              onChangeText={(text1) => setText1(text1)}
            />
{/* icon  */} 

<TouchableOpacity style={{
    zIndex:200, 
    position:"absolute",
    marginTop:window.height*0.312,
    marginLeft:window.height*0.39}}
    onPress={()=>{togglrfun2()}}

>

{
    toggle2 ?
    <Ionicons 
    name="eye-outline"
     color={"black"} 
     size={20} />:
     
<Ionicons 
name="eye-off-outline"
 color={"black"} 
 size={20} />
}
</TouchableOpacity>

{/* btn  */}
<TouchableOpacity
            style={{       
                 width: window.width * 0.9,
                 height: window.width * 0.13,
                backgroundColor:"#390bff",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:20,
        marginVertical: window.width * 0.05,
        margin: window.width * 0.05
                
                
                }}
                onPress={()=>{    navigation.navigate("Twosection")  }}

                >
<Text style={{ 
color:"white",
fontSize:16,
}} > Book now </Text>

            </TouchableOpacity>
    </View>
  )
}

export default Setpassword;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: window.height * 1,
        flex:1,
        flexDirection:"column", 
      },

      header: {
        // flex: 0.08,
        flexDirection: 'row',
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


    })