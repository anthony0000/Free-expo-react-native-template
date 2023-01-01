import React,{useState,useEffect} from "react";
import { View,Text,ImageBackground } from "react-native";
import { useSelector } from 'react-redux'; 
import Theme from '../constants/Theme';
import { StatusBar } from 'expo-status-bar';

export default function Background({ children }) {
    const theme = useSelector(state => state.themeManager);
    const [mode, setMode] = useState(theme.mode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    return (
        <View style={{ flex: 1,height: '100%'}}>
            <ImageBackground source={mode == 'light' ? Theme.bgLight : Theme.bgDark} style={{flex: 1,height: '100%'}}>
                <View style={{width: '100%',flex: 1,paddingVertical: Theme.padding + 15,paddingHorizontal: Theme.padding + 15}}>
                    {children}
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    )
}