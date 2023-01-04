import React,{useState} from 'react';
import { View, Image } from 'react-native';
import Background from '../components/Background';
import CustomButton from '../components/Button';
import CustomText from '../components/Text';
import CustomInput from '../components/Input';

export default function LoginScreen() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <>
            <Background type="type2">
                <View style={{flex: 1, justifyContent: 'space-evenly',height: '100%',width: '100%'}}>
                    <View style={{width: '100%',height: '30%',flex: 1}}>
                        <View style={{flexDirection: 'row',justifyContent: 'center',width: '100%'}}>
                            <Image source={require('../assets/logo.png')} style={{height: 50,width: 50,marginTop: 50}} />
                        </View>
                        <CustomText size={10} label="Fashion Beyond Technology" type="light" style={{textAlign: 'center',marginTop: 5}} />
                        <CustomText size={20} label="Login your account" type="bold" style={{textAlign: 'center',marginTop: 20}} />
                    </View>
                    <View style={{width: '100%',height: '30%',flex: 1}}>
                        <CustomInput placeholder="Email" icon="lock-open-outline" onChangeText={text => setEmail(text)} />
                        <CustomInput placeholder="Password" icon="mail-outline" onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={{width: '100%',height: '40%',flex: 1}}>
                        <CustomButton size={18} label="Proceed" style={{marginTop: 150}}/>
                    </View>
                </View>
            </Background>
        </>
    )
}
