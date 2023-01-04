import React,{View,Text} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import DefaultScreen from '../screens/DefaultScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContentScreen from '../screens/DrawerContentScreen';
import NotificationScreen from '../screens/NotificationScreen.js';
import ClientListScreen from '../screens/ClientListScreen.js';
import Theme from '../constants/Theme.js';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications' : 'notifications-outline';
            }else if (route.name === 'Clients') {
                iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle:{
            borderTopLeftRadius: Theme.radius + 15,
            borderTopRightRadius: Theme.radius + 15,
            backgroundColor: Theme.secondary,
            height: 50
        },
        tabBarLabelStyle:{
            textTransform: 'uppercase',
            fontFamily: Theme.boldfont,
            fontSize: Theme.fontSize - 8
        },
        tabBarItemStyle:{
            margin:5,
            color: Theme.primary,
            fontSize: Theme.fontSize - 5
        },
        tabBarActiveTintColor: Theme.primary,
        tabBarInactiveTintColor: Theme.grey,
        headerShown: false,
    })}
    >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="Notifications" component={NotificationScreen} options={{ tabBarBadge: 3,tabBarBadgeStyle:{
            fontSize: Theme.fontSize - 5,
            fontFamily: Theme.boldfont
        } }} />
        <Tab.Screen name="Clients" component={ClientListScreen}/>
    </Tab.Navigator>
  );
}

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
            <Drawer.Screen name="Tabs" component={MyTabs} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Default" component={DefaultScreen} />
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
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Drawer"
                    component={Draw}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}