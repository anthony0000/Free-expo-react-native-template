import React from "react";
import {ScrollView,View,Platform, SafeAreaView} from 'react-native';
import Constants from "expo-constants";

const CustomScroll = ({children,style}) => {
    return (
        <View style={{flex: 1,paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,...style}}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}
export default CustomScroll;