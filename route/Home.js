import React, {useCallback} from 'react'
import { StatusBar } from 'expo-status-bar';
import {   ScrollView, TouchableOpacity,StyleSheet,
   Text, View, Image, Button, SafeAreaView, Dimensions } from 'react-native';
import Signup from '../assets/signup.png'
import { useFonts } from 'expo-font';

const window = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Home=({navigation})=> {
  const [fontsLoaded] = useFonts({
    'DMRegular': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  const SignupUri = Image.resolveAssetSource(Signup).uri;
  return (
    <SafeAreaView>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: SignupUri }}
        />
        
        <TouchableOpacity 
        onPress={()=>{    navigation.navigate("Avtar")  }}
        >
          
         <Text style={styles.button}>REGISTRATION</Text> 
          
        </TouchableOpacity>

        
        <TouchableOpacity
                // onPress={()=>{     navigation.navigate("Otp"); }}
                onPress={()=>{    navigation.navigate("Login")  }}
                >
        <Text style={styles.buttonIn}>LOG IN</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    height: window.height * 1.03
  },
  fanstox: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row'
  },
  text_welcome: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    fontWeight: "bold",
    fontSize: 36, 
  },
  text_fanstox: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    fontWeight: "bold",
    fontSize: 30,
    color: '#380AFF', 
  },
  join: {
    width: 280,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
    color: '#4E4E4E'
  },
  tinyLogo: {
    width: 350,
    height: 300,
    marginBottom: 70,
    marginTop: 40
  },
  button: {
    backgroundColor: "white",
    color: "black",
    padding: 10,
    width: window.width*0.8, 
    height: window.width*0.15,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical:"center",
    marginBottom: 20,
    fontSize:22
  },
  buttonIn: {
    backgroundColor: "white",
    color: "black",
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    width: 300,
    height: window.width*0.15,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', 
    textAlignVertical:"center",
    marginBottom: 90,
    fontSize:22
  },
  button_google: {
    color: "#000",
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20
  }
});

export default Home;