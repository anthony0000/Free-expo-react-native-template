import React,{useState,useEffect} from "react";
import {View,StyleSheet} from 'react-native';
import Theme from "../constants/Theme";
import CustomText from "./Text";
import { useSelector } from 'react-redux'; 
import { Ionicons } from '@expo/vector-icons';

const IconCard = ({children,style,icon,size,amount,cardlabel}) => {
    
    const theme = useSelector(state => state.themeManager);
    const [mode, setMode] = useState(theme.mode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    function elevationShadowStyle(elevation) {
        return {
            elevation,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 0.5 * elevation },
            shadowOpacity: 0.3,
            shadowRadius: 0.8 * elevation
        };
    }
    const styles = StyleSheet.create({
        shadow1: elevationShadowStyle(5),
        shadow2: elevationShadowStyle(10),
        shadow3: elevationShadowStyle(20),
    })

    return (
        <View style={{...styles.shadow2,width: 180,backgroundColor: mode === 'light' ? Theme.primary : Theme.secondary,borderRadius: Theme.radius + 10,marginLeft: 10,marginRight: 10,...style,
        marginTop: 10,marginBottom: 10}}>
            <View style={{justifyContent: 'center',flexDirection: 'row',alignItems: 'center',height: '70%'}}>
                <Ionicons name={icon} color={mode === 'light' ? Theme.secondary : Theme.primary} size={size} />
            </View>
            <CustomText label={amount} size={Theme.fontSize + 5} type="bold" style={{textAlign: 'center',marginRight: 10,marginTop: -20}} />
            <CustomText label={cardlabel} size={Theme.fontSize -2} type="medium" style={{textAlign: 'center',marginRight: 10,marginTop: 0}} />
            {children}
        </View>
    )
}

export default IconCard;