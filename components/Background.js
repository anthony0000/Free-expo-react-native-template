import React,{useState,useEffect} from "react";
import { View,Text,ImageBackground, KeyboardAvoidingView,ScrollView } from "react-native";
import { useSelector } from 'react-redux'; 
import Theme from '../constants/Theme';
import { StatusBar } from 'expo-status-bar';

export default function Background({ children,type }) {
    const theme = useSelector(state => state.themeManager);
    const [mode, setMode] = useState(theme.mode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    if(type === 'type1'){
        return (
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{ flex: 1,height: '100%',backgroundColor: mode === 'light' ? Theme.primary : Theme.darkSecondary}}>
                <View style={{flex: 1,height: '100%'}}>
                    <View style={{width: '100%',flex: 1,paddingVertical: Theme.padding + 15,paddingHorizontal: Theme.padding + 15}}>
                        <KeyboardAvoidingView style={{width: '100%',flex: 1}}>
                            {children}
                        </KeyboardAvoidingView>
                    </View>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        )
    }else{
        return (
            <View style={{ flex: 1,height: '100%'}}>
                <ImageBackground source={mode == 'light' ? Theme.bgLight : Theme.bgDark} style={{flex: 1,height: '100%'}}>
                    <ScrollView  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{width: '100%',flex: 1,paddingVertical: Theme.padding + 15,paddingHorizontal: Theme.padding + 15}}>
                        <KeyboardAvoidingView style={{width: '100%',flex: 1}}>
                            {children}
                        </KeyboardAvoidingView>
                    </ScrollView>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
        )
    }
}