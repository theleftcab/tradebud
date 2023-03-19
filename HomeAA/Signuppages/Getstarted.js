import {
  TouchableOpacity, View, Text, StyleSheet,
  Dimensions, Image, ScrollView,
  SafeAreaView
} from 'react-native'
import React from 'react'   
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Getstarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* header  */}
      {/* <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              color="black"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Setting")}
          >

            <Image style={styles.headerRight} source={require("../../assets/profilep.png")} />
          </TouchableOpacity>
        </View> */}
   
       <View style={{justifyContent:"center",alignItems:"center",}}>
       <Image  source={require("../../assets/stared.png")} />
       <Text style={{fontSize:22,fontWeight:"500"}} > Your account has been </Text>
        <Text style={{fontSize:22,fontWeight:"500"}}> created successfully </Text>
       <View>

        <View style={{flexDirection:"row",marginTop:window.width*0.35,justifyContent:"center",alignItems:"center"}}>

        <Text style={{fontSize:20,fontWeight:"500"}}>Welcome to </Text>
        <Text style={{fontSize:20,fontWeight:"500",color:"#5933ff"}}> FANSTOX </Text>

        </View>


        <View style={{ marginTop:window.width*0.05,justifyContent:"center",alignItems:"center"}}> 

        <Text> Join our growing community of future </Text>
        <Text> traders and investors </Text>
        </View>

{/* btn  */}
        <TouchableOpacity
              style={styles.btn1}
              mode="outlined"
              buttonColor="#380AFF"
              textColor="white"
              onPress={() => { 
                navigation.dispatch(navigation.pop(4) );
          navigation.replace('HomeStack');
              }}
            >
              <Text style={styles.btntext}>Get Started </Text>
            </TouchableOpacity>
       </View>
       </View>
       <StatusBar style='auto'/>

    </View>
  )
}

export default Getstarted;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    height: window.height,

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
    elevation: 10,
    borderTopLeftRadius: 10,
    height: window.height * 0.08,

  },
  headerRight: {
    borderRadius: 200,
    width: 30,
    height: 30,
  },

})