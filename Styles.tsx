import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    item:{
        margin:10,
        alignSelf:'stretch',
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#f2f2f2',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 9,
        shadowRadius: 30,
        elevation: 7,
        padding:5,
    },
    selectedItem:{
        margin:10,
        alignSelf:'stretch',
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#505050',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 9,
        shadowRadius: 30,
        elevation: 7,
        padding:5,
    },
  headerS: {
    flex:1,
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 20,
    },
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },

  headerText:{
    color:'black',
    flex:1,
    alignSelf:'stretch',
    textAlignVertical: 'center',
    fontSize:30,
    marginLeft:10,
    fontWeight:'bold',
    fontStyle:'italic',
  },

  safeArea:{
    flex:1,
    backgroundColor:"white"
  },

  content:{
    flex:10
  },
  button:{
      borderRadius:5,
      backgroundColor:'#303030',
      paddingLeft:10,
      paddingRight:10,
      alignSelf:"center",
  }
});

export default styles;