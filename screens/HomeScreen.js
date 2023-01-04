import React from "react";
import {View,Dimensions,Image,Text,ScrollView, FlatList} from 'react-native';
import Banner from "../components/Banner";
import Background from '../components/Background';
import CustomButton from '../components/Button';
import CustomText from '../components/Text';
import CustomInput from '../components/Input';
import Carousel from 'react-native-reanimated-carousel';
import Theme from "../constants/Theme";
import IconCard from "../components/IconCard";
import { ProgressBar } from 'react-native-paper';

export default function HomeScreen(props){
    const width = Dimensions.get('window').width;
    const imagesArr = [
        'https://www.tailorsmind.com/assets/img/landing/profile.jpg',
        'https://www.tailorsmind.com/assets/img/landing/store_land.jpg'
    ];
    const renderCarousel = ({item}) => {
        return (
            <View style={{flex: 1}}>
                <CustomText size={Theme.fontSize} alighted=" Dashboard" label="My" type="bold" style={{marginTop: 5,marginBottom: 10,marginLeft: 10}} />
                <Image
                    source={{uri: item}}
                    style={{
                        flex: 1,
                        borderWidth: 0.3,
                        borderColor: Theme.secondary,
                        justifyContent: 'center',
                        borderRadius: Theme.radius + 10,
                        marginLeft: 10
                    }}
                />
            </View>
        )
    }
    const Inspirations = ['Casual','Ethnic','African','Men Suit','Men Suit','Men Suit','Men Suit'];
    const renderInspiration = ({item}) =>{
        return (
            <CustomButton size={12} label={item} style={{marginRight: 15}}/>
        )
    }
    return (
        <>
            <Background type="type1">
                <Banner type="type4" onPressOne={() => {props.navigation.toggleDrawer()}} iconOne="menu-outline" iconTwo="search-outline" />
                <View>
                    <CustomText size={Theme.fontSize} label="Profile Completion" type="bold" style={{marginTop: 25,marginBottom: 10}} />
                    <ProgressBar progress={0.3} color={Theme.lightSecondary} style={{marginBottom: 20}} />
                </View>
                <Carousel
                    panGestureHandlerProps={{
                        activeOffsetX: [0, 10],
                    }}
                    style={{marginTop: 10}}
                    loop
                    width={width - 60}
                    height={width / 1.5}
                    autoPlay={true}
                    data={imagesArr}
                    scrollAnimationDuration={2000}
                    renderItem={renderCarousel}
                />
                
                <CustomText size={Theme.fontSize} label="Top Categories" type="bold" style={{marginTop: 25}} />
                <ScrollView horizontal style={{height: 200,marginTop: 20,paddingHorizontal: 5,paddingVertical: 5}} showsHorizontalScrollIndicator={false}>
                    <IconCard cardlabel="Wallet" amount={'$'+59} style={{marginleft: -10}} icon="wallet-outline" size={Theme.fontSize + 40} />
                    <IconCard cardlabel="Debt Amount" amount={'\u20A6'+'121,000'} style={{marginleft: -10}} icon="card-outline" size={Theme.fontSize + 40} />
                    <IconCard cardlabel="Clients" amount={22} style={{marginleft: -10}} icon="person-outline" size={Theme.fontSize + 40} />
                    <IconCard cardlabel="Likes" amount={'50k'} style={{marginleft: -10}} icon="heart-outline" size={Theme.fontSize + 40} />
                </ScrollView>
                <CustomText size={Theme.fontSize} label="Inspiration Categories" type="bold" style={{marginTop: 25}} />
                <FlatList style={{marginTop: 20,paddingHorizontal: 5,paddingVertical: 5,flex: 1}} showsHorizontalScrollIndicator={false} horizontal data={Inspirations} renderItem={renderInspiration} />
                <CustomText size={Theme.fontSize} label="Top Clients" type="bold" style={{marginTop: 25}} />
            </Background>
        </>
    )
}