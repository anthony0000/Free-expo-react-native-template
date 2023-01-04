import React, { useCallback,useEffect,useState } from 'react';
import AppStack from './navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View,Text } from 'react-native';

SplashScreen.preventAutoHideAsync();
// redux store
import { legacy_createStore as createStore} from 'redux'
import { combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { PersistGate } from 'redux-persist/lib/integration/react';
// reducer importation
import themeReducer from './store/reducers/theme';

// reducers files
const rootReducer = combineReducers({
    themeManager: themeReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

const persistor = persistStore(store);

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    'quick-light': require('./fonts/Quicksand-Light.ttf'),
                    'quick-med': require('./fonts/Quicksand-Medium.ttf'),
                    'quick-reg': require('./fonts/Quicksand-Regular.ttf'),
                    'quick-bold': require('./fonts/Quicksand-SemiBold.ttf'),
                    'extra-quick-bold': require('./fonts/Quicksand-Bold.ttf')
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    
    if (!appIsReady) {
        return null;
    }
    return (
        <View style={{ flex: 1}} onLayout={onLayoutRootView}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                        <AppStack/>
                </PersistGate>
            </Provider>
        </View>
    );
}