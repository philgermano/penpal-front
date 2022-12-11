import React, {useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

import {AuthContext} from '../context/AuthContext';

function LoadingScreen({navigation}) {



    return (
        <Text>Loading</Text>
    )

}
    

export default LoadingScreen;
