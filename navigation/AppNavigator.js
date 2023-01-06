import React,{View,Text} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import DefaultScreen from '../screens/DefaultScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContentScreen from '../screens/DrawerContentScreen';
import NotificationScreen from '../screens/NotificationScreen.js';
import ClientListScreen from '../screens/ClientListScreen.js';
import SearchClientScreen from '../screens/SearchClientScreen.js';
import Theme from '../constants/Theme.js';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'; 
import AddClientScreen from '../screens/AddClientScreen.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    
    const theme = useSelector(state => state.themeManager);
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
                return <Ionicons name={iconName} size={Theme.fontSize + 3} color={color} />;
            },
            tabBarStyle:{
                borderTopLeftRadius: Theme.radius + 25,
                borderTopRightRadius: Theme.radius + 25,
                borderBottomLeftRadius: Theme.radius + 25,
                borderBottomRightRadius: Theme.radius + 25,
                backgroundColor: theme.mode === 'light' ? Theme.secondary : Theme.grey,
                height: 65,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                paddingBottom: 10,
                paddingTop: 10
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
            tabBarActiveTintColor: theme.mode === 'light' ? Theme.primary : Theme.secondary,
            tabBarInactiveTintColor: theme.mode === 'light' ? Theme.primary : Theme.secondary,
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
            <Stack.Screen
                name="SearchClient"
                component={SearchClientScreen}
                options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
            />
            <Stack.Screen
                name="AddClient"
                component={AddClientScreen}
                options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
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
        </Drawer.Navigator>
    );
}

export default AppStack = () => {
    
    const theme = useSelector(state => state.themeManager);
    const MyTheme = {
        dark: false,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: theme.mode === 'light' ? Theme.primary : Theme.darkSecondary,
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgba(199, 199, 204,0.1)',
            notification: 'rgb(255, 69, 58)',
        },
    };
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                initialRouteName="Drawer"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Drawer"
                    component={Draw}
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