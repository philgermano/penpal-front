import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";

import { AuthContext } from "../../context/AuthContext";


const LoginScreen = ({ navigation }) => {
    const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      navigation.dispatch(StackActions.replace("Account"));
    }
  }, [loggedIn]);

  const { login } = useContext(AuthContext);

    return (
          <View >
      <Button mode="contained" onPress={() => login()}>
        Login with Auth0
      </Button>
    </View>
  );


}
    

export default LoginScreen;