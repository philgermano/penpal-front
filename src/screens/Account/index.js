import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, useTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";

import { AuthContext } from "../../context/AuthContext";

function AccountScreen({navigation}) {
    const { logout, loggedIn, userData } = useContext(AuthContext);


    //redirect if not logged in
    useEffect(() => {
        if (loggedIn === false) {
          navigation.dispatch(StackActions.replace("Login"));
        }
      }, [loggedIn]);
    

    return (
    <View>
      {userData && (
        <View >
          <Avatar.Image size={100} source={{ uri: userData.picture }} />
          <View>
            <Text>{userData.name}</Text>
          </View>
        </View>
        )}
         </View>
    )
}
    

export default AccountScreen;