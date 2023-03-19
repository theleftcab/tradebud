import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import BottomNav from "./BottomNav"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Payment,Settings} from "./index"


const HomeStack = () => {
    const Stack = createNativeStackNavigator();

    const window = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

    return (
        <Stack.Navigator initialRouteName="BottomNav" screenOptions={{ headerShown: false }}  >
            <Stack.Screen name="BottomNav" component={BottomNav} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>

    )
}

export default HomeStack