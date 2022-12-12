import React, {useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

import {AuthContext} from '../../context/AuthContext';

function LoadingScreen({navigation}) {
    const {loading, loggedIn} = useContext(AuthContext);
    
    //redirect as logged in status changes
    useEffect(() => {
		if (loggedIn) {
			navigation.dispatch(StackActions.replace('Account'));
		} else if (loggedIn === false) {
			navigation.dispatch(StackActions.replace('Login'));
		}
	}, [loggedIn]);

    return (
        <Text>Loading</Text>
    )

}
    

export default LoadingScreen;
