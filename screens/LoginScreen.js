import React,{useEffect, useState} from 'react';
import { View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; 
import { switchMode } from '../store/actions/theme';
import Background from '../components/Background';
import CustomButton from '../components/Button';
import CustomText from '../components/Text';
import styles from '../components/Styles';

export default function LoginScreen() {
    const theme = useSelector(state => state.themeManager);
    const dispatch = useDispatch();
    const [mode, setMode] = useState(theme.mode);

    const handleThemeChange = () => {
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    return (
        <Background>
            <Button title="Switch Mode" onPress={handleThemeChange} />
            <CustomButton size={18} label="Login"/>
            <CustomText label="Beans don pour" type="bold" />
        </Background>
    )
}
