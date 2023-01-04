import React from "react";
import {View,Text} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';

export default function NotificationScreen(props){
    return (
        <>
            <Background type="type1">
                <Banner type="type4" onPressOne={() => {props.navigation.toggleDrawer()}} iconOne="menu-outline" iconTwo="search-outline" />
                <CustomText size={18} label="Notification Screen" type="bold" style={{marginTop: 5}} />
            </Background>
        </>
    )
}