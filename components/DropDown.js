import React,{useState} from "react";
import {View,Text} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";
import CustomScroll from '../components/CustomScroll'
import Theme from "../constants/Theme";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from 'react-redux';

export default function CustomDropDown(props) {
    const theme = useSelector(state => state.themeManager);
    return (
        <DropDownPicker
            style={{height: 50,borderWidth: 0,backgroundColor: theme.mode === 'light' ? Theme.secondary : Theme.primary,marginTop: 10}}
            textStyle={{fontFamily: Theme.boldfont,color: theme.mode === 'light' ? Theme.primary : Theme.secondary}}
            open={props.open}
            value={props.value} //genderValue
            items={props.items}
            setOpen={props.setOpen}
            setValue={props.setValue}
            setItems={props.setItems}
            placeholder={props.placeholder}
            placeholderStyle={{color: theme.mode === 'light' ? Theme.grey : Theme.lightSecondary}}
            zIndex={3000}
            zIndexInverse={4000}
            dropDownContainerStyle={{
                backgroundColor: theme.mode === 'light' ? Theme.secondary : Theme.primary,
            }}
        />
    )
}