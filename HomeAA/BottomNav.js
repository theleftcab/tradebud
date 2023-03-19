import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomHome,BottomTrending,BottomProfile} from "../HomeAA"

const Tab = createBottomTabNavigator();
const BottomNav = () => {

  const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
 
  return (
    <Tab.Navigator
      initialRouteName="Bottomhome"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          elevation: 20,
          borderTopWidth: 0,
          position: "absolute",
          height: 60,
          width: window.width * 1,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "BottomHome") {
            iconName = focused ? "active" : "inactive";
            return  (
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  width: window.width*0.35,
                  height: window.height*0.05
                }}
              >
              { iconName=='inactive'? <Image source={require("../assets/home_white.png")} style={{
                  width: window.width*0.1,
                  height: window.width*0.1,}} /> : <Image source={require("../assets/home_black.png")} style={{
                    width: window.width*0.1,
                    height: window.width*0.1,}} />}
              </View>
            );} 
          
          else if (route.name === "BottomTrending") {
            iconName = focused ? "active" : "inactive";
            return  (
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  width: window.width*0.35,
                  height: window.height*0.05
                }}
              >
              { iconName=='inactive'? <Image source={require("../assets/trending_white.png")} style={{
                  width: window.width*0.1,
                  height: window.width*0.1,}} /> : <Image source={require("../assets/home_white.png")} style={{
                    width: window.width*0.1,
                    height: window.width*0.1,}} />}
              </View>
            );
          } 
          
          else if (route.name === "BottomProfile") {
            iconName = focused ? "active" : "inactive";
            size = 30;
            return (
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  width: window.width*0.35,
                  height: window.height*0.05
                }}
              >
              { iconName=='inactive'? <Image source={require("../assets/profile_white.png")} style={{
                  width: window.width*0.1,
                  height: window.width*0.1,}} /> : <Image source={require("../assets/profile_black.png")} style={{
                    width: window.width*0.1,
                    height: window.width*0.1,}} />}
              </View>
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >

 <Tab.Screen name="BottomHome" component={BottomHome}/>
 <Tab.Screen name="BottomTrending" component={BottomTrending}/>
 <Tab.Screen name="BottomProfile" component={BottomProfile}/>
  </Tab.Navigator>
  );
}

export default BottomNav