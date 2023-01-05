import React from "react";
import {View,Text,Pressable,Image} from "react-native";
import CustomText from "./Text";
import Theme from "../constants/Theme";
import { useSelector } from 'react-redux'; 

const ImageCard = ({children,source,label,onPress}) => {
    const theme = useSelector(state => state.themeManager);
    const colorRandom = ['#ffefef','#f2e7ff','#e7f0ff','#e7fff2','#fcffe7'];
    const randomColor = Math.floor(Math.random() * colorRandom.length);
    return (
        <View style={{minHeight: 200,width:'50%',paddingHorizontal: 3,paddingVertical: 3}}>
            <Pressable
            onPress={onPress}
            android_ripple={{borderless: false, radius: 100, color: Theme.lightSecondary}}
            android_disableSound={false}
            style={{width: '100%',flex: 1,backgroundColor: theme.mode === 'light' ? colorRandom[randomColor] : Theme.grey,borderRadius: Theme.radius,borderColor: Theme.darkSecondary,borderWidth: 0.3}}>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <Image style={{height: 80,width: 80,marginTop: 20,borderRadius: Theme.radius + 50}} source={source} />
                    <Text style={{marginTop: 5,textAlign: 'center',fontSize: Theme.fontSize - 3}}>
                        {label}
                    </Text>
                    {children}
                </View>
            </Pressable>
        </View>
    )
}
export default ImageCard;