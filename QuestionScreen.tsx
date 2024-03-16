import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import styles from './Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import allTests from './tests/DefaultTest'
import BookParam from './tests/Test'
import genres from './bookStorage/genres'
import pageCount from './bookStorage/pageCount'
import years from './bookStorage/years'
import tags from './bookStorage/tags'
import rateCount1 from './bookStorage/ratecount1'
import rateCount2 from './bookStorage/ratecount2'
import rates1 from './bookStorage/rates1'
import rates2 from './bookStorage/rates2'
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

personParamsInTestOrd = [];
function Option({select, number, selected, text}):React.JSX.Element{
    return(
        <TouchableWithoutFeedback onPress={()=>select(number)}>
            <View style={number==selected? styles.selectedItem: styles.item}>
                <Text style={number==selected?localStyles.selectedItemText:localStyles.questionText}>
                {text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

function NextQuestionButton({next}):React.JSX.Element{
    return(
        <View style={{marginTop:40}}>
        <TouchableWithoutFeedback onPress={next}>
            <View style={styles.button}>
                <Text style={localStyles.selectedItemText}>
                Ответить
                </Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
    );
}

function ApplyVariant(selectedVariant){
    for(i=0; i < selectedVariant.personParams.length; i++){
        personParamsInTestOrd[selectedVariant.personParams[i]] =
        (personParamsInTestOrd[selectedVariant.personParams[i]] === undefined) ?
            0 : personParamsInTestOrd[selectedVariant.personParams[i]];

        personParamsInTestOrd[selectedVariant.personParams[i]] += selectedVariant.values[i];
    }
}

function SelectBooks(testParams){
    filters = [
        [], //BookParam.pageCount
        [], //BookParam.year
        [], //BookParam.genre
        [], //BookParam.tag
    ];

    bookParams = [pageCount, years, genres, tags]; // like in enum
    isRangeParams = [true, true, false, false];
    for(i = 0; i < testParams.length; i++){
        for(j = 0; j < testParams[i].limitations.length; j++){
            lim = testParams[i].limitations[j];
            if(lim.personParameterValue === personParamsInTestOrd[i]){
                filters[lim.bookParam] = filters[lim.bookParam].concat(lim.limits);
            }
        }
    }

    console.log("filters 1:" + filters[0]+ "\n2:" + filters[1]+"\n3:"+filters[2]+"\n4:"+filters[3]);
    firstBookGroup = [];// >(3/4) match params
    secondBookGroup = [];// >(2/4) match params
    thirdBookGroup = [];// >(1/4) match params

    for(i = 0; i < pageCount.length; i++){
        sum = 0; // минимум 0 максимум 4 по кол-ву выполненых ограничений
        for(j = 0; j < bookParams.length; j++){
            if(filters[j].length == 0){ // если нет ограничений => они выполнены
                sum += isRangeParams[j] ? 0.5 : 1.5;
            }
            else if(isRangeParams[j]){ // для тех, что диапозон (год, кол-во страниц)
                for(k = 0; k < filters[j].length; k+=2){ //может быть несколько диапозонов, тогда они просто идут друг за другом
                    if(bookParams[j][i] >= filters[j][k] && bookParams[j][i] <= filters[j][k+1]){ // к - старт диапозона, (к+1) - конец диапозона
                        sum+=0.5;
                        break;
                    }
                }
            }
            else{
                sumOfIncludes = 0; // кол-во встречающихся включений из фильтров в тегах или жанрах книг
                for(k = 0; k < filters[j].length; k++){
                    if(bookParams[j][i].includes(filters[j][k])){ // contains filter
                        sumOfIncludes++;
                    }
                }

                sum += (sumOfIncludes / filters[j].length) * 1.5; // включений в книге / всего фильтров
            }
        }

        if(sum > 3.2){
            firstBookGroup.push(i);
        }
        else if(sum > 2.5){
            secondBookGroup.push(i);
        }
        else if(sum > 1.4){
            thirdBookGroup.push(i);
        }
    }

    sortBy = (id1, id2) => {
        rateSum1 = rates1[id1] * rateCount1[id1] + rates2[id1] * rateCount2[id1];
        rateSum2 = rates1[id2] * rateCount1[id2] + rates2[id2] * rateCount2[id2];
        return (rateSum1 === rateSum2) ? 0 : ((rateSum1 < rateSum2) ? 1 : -1);
    };

    firstBookGroup = firstBookGroup.sort(sortBy);
    secondBookGroup = secondBookGroup.sort(sortBy);
    thirdBookGroup = thirdBookGroup.sort(sortBy);
    firstBookGroup = firstBookGroup.concat(secondBookGroup);
    firstBookGroup = firstBookGroup.concat(thirdBookGroup);
    return firstBookGroup.slice(0, 10);
}

function QuestionScreen({navigation, route}):React.JSX.Element{
    const [questionNumber, setQuestionNumber]=useState(0);
    const [selected, select]=useState(-1);
    const currentTest = allTests[route.params.id-1];
    function NextQuestion(){
        console.log("go next "+selected);
        ApplyVariant(currentTest.questions[questionNumber].variants[selected]);
        if(currentTest.questions.length > questionNumber+1){
            setQuestionNumber(questionNumber+1);
            select(-1);
        }
        else{
            console.log(personParamsInTestOrd);
            recBooks = SelectBooks(currentTest.params);
            personParamsInTestOrd = [];
            navigation.navigate("resultScreen", {books:recBooks});
        }
    }

    return(
        <SafeAreaView style={styles.safeArea}>
        <ScrollView>
            <Text style={localStyles.countText}>
                {questionNumber+1}/{currentTest.questions.length}
            </Text>
            <Text style={localStyles.questionText}>
                {currentTest.questions[questionNumber].name}
            </Text>
            {GetOptions(select, selected, route.params.id, questionNumber)}
            {selected>-1?<NextQuestionButton next={NextQuestion}/>:<View/>}
        </ScrollView>
        </SafeAreaView>
    );
}

function GetOptions(select, selected, testNum, questionNum){
    i=-1;
    return allTests[testNum-1].questions[questionNum].variants.map(op=>{
        i+=1;
        return <Option key={i} select={select} selected={selected} number={i} text={op.text} />
    })
}

function RandomId(){
    return Math.floor(Math.random() * 1276);
}

const localStyles = StyleSheet.create({
    questionText:{
        color:'black',
        fontSize:25,
        alignSelf:'center',
    },
    selectedItemText:{
        color:'white',
        fontSize:25,
        alignSelf:'center',
    },
    countText:{
        color:'black',
        fontSize:30,
        alignSelf:'flex-start',
        fontWeight:'bold',
        margin:10,
    },
});

export default QuestionScreen;