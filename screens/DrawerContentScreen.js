import React,{useState,useEffect} from 'react';
import { View,StyleSheet,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; 
import { switchMode } from '../store/actions/theme';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Theme from '../constants/Theme';
import { Ionicons } from '@expo/vector-icons';

const DrawerContentScreen = (props) => {
    
    const theme = useSelector(state => state.themeManager);
    const dispatch = useDispatch();
    const [mode, setMode] = useState(theme.mode);
    const [isSwitchOn, setIsSwitchOn] = useState(theme.mode === 'light' ? false : true);

    const [colorConstant,setColorConstant] = useState(theme.mode === 'light' ? Theme.secondary : Theme.primary)

    useEffect(() => {
        setMode(theme.mode);
        setColorConstant(theme.mode === 'light' ? Theme.secondary : Theme.primary)
    }, [theme]);
    
    const handleThemeChange = () => {
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
        setIsSwitchOn(theme.mode === 'light' ? true : false);
    }

    const styles  =  StyleSheet.create({
        drawerContent: {
            flex: 0.5
        },
        userInfoSection: {
            paddingLeft: 20
        },
        title: {
            fontSize: Theme.fontSize,
            marginTop: 3,
            fontFamily: Theme.boldfont,
            color: theme.mode === 'light' ? Theme.secondary : Theme.primary
        },
        caption: {
            fontSize: Theme.fontSize-4,
            lineHeight: 14,
            fontFamily: Theme.boldfont,
            color: theme.mode === 'light' ? Theme.secondary : Theme.primary
        },
        row: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center'
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15
        },
        paragraph: {
            fontWeight: "bold",
            marginRight: 3
        },
        drawerSection: {
            marginTop: 15,
        },
        bottomDrawerSection: {
            marginBottom: 15
        },
        preference: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 16
        },
        labelStyle: {
            fontSize: Theme.fontSize-1,
            fontFamily: Theme.regfont,
            marginLeft: -15,
            marginBottom: 0,
            color: theme.mode === 'light' ? Theme.secondary : Theme.primary
        }
    })

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView style={{backgroundColor: theme.mode === 'light' ? Theme.primary : Theme.secondary}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 15
                        }}> 
                            <Avatar.Text 
                                label="CP"
                                style={{marginTop: 10,backgroundColor: theme.mode === 'light' ? Theme.secondary : Theme.primary}}
                                labelStyle={{fontFamily: Theme.boldfont,fontSize: Theme.fontSize+5}}
                                color={theme.mode === 'light' ? Theme.primary : Theme.secondary}
                            />
                            
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: 15,
                                marginTop: 15
                            }}>
                                <Title style={styles.title}>Caleb Phillips</Title>
                                <Caption style={styles.caption}>Tailors Account</Caption>
                            </View>
                        </View>
                        
                    </View>
                </View>
                
                <Drawer.Section style={styles.drawerSection}>
                
                    <DrawerItem
                        icon={({size}) => (
                            <Ionicons 
                                color={colorConstant}
                                size={size}
                                name="home-outline"
                            />
                        )}
                        style={{marginTop: -5,}}
                        labelStyle={styles.labelStyle}
                        label="My Dashboard"
                        onPress={()=> {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Ionicons 
                                color={colorConstant}
                                size={size}
                                name="person-outline"
                            />
                        )}
                        style={{marginTop: -5,}}
                        labelStyle={styles.labelStyle}
                        label="My Account"
                        onPress={()=> {props.navigation.navigate('Login')}}
                    />
                    <DrawerItem
                        icon={({size}) => (
                            <Ionicons 
                                color={colorConstant}
                                size={size}
                                name="settings-outline"
                            />
                        )}
                        style={{marginTop: -5,}}
                        labelStyle={styles.labelStyle}
                        label="My Settings"
                        onPress={()=> {props.navigation.navigate('Settings')}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Switch value={isSwitchOn} color={Theme.secondary} onValueChange={handleThemeChange} />
        </View>
    )
}

export default DrawerContentScreen;