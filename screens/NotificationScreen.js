import React,{useState} from "react";
import {Image,Text,View,Button} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomText from '../components/Text';
import CustomScroll from '../components/CustomScroll';
import Theme from "../constants/Theme";
import CustomButton from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useSelector } from 'react-redux'; 

export default function NotificationScreen(props){
    const theme = useSelector(state => state.themeManager);
    const [isModalVisible, setModalVisible] = useState(false);
    const [contentModal,setContentModal] = useState('');
    const toggleModal = (content) => {
        setModalVisible(!isModalVisible);
        setContentModal(content);
    };
    return (
        <>
            <Background type="type1">
                <Banner type="type2" name="Notifications" onPressOne={() => {props.navigation.goBack()}} iconOne="chevron-back-outline" iconTwo="search-outline" />
                <CustomScroll style={{paddingTop: 20}}>
                    <Modal isVisible={isModalVisible}>
                        <View style={{ flex: 1,backgroundColor: theme.mode === 'light' ? Theme.primary : Theme.lightSecondary,paddingHorizontal: 10,paddingVertical: 10,borderRadius: 10}}>
                            <CustomText label={contentModal} type="bold" size={Theme.fontSize + 2} style={{textTransform: 'capitalize',textAlign: 'center'}}  />
                            <View style={{paddingHorizontal: 40}}>
                                <CustomButton onPress={()=> {toggleModal('hello')}} label="Close Notification" style={{marginTop: 20}} />
                            </View>
                        </View>
                    </Modal>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',borderBottomWidth: 0.3,borderColor: Theme.secondary,paddingBottom: 15,paddingTop: 15}}>
                        <Image style={{height: 40,width: 40,borderRadius: Theme.radius,marginRight: 10}} source={{uri: 'https://images.pexels.com/photos/6605310/pexels-photo-6605310.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}} />
                        <View>
                            <CustomText type="bold" size={Theme.fontSize} label="Yoga & Tennis" style={{textAlign: 'left'}} />
                            <CustomText type="regular" size={Theme.fontSize - 4} label="Yoga & Tennis ..." style={{textAlign: 'left'}} />
                        </View>
                        <CustomButton onPress={()=> {toggleModal('hello transform notification, 32901iwiqwei')}} label={<Ionicons name="expand-outline" size={Theme.fontSize} />} />
                        
                    </View>
                </CustomScroll>
            </Background>
        </>
    )
}