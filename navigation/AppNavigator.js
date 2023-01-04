import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import DefaultScreen from '../screens/DefaultScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContentScreen from '../screens/DrawerContentScreen';
import Theme from '../constants/Theme.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Draw() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: Theme.primary,
                drawerActiveBackgroundColor: Theme.secondary,
                drawerItemStyle: {
                    borderRadius: Theme.radius,
                    paddingHorizontal: 5
                },
                drawerLabelStyle: {
                    fontFamily: Theme.medfont
                }
            }}
            drawerContent={props => <DrawerContentScreen {...props} />}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Default" component={DefaultScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export default AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Drawer"
                screenOptions={{
                    headerMode: 'screen',
                    headerShown: false,
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        transitionSpec: {
                            open: config,
                            close: config,
                        },
                    }}
                />
                <Stack.Screen
                    name="Drawer"
                    component={Draw}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        transitionSpec: {
                            open: config,
                            close: config,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}