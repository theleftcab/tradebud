import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SearchBar } from "react-native-elements";


const Settings = ({ navigation }) => {
    const [search, setSearch] = useState("");


    const window = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }



    return (
        <View style={{
            backgroundColor: "black",
            height: window.height * 1.2,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.05 }}>

          
                <TouchableOpacity
                 onPress={()=>{
                  navigation.goBack();
                }}
                >
                    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: window.width * 0.05 }}>
                        <Image style={{
                            width: window.width * 0.09,
                            height: window.height * 0.03,
                        }} source={require("../assets/back.png")} />
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: window.width * 0.25 }}>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>Settings</Text>
                </View>
            </View>

            <SearchBar
        placeholder="Search"
        onChangeText={(search) => setSearch(search)}
        value={search}
        containerStyle={{
          marginTop: window.width * 0.04,
          backgroundColor: "#000",
          borderRadius: 20,
          marginHorizontal: window.width * 0.03
        }}
       placeholderTextColor={"#fff"}
       
        inputContainerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.4)", borderRadius: 20 }}
      />

            <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.03, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.08,
                height: window.height * 0.03,
              }} source={require("../assets/discover_white.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 , color: "#fff"}}>Follow & Invite friends</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.03, marginHorizontal: window.width * 0.06 }}>
              <Image style={{
                width: window.width * 0.05,
                height: window.height * 0.03,
              }} source={require("../assets/notifications.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.055, color: "#fff" }}>Notifications</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>{
            navigation.navigate('HomeStack')
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.03, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.08,
                height: window.height * 0.04,
              }} source={require("../assets/contact.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05, color: "#fff" }}>Account</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>{
            navigation.navigate('About')
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.03, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.07,
                height: window.height * 0.035,
              }} source={require("../assets/help.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.06, color: "#fff" }}>About us</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>{
            navigation.navigate('Home')
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.03, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
               width: window.width * 0.07,
               height: window.height * 0.035,
              }} source={require("../assets/logout.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.06, color: "#fff" }}>Log Out</Text>
            </View>
          </TouchableOpacity>

          


        </View>
    )
}

export default Settings;