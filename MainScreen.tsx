import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import styles from './Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import allTests from './tests/DefaultTest'
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


function TestItem({test, navigation}):React.JSX.Element{
    const [opened, open] = useState(true);
    function handleClickItem(){
        open(!opened);
    }
    console.log(test.name);
    return(
        <TouchableWithoutFeedback onPress={handleClickItem}>
        <View style={styles.item}>
            <Text style={localStyles.itemName}>{test.name}</Text>
            <Text style={localStyles.itemDescription} numberOfLines={opened?3:0}>
                {test.description}
            </Text>
            <View style={localStyles.itemView}>
                <Text style={localStyles.questionCount}>
                    Вопросов: {test.questions.length}
                </Text>
                {!opened?
                <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#202020"
                onPress={()=>navigation.navigate("questionScreen", {id:test.id})}>
                    <View style={styles.button}>
                        <Text style={localStyles.buttonText}>Пройти</Text>
                    </View>
                </TouchableHighlight>
                :
                <View/>}
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

function MainScreen({navigation}):React.JSX.Element{
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <ScrollView>
                    {GiveTests(navigation)}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

function GiveTests(navigation){
    return allTests.map(test=><TestItem key={test.name} test={test} navigation={navigation}></TestItem>)
}

const localStyles = StyleSheet.create({

    itemName:{
        color:'black',
        fontSize:25,
        alignSelf:'center'
    },
    itemDescription:{
        color:'black',
        fontSize:15,
        alignSelf:'center'
    },
    itemView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    questionCount:{
        alignSelf:'flex-start',
        color:'black',
        fontSize:25
    },
    buttonText:{
        color:'white',
        fontSize:25
    },
});

export default MainScreen;