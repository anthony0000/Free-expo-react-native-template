import React,{useState} from "react";
import {View,Text} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';
import CustomInput from "../components/Input";
import CustomButton from "../components/Button";
import CustomScroll from '../components/CustomScroll';
import CustomDropDown from "../components/DropDown";
import Theme from "../constants/Theme";

export default function AddClientScreen(props){
    // access form
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    
    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
    ]);

    return (
        <>
            <Background type="type1">
                <Banner type="type2" name="Create Client Account" onPressOne={() => {props.navigation.goBack()}} iconOne="chevron-back-outline" />
                <CustomScroll>
                    <>
                        <CustomDropDown
                            open={genderOpen}
                            value={genderValue}
                            items={gender}
                            setOpen={setGenderOpen}
                            setValue={setGenderValue}
                            setItems={setGender}
                            placeholder="Select Gender"
                        />
                        <View style={{paddingHorizontal: '20%'}}>
                            <CustomButton label={"Add Client"} style={{marginTop: 20}} size={Theme.fontSize - 4} textStyle={{textTransform: 'uppercase'}} />
                        </View>
                    </>
                </CustomScroll>
            </Background>
        </>
    )
}