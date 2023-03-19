import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
} from "react-native";
import React, { useRef } from 'react';

const Payment = ({navigation}) => {


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
                    navigation.goBack()
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
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>Payments</Text>
                </View>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: window.height * 0.07 }}>
                <Image style={{
                    width: window.width * 0.44,
                    height: window.height * 0.21,
                }} source={require("../assets/activity.png")} />

                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "400", marginTop: window.height * 0.04 }}>No activity</Text>
                <Text style={{ color: "#fff", fontSize: 12, fontWeight: "400", marginTop: window.height * 0.01, textAlign: 'center' }}>When you make purchase on instagram, yourInstagram activity will be shown here.</Text>
            </View>

            <View style={{ marginHorizontal: window.width * 0.05 }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "400", marginTop: window.height * 0.04 }}>Settings</Text>

                <View style={{ marginTop: window.height * 0.01 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02 }}>
                            <Image style={{
                                width: window.width * 0.09,
                                height: window.height * 0.03,
                            }} source={require("../assets/pm.png")} />

                            <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05, color: "#fff" }}>Payment methods</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02 }}>
                            <Image style={{
                                width: window.width * 0.085,
                                height: window.height * 0.04,
                            }} source={require("../assets/contact.png")} />

                            <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05, color: "#fff" }}>Contact info</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default Payment;