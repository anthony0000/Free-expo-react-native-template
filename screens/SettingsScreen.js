import React,{useState} from "react";
import {View,Text} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";
import CustomScroll from '../components/CustomScroll'
import Theme from "../constants/Theme";

export default function SettingsScreen(props){
    // access form
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');

    return (
        <>
            <Background type="type1">
                <Banner type="type2" name="My Settings" onPressOne={() => {props.navigation.goBack()}} iconOne="chevron-back-outline" />
                <CustomScroll>
                    <CustomText size={16} label="Access Settings" type="bold" style={{marginTop: 5}} />
                    <>
                        <CustomInput secureTextEntry={true} placeholder="Old Password" icon="lock-open-outline" onChangeText={text => setOldPassword(text)} />
                        <CustomInput secureTextEntry={true} placeholder="New Password" icon="lock-closed-outline" onChangeText={text => setNewPassword(text)} />
                        <View style={{paddingHorizontal: '20%'}}>
                            <CustomButton label="Save Changes" style={{marginTop: 20}} size={Theme.fontSize - 4} textStyle={{textTransform: 'uppercase'}} />
                        </View>
                    </>
                    <CustomText size={16} label="Image Settings" type="bold" style={{marginTop: 25}} />
                    <>
                        <CustomInput placeholder="Old Password" icon="image-outline" onChangeText={text => setOldPassword(text)} />
                        <View style={{paddingHorizontal: '20%'}}>
                            <CustomButton label="Save Changes" style={{marginTop: 20}} size={Theme.fontSize - 4} textStyle={{textTransform: 'uppercase'}} />
                        </View>
                    </>
                </CustomScroll>
            </Background>
        </>
    )
}