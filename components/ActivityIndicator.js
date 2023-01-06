import React from "react";
import {ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux'; 
import Theme from "../constants/Theme";

const Loading = (props) => {
    const theme = useSelector(state => state.themeManager);
    return (
        <ActivityIndicator style={props.style} size={props.size} color={theme.mode === 'light' ? Theme.secondary : Theme.primary} />
    )
}
export default Loading;