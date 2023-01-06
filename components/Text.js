import React,{useState,useEffect} from "react";
import {Text} from 'react-native';
import Theme from "../constants/Theme";
import { useSelector } from 'react-redux'; 


const CustomText = (props) => {
    const theme = useSelector(state => state.themeManager);
    const [mode, setMode] = useState(theme.mode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    return (
        <Text onPress={props.onPress} style={{fontSize: props.size,fontFamily: props.type == 'bold' ? Theme.boldfont : props.type == 'light' ? Theme.lightfont : props.type == 'medium' ? Theme.medfont: props.type == 'extrabold' ? Theme.extraboldfont : Theme.regfont,
            color: theme.mode == 'light' ? Theme.secondary : Theme.primary,...props.style}}>
            {props.label}
            <Text style={{color: theme.mode == 'light' ? Theme.tertiary : Theme.lightSecondary}}>{props.alighted}</Text>
        </Text>
    )
}

export default CustomText;