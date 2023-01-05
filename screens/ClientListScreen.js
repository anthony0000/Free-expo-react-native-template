import React from "react";
import {View,Text, ScrollView} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';
import CustomButton from "../components/Button";
import ImageCard from "../components/ImageCard";

export default function ClientListScreen(props){
    return (
        <>
            <Background type="type1">
                <Banner type="type2" name={'My Clients (' + 35 + ')'} onPressOne={() => {props.navigation.navigate('AddClient')}} iconOne="add-outline" iconTwo="search-outline" />
                <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap',paddingVertical: 10}}>
                    <ImageCard onPress={()=> {props.navigation.navigate('ViewClient')}} source={require('../assets/adaptive-icon.png')} label="Samara .J. Biden">
                        <CustomButton label="PROJECTS . 35" size={11} style={{marginTop: 10}} />
                    </ImageCard>
                    <ImageCard onPress={()=> {console.log('pressed')}} source={require('../assets/adaptive-icon.png')} label="Phillips Anthony">
                        <CustomButton label="PROJECTS . 12" size={11} style={{marginTop: 10}} />
                    </ImageCard>
                    <ImageCard onPress={()=> {console.log('pressed')}} source={require('../assets/adaptive-icon.png')} label="Caleb Johnson">
                        <CustomButton label="PROJECTS . 22" size={11} style={{marginTop: 10}} />
                    </ImageCard>
                    <ImageCard onPress={()=> {console.log('pressed')}} source={require('../assets/adaptive-icon.png')} label="Kaden Phillipus">
                        <CustomButton label="PROJECTS . 51" size={11} style={{marginTop: 10}} />
                    </ImageCard>
                </View>
            </Background>
        </>
    )
}