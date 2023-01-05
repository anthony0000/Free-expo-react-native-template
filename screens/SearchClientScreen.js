import React,{useEffect,useState} from "react";
import {View} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';
import { Searchbar } from 'react-native-paper';
import Theme from "../constants/Theme";
import { useSelector } from 'react-redux'; 
import ImageCard from "../components/ImageCard";
import CustomButton from "../components/Button";
import CustomScroll from "../components/CustomScroll";

export default function SearchClientScreen(props){
    const theme = useSelector(state => state.themeManager);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <>
            <Background type="type1">
                <Banner type="type4" onPressOne={() => {props.navigation.toggleDrawer()}} iconOne="menu-outline" iconTwo="person-outline" />
                <CustomScroll>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{
                            marginTop: 10,
                            backgroundColor: theme.mode == 'light' ? Theme.secondary : Theme.grey,
                            borderRadius: Theme.radius + 20
                        }}
                        inputStyle={{
                            fontFamily: Theme.boldfont,
                            fontSize: Theme.fontSize,
                            color: theme.mode == 'light' ? Theme.primary : Theme.secondary,
                        }}
                        placeholderTextColor={theme.mode == 'light' ? Theme.grey : Theme.secondary}
                        iconColor={theme.mode == 'light' ? Theme.grey : Theme.secondary}
                    />
                    <CustomText size={30} label="23 results" type="extrabold" style={{marginTop: 15}} />
                    <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap',paddingVertical: 10}}>
                        <ImageCard onPress={()=> {console.log('pressed')}} source={require('../assets/adaptive-icon.png')} label="Samara .J. Biden">
                            <CustomButton label="PROJECTS . 15" size={11} style={{marginTop: 10}} />
                        </ImageCard>
                        <ImageCard onPress={()=> {console.log('pressed')}} source={require('../assets/adaptive-icon.png')} label="Phillips Anthony">
                            <CustomButton label="PROJECTS . 15" size={11} style={{marginTop: 10}} />
                        </ImageCard>
                        <ImageCard onPress={()=> {console.log('pressed')}} source={require('../assets/adaptive-icon.png')} label="Caleb Johnson">
                            <CustomButton label="PROJECTS . 15" size={11} style={{marginTop: 10}} />
                        </ImageCard>
                        <ImageCard onPress={()=> {console.log('pressed')}} source={require('../assets/adaptive-icon.png')} label="Kaden Phillipus">
                            <CustomButton label="PROJECTS . 15" size={11} style={{marginTop: 10}} />
                        </ImageCard>
                    </View>
                </CustomScroll>
            </Background>
        </>
    )
}