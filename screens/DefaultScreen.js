import React from "react";
import {View,Text} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';

export default function DefaultScreen(){
    return (
        <>
            <Background type="type2">
                <Banner type="type4" iconOne="menu-outline" iconTwo="search-outline" />
                <CustomText size={18} label="Default Screen" type="bold" style={{marginTop: 5}} />
                
            </Background>
        </>
    )
}