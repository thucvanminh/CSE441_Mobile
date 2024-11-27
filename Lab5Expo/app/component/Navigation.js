import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screen/Login";
import Service from "../screen/Service";
import { AuthContext } from "../context/AuthContext";
import MainNavigation from "./MainNavigation";
import AddService from "../screen/AddService";
import ServiceDetail from "../screen/ServiceDetail";
import EditService from "../screen/EditService";
import { IconButton } from 'react-native-paper';
import AddCustomer from "../screen/AddCustomer";
import Customer from "../screen/Customer";
import Transaction from "../screen/Transaction";
import TransactionDetail from "../screen/TransactionDetail";
import Settings from "../screen/Setting";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo} = useContext(AuthContext);
  
    
    return (

             <Stack.Navigator
                screenOptions={({route})=>({
                    headerStyle:{
                        backgroundColor: "#E64E6A",
                    },
                    headerTintColor: "white",
                    
                })}
             >
                {userInfo.token ? 
                    <>
                        <Stack.Screen name="MainNavigation" component={MainNavigation} options={{headerShown: false}}/>
                    </>
                :
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                    </>
                }       
             </Stack.Navigator>
 
    )
}

export default Navigation