import React from "react";
import {View,Text} from "react-native";
import Modal from "react-native-modal";
import CustomButton from "./Button";
import CustomText from "./Text";

const CustomModal = (props) => {
    return (
        <Modal isVisible={props.visible}>
            <View style={{ flex: 1,backgroundColor: Theme.primary,paddingHorizontal: 10,paddingVertical: 10,borderRadius: 10}}>
                <CustomText label={props.contentModal} type="bold" size={Theme.fontSize + 2} style={{textTransform: 'capitalize',textAlign: 'center'}}  />
                <View style={{paddingHorizontal: 40}}>
                    <CustomButton onPress={()=> {toggleModal(props.content)}} label="Close Notification" style={{marginTop: 20}} />
                </View>
            </View>
        </Modal>
    )
}
export default CustomModal;