import { Ionicons } from "@expo/vector-icons";
import React,{useState,useEffect} from "react";
import { Text,Pressable } from "react-native";
import { useSelector } from 'react-redux'; 
import Theme from "../constants/Theme";

export default function CustomButton(props){
    const theme = useSelector(state => state.themeManager);
    const [mode, setMode] = useState(theme.mode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    return (
        <Pressable 
            onPress={props.onPress}
            android_ripple={{borderless: false, radius: 100, color: mode == 'light' ? Theme.primary : Theme.secondary}}
            android_disableSound={false}
            style={{backgroundColor: mode == 'light' ? Theme.secondary : Theme.primary,borderRadius: Theme.radius,paddingVertical: 10,paddingHorizontal: 10,...props.style,flexDirection: 'row',justifyContent: 'center'}}
        >  
            
            {
                props.icon !== undefined ?
                <Ionicons name={props.icon} style={{marginRight: props.label !== undefined ? 3 : 0}} size={props.size + 4} color= {mode == 'light' ? Theme.primary : Theme.secondary} />
                :
                null
            }
            {
                props.label !== undefined ?
                <Text style={{
                    fontFamily: Theme.boldfont,
                    fontSize: props.size,
                    textAlign: "center",
                    color: mode == 'light' ? Theme.primary : Theme.secondary,
                    ...props.textStyle
                }}>
                    {props.label}
                </Text>:
                <></>
            }
            
        </Pressable>
    )
}