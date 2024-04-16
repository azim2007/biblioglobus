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
import bookNames from './bookStorage/bookNames'
import authors from './bookStorage/authors'
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

let personParamsInTestOrd = [];
let isLie: boolean = false;

/*personParamsInTestOrd = [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,   3, 3, 1, 5, 10, 16, 20, 6, 14, 22, 10, 16, 5];
let booo = SelectBooks(allTests[0].params, 3);
for(let i = 0; i < booo.length; i++){
    console.log(bookNames[booo[i]] + " - " + authors[booo[i]]);
}*/

function Option({select, number, selected, text, mc}):React.JSX.Element{
    function AddToSelect(){
        if(!mc){
            select([number]);
        }
        else if(selected.includes(number)){
            console.log("removing " + number + " from " + selected);
            let newSel = selected.filter((ele, ind) => ele !== number);
            console.log("after remove " + newSel);
            select(newSel);
        }
        else{
            let newSel =  selected.filter((ele, ind) => true);
            newSel.push(number);
            console.log("pushing " + selected + " res " + newSel);
            select(newSel);
        }
    }

    return(
        <TouchableWithoutFeedback onPress={AddToSelect}>
            <View style={selected.includes(number)? styles.selectedItem: styles.item}>
                <Text style={selected.includes(number)?localStyles.selectedItemText:localStyles.itemText}>
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
                <Text style={localStyles.buttonText}>
                Ответить
                </Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
    );
}

function ApplyVariant(selectedVariant){
    for(let i=0; i < selectedVariant.personParams.length; i++){
        personParamsInTestOrd[selectedVariant.personParams[i]] =
        (personParamsInTestOrd[selectedVariant.personParams[i]] === undefined) ?
            0 : personParamsInTestOrd[selectedVariant.personParams[i]];

        personParamsInTestOrd[selectedVariant.personParams[i]] += selectedVariant.values[i];
    }
}

function SelectBooks(testParams, id){
    let filters = [
        [], //BookParam.pageCount
        [], //BookParam.year
        [], //BookParam.genre
        [], //BookParam.tag
    ];

    let bookParams = [pageCount, years, genres, tags]; // like in enum
    let isRangeParams = [true, true, false, false];
    for(let i = 0; i < testParams.length; i++){
        for(let j = 0; j < testParams[i].limitations.length; j++){
            let lim = testParams[i].limitations[j];
            if(lim.personParameterValue === personParamsInTestOrd[i]){
                if(lim.bookParam < 4){
                    if(id == 2 || lim.limits.length < 4){
                        filters[lim.bookParam] = filters[lim.bookParam].concat(lim.limits);
                    }
                    else{
                        let nlimits = [666, 555, 444];
                        nlimits[0] = lim.limits[Math.floor((lim.limits.length - 1) / 4)];
                        nlimits[1] = lim.limits[Math.floor((lim.limits.length- 1) / 2)];
                        nlimits[2] = lim.limits[Math.floor((lim.limits.length- 1) * 3 / 4)];
                        filters[lim.bookParam] = filters[lim.bookParam].concat(nlimits);
                    }
                }
                else{
                    isLie = (lim.personParameterValue > 3) ? true : false;
                }
            }
        }
    }

    console.log("filters 1:" + filters[0]+ "\n2:" + filters[1]+"\n3:"+filters[2]+"\n4:"+filters[3]);
    let BookGroups = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];// >(3.2) match params

    for(let i = 0; i < pageCount.length; i++){
        let sum = 0; // минимум 0 максимум 4 по кол-ву выполненых ограничений
        for(let j = 0; j < bookParams.length; j++){
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
        
        for(let j = 0; j < BookGroups.length; j++){
            if(sum > (3.2 - (j/10))){
                BookGroups[j].push(i);
                break;
            }
        }
        
    }

    sortBy = (id1, id2) => {
        rateSum1 = rates1[id1] * rateCount1[id1] + rates2[id1] * rateCount2[id1];
        rateSum2 = rates1[id2] * rateCount1[id2] + rates2[id2] * rateCount2[id2];
        return (rateSum1 === rateSum2) ? 0 : ((rateSum1 < rateSum2) ? 1 : -1);
    };

    let finalBookGroup = [];
    for(let i = 0; i < BookGroups.length; i++){
        BookGroups[i] = BookGroups[i].sort(sortBy);
        finalBookGroup = finalBookGroup.concat(BookGroups[i]);
    }
    return finalBookGroup.slice(0, 10);
}

function QuestionScreen({navigation, route}):React.JSX.Element{
    const [questionNumber, setQuestionNumber]=useState(0);
    const [selected, select]=useState([]);
    const currentTest = allTests[route.params.id-1];
    let multiChoise : boolean = false;

    if(currentTest.questions[questionNumber].name[0] == ' '){        //тупая проверка на много выборов
        multiChoise = true;
    }

    if(questionNumber == 0){
        for(let i = 0; i < currentTest.params.length; i++){
            personParamsInTestOrd[i] = 0;
        }
    }

    function NextQuestion(){
        console.log("go next "+selected);
        selected.forEach(element => {
            ApplyVariant(currentTest.questions[questionNumber].variants[element]);
        });
        if(currentTest.questions.length > questionNumber+1){
            setQuestionNumber(questionNumber+1);
            if(currentTest.questions[questionNumber].name[0] == ' '){        //тупая проверка на много выборов
                multiChoise = true;
            }

            select([]);
        }
        else{
            console.log(personParamsInTestOrd);
            recBooks = SelectBooks(currentTest.params, currentTest.id);
            personParamsInTestOrd = [];
            navigation.navigate("resultScreen", {books:recBooks, isL: isLie});
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
            {GetOptions(select, selected, route.params.id, questionNumber, multiChoise)}
            {((selected.length > 0 && !multiChoise) || multiChoise)?<NextQuestionButton next={NextQuestion}/>:<View/>}
            
        </ScrollView>
        </SafeAreaView>
    );
}

function GetOptions(select, selected, testNum, questionNum, mulCh){
    i=-1;
    return allTests[testNum-1].questions[questionNum].variants.map(op=>{
        i+=1;
        return <Option key={i} select={select} selected={selected} number={i} text={op.text} mc={mulCh} />
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
    itemText:{
        color:'black',
        fontSize:15,
        alignSelf:'center',
    },
    selectedItemText:{
        color:'white',
        fontSize:15,
        alignSelf:'center',
    },
    buttonText:{
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