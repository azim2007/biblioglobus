import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import styles from './Styles';
import pictures from './bookStorage/pictures'
import bookNames from './bookStorage/bookNames'
import authors from './bookStorage/authors'
import years from './bookStorage/years'
import pageCount from './bookStorage/pageCount'
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
  Image
} from 'react-native';

function ResultScreen({navigation, route}):React.JSX.Element{
    [imageWidth, setWidth] = useState(1);
    [imageHeight, setHeight] = useState(1);
    [firstBookIndex, setFirstBookIndex] = useState(route.params.books[0]);
    Image.getSize(pictures[firstBookIndex],
    (w, h)=>{setWidth(w);setHeight(h);});
    return(
        <SafeAreaView style={styles.safeArea}>
        <ScrollView>
            <Text style={localStyles.headerText}>
                {(firstBookIndex == route.params.books[0]) ? "Вам подойдет книга" : "Информация о книге"}
            </Text>
            <View style={localStyles.bookView}>
                <Image style={{
                  flex:1,
                  aspectRatio: imageWidth/imageHeight,
                  borderRadius:5,
                }} source={{uri:pictures[firstBookIndex],}}/>
                <View style={{flex:2}}>
                    <BookInfo id={firstBookIndex}></BookInfo>
                </View>
            </View>
            <Text style={localStyles.header2Text}>Вам также может понравиться</Text>

            {AlsoEnjoy(route.params.books, firstBookIndex, setFirstBookIndex) }

            <View style={{marginTop:40}}>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("mainMenu")}}>
                <View style={styles.button}>
                    <Text style={localStyles.selectedItemText}>
                    На главную
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

function BookInfo({id}):React.JSX.Element{
    return(
        <View>
            <Text style={localStyles.name}>{bookNames[id]}</Text>
            <Text style={localStyles.defText}>Автор: {authors[id]}</Text>
            {years[id] == 0 ?<View></View> :
                <Text style={localStyles.defText}>Год издания: {years[id]}</Text>}
            {pageCount[id] == 0 ?<View></View> :
                <Text style={localStyles.defText}>Кол-во страниц: {pageCount[id]}</Text>}
        </View>
    );
}

function AlsoEnjoy(ids, fBook, setFirst):React.JSX.Element{
    arrow = " >";
    return ids.map(id=> (id != fBook) ?
    <TouchableWithoutFeedback onPress={() => setFirst(id)}>
        <Text key={id} style={localStyles.referenceText}>{bookNames[id] + arrow}</Text>
    </TouchableWithoutFeedback> :
    <View key={id}></View>);
}

const localStyles = StyleSheet.create({
    headerText:{
        color:'black',
        alignSelf:'center',
        fontSize:35,
        marginLeft:10,
        fontWeight:'bold',
        fontStyle:'italic',
    },
    name:{
        color:'black',
        alignSelf:'center',
        fontSize:30,
        marginLeft:10,
        fontWeight:'bold',
    },
    bookView:{
        flexDirection:'row',
        padding:15,
    },
    defText:{
        color:'black',
        fontSize:20,
        marginLeft:10,
    },
    referenceText:{
        color:'#2a9df4',
        fontSize:20,
        marginLeft:10,
    },
    header2Text:{
        color:'black',
        alignSelf:'center',
        fontSize:25,
        marginLeft:10,
        fontWeight:'bold',
        fontStyle:'italic',
    },
    selectedItemText:{
        color:'white',
        fontSize:25,
        alignSelf:'center',
    },
});

export default ResultScreen;