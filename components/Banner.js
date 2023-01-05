import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../constants/Theme';
import { useSelector } from 'react-redux'; 

const Banner = (props) => {
    
    function elevationShadowStyle(elevation) {
        return {
            elevation,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 0.5 * elevation },
            shadowOpacity: 0.3,
            shadowRadius: 0.8 * elevation
        };
    }
    
    const theme = useSelector(state => state.themeManager);
    const [mode, setMode] = useState(theme.mode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    const styles = StyleSheet.create({
        shadow1: elevationShadowStyle(5),
        shadow2: elevationShadowStyle(10),
        shadow3: elevationShadowStyle(20),
        bannerParent: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 15,
            zIndex: 10,
            marginBottom: 10
        },
        bannerCenter: {
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 15,
            position: 'absolute',
            minHeight: 50,
            zIndex: 10
        },
        bannerTitle: {
            borderRadius: Theme.radius + 20,
            height: 40,
            textAlign: 'center',
            paddingVertical: 5,
            paddingHorizontal: 25,
            paddingTop: 8,
            fontFamily: Theme.boldfont,
            fontSize: Theme.fontSize-2,
            color: mode === 'light' ? Theme.darkSecondary : Theme.primary,
            backgroundColor: mode === 'light' ? Theme.primary : null,
            textTransform: 'capitalize',
            marginTop: 5
        },
        iconOne: {
            backgroundColor: mode === 'light' ? Theme.primary : 'transparent',
            paddingHorizontal: 15,
            borderRadius: Theme.radius + 50,
            color: mode === 'light' ? Theme.secondary : Theme.primary,
            paddingTop: 13,
            height: 50,
            fontSize: mode === 'light' ? Theme.fontSize + 3 : Theme.fontSize + 10
        }
    })
    function createShortForm(words,strlength) {
        var string = words;
        var length = strlength;
        var trimmedString = string.substring(0, length);
        var crtLength = string.length;
        if(crtLength > strlength){
            return trimmedString + ' ...'
        }else{
            return trimmedString;
        }
    }

    if(props.type == 'type1'){
        return (
            <View style={{...styles.bannerCenter,...props.style}}>
                <Text style={styles.bannerTitle}>{createShortForm(props.name, 25)}</Text>
            </View>
        );
    }else if(props.type == 'type2'){
        return (
            <View style={{...styles.bannerParent,...props.style}}>
                <Ionicons onPress={props.onPressOne} style={{...styles.iconOne,...styles.shadow2}} name={props.iconOne} size={props.size} />
                <Text style={{...styles.bannerTitle,...styles.shadow1}}>{createShortForm(props.name, 25)}</Text>
            </View>
        );
    }else if(props.type == 'type3'){
        return (
            <View style={{...styles.bannerParent,...props.style}}>
                <Ionicons onPress={props.onPressOne} style={{...styles.iconOne,...styles.shadow2}} name={props.iconOne} size={props.size} />
                <Text style={{...styles.bannerTitle,...styles.shadow1}}>{createShortForm(props.name, 25)}</Text>
                <Ionicons onPress={props.onPressTwo} style={{...styles.iconOne,...styles.shadow2}} name={props.iconTwo} size={props.size} />
            </View>
        );
    }else if(props.type == 'type4'){
        return (
            <View style={{...styles.bannerParent,...props.style}}>
                <Ionicons onPress={props.onPressOne} style={{...styles.iconOne,...styles.shadow2}} name={props.iconOne} size={props.size} />
                <Ionicons onPress={props.onPressTwo} style={{...styles.iconOne,...styles.shadow2}} name={props.iconTwo} size={props.size} />
            </View>
        );
    }
}

export default Banner;