import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import styles from './Styles';
import MainScreen from './MainScreen';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
        name='mainMenu'
        component={MainScreen}
        options={{
            title:"БиблиоГлобус",
            headerStyle:styles.headerS,
            headerTitleStyle:styles.headerText}}/>

        <Stack.Screen
            name='questionScreen'
            component={QuestionScreen}
            options={{
                title:"БиблиоГлобус",
                headerStyle:styles.headerS,
                headerTitleStyle:styles.headerText}}/>

        <Stack.Screen
            name='resultScreen'
            component={ResultScreen}
            options={{
                title:"Результат",
                headerStyle:styles.headerS,
                headerTitleStyle:styles.headerText,
                headerLeft:()=>(<View/>)}}/>
    </Stack.Navigator>

    </NavigationContainer>

  );
}

export default App;
