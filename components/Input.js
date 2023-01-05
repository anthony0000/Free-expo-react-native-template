import React,{useState,useEffect} from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme';
import { useSelector } from 'react-redux'; 

const CustomInput = (props) => {
    const [focus, setFocus] =  useState(props.focus);
    const theme = useSelector(state => state.themeManager);
    const [mode, setMode] = useState(theme.mode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    const styles = StyleSheet.create({
        // custom input styles
        textInput: {
            fontSize: Theme.fontlarge,
            fontFamily: Theme.regfont,
            borderWidth: 0.3,
            borderColor: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            borderTopRightRadius: Theme.radius,
            borderBottomRightRadius: Theme.radius,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            color: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            borderLeftWidth: 0,
            marginTop: 10,
            width: '88%',
            height: 50
        },
        textInputFocus: {
            fontSize: Theme.fontSize,
            fontFamily: Theme.regfont,
            borderWidth: 0.8,
            borderColor: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            borderTopRightRadius: Theme.radius,
            borderBottomRightRadius: Theme.radius,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            color: theme.mode == 'light' ? Theme.primary : Theme.secondary,
            borderLeftWidth: 0,
            marginTop: 10,
            width: '88%',
            height: 50
        },
        inputIcon: {
            color: theme.mode == 'light' ? Theme.primary : Theme.secondary,
            backgroundColor: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            width: '12%',
            paddingTop: 18,
            textAlign: 'center',
            height: 50,
            marginTop: 10,
            borderWidth: 0.3,
            borderColor: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            borderTopLeftRadius: Theme.radius,
            borderBottomLeftRadius: Theme.radius,
            borderRightWidth: 0,
            paddingLeft: 10,
            fontSize: Theme.fontSize
        },
        inputIconFocus: {
            color: theme.mode == 'light' ? Theme.primary : Theme.secondary,
            backgroundColor: theme.mode == 'light' ? Theme.secondary : Theme.primary,
            width: '12%',
            paddingTop: 16,
            textAlign: 'center',
            height: 50,
            marginTop: 10,
            borderWidth: 0.8,
            borderColor: Theme.secondary,
            borderTopLeftRadius: Theme.radius,
            borderBottomLeftRadius: Theme.radius,
            borderRightWidth: 0,
            paddingLeft: 10,
            fontSize: Theme.fontSize + 3
        }
    })
    return (
        focus == true ?
        <View style={{flexDirection: 'row',elevation: 5,width: '100%',...props.style}}>
            <Ionicons name={props.icon} style={styles.inputIconFocus} size={Theme.fontextralarge} />
            <TextInput secureTextEntry={props.secureTextEntry} setFocus={focus} onChangeText={text => props.onChangeText(text)} 
            onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} style={{...styles.textInputFocus,...props.styles}} 
            placeholder={props.placeholder} keyboardType={props.keyboardType}
            placeholderTextColor={theme.mode === 'light' ? Theme.primary : Theme.secondary} 
            />
        </View>:
        <View style={{flexDirection: 'row',elevation: 5,width: '100%',...props.style}}>
            <Ionicons name={props.icon} style={styles.inputIcon} size={Theme.fontextralarge} />
            <TextInput secureTextEntry={props.secureTextEntry} setFocus={focus} onChangeText={text => props.onChangeText(text)} 
            onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} style={{...styles.textInput,...props.styles}}
            placeholder={props.placeholder} keyboardType={props.keyboardType}
            placeholderTextColor={theme.mode === 'light' ? Theme.primary : Theme.secondary} />
        </View>
    )
}

export default CustomInput