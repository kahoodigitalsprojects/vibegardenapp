import React, { useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Header, Pinkbtn, StoryData } from '../../../componrnts';

import Images from '../../../constants';

const Story1 = ({ navigation, route }) => {
    const [state, setState] = useState();

    const handleClick = () => {};
    return ( <
        SafeAreaView style = {
            { flex: 1, backgroundColor: '#ffffff' } } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = {
            { flexGrow: 1 } } >
        <
        StatusBar animated = { true }
        backgroundColor = "#000" / >
        <
        Swiper height = { '100%' }
        paginationStyle = {
            { top: 180 } }
        horizontal = { true }
        autoplay = { false }
        bounces = { false }
        buttonWrapperStyle = {
            {} }
        showsButtons = { true }
        pagingEnabled = { false }
        style = {
            [styles.wrapper] }
        activeDotColor = { '#CD258D' }
        dotStyle = {
            {
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: '#eee',
            }
        }
        activeDotStyle = {
            {
                width: 15,
                height: 15,
                borderRadius: 15,
            }
        } >
        <
        SafeAreaView style = { styles.slide2 } >
        <
        ImageBackground source = { Images.BackGround.Bg1 }
        resizeMode = "cover"
        style = { styles.mainbg } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = {
            { flexGrow: 1 } } >
        <
        View style = {
            {
                marginTop: 50,
                // marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }
        } >
        <
        Image source = { Images.Logos.logo1 }
        style = {
            {} }
        />{' '} <
        /View>{' '} <
        View style = {
            {
                justifyContent: 'center',
                alignItems: 'center',
                // marginVertical: 40,
            }
        } >
        <
        Text style = { styles.headtext } >
        <
        Text style = {
            { fontWeight: 'bold' } } > VIBE < /Text>GARDEN{' '} <
        /Text>{' '} <
        Text style = {
            {
                color: '#fff',
                fontSize: 16,
                textAlign: 'center',
            }
        } >
        You 're In full bloom{'
        '} <
        /Text>{' '} <
        Text style = {
            {
                color: '#fff',
                fontSize: 20,
                textAlign: 'center',
                marginVertical: 5,
            }
        } >
        Tools, tips & magic
        for growing your communication to you!
        <
        /Text>{' '} <
        /View>{' '} <
        View style = {
            {
                width: '80%',
                marginTop: 130,
                alignSelf: 'center',
            }
        } >
        <
        View style = {
            {} } >
        <
        Pinkbtn width = { '80%' }
        btntxt = " Get Started"
        onPress = {
            () =>
            navigation.navigate('Auth', {
                screen: 'login',
            })
        }
        />{' '} <
        /View>{' '} <
        TouchableOpacity onPress = {
            () => navigation.navigate('namescreen') }
        style = { styles.btn2 } >
        <
        Text style = {
            { fontWeight: 'bold', color: '#fff' } } >
        Login In { ' ' } <
        /Text>{' '} <
        /TouchableOpacity>{' '} <
        /View>{' '} <
        /ScrollView>{' '} <
        /ImageBackground>{' '} <
        /SafeAreaView> <
        SafeAreaView style = { styles.slide2 } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = {
            { flexGrow: 1 } } >
        <
        View style = {
            {
                width: '90%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }
        } >
        <
        View style = {
            [styles.img] } >
        <
        Image source = { Images.BackGround.storybg1 }
        resizeMode = "contain"
        style = {
            { width: '100%', height: '80%' } }
        />{' '} <
        /View>{' '} <
        Text style = {
            [styles.txt, { textAlign: 'center', lineHeight: 26 }] } >
        AND.Embodying our fullness down here can be tricky!So with VibeBloom, we quest together.Kindling one another, as we employ joyful, powerful tools
        for coming home to ourselves and being all that we truly, uniquely are. { ' ' } <
        /Text>{' '} <
        /View>{' '} <
        View style = {
            {
                backgroundColor: '#ffff',
                marginVertical: 20,
                position: 'absolute',
                alignSelf: 'center',
                bottom: -20,
            }
        } >
        <
        Text style = {
            { alignSelf: 'center' } } >
        Swipe To See How It Works { ' ' } <
        /Text>{' '} <
        /View>{' '} <
        /ScrollView>{' '} <
        /SafeAreaView>{' '} <
        SafeAreaView style = { styles.slide2 } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = {
            { flexGrow: 1 } } >
        <
        View style = {
            {
                width: '90%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }
        } >
        <
        View style = {
            [styles.img] } >
        <
        Image source = { Images.BackGround.storybg2 }
        resizeMode = "contain"
        style = {
            { width: '100%', height: '80%' } }
        />{' '} <
        /View>{' '} <
        Text style = {
            [styles.txt, { textAlign: 'center', lineHeight: 26 }] } >
        AND.Embodying our fullness down here can be tricky!So with VibeBloom, we quest together.Kindling one another, as we employ joyful, powerful tools
        for coming home to ourselves and being all that we truly, uniquely are. { ' ' } <
        /Text>{' '} <
        /View> <
        View style = {
            {
                backgroundColor: '#ffff',
                marginVertical: 20,
                position: 'absolute',
                alignSelf: 'center',
                bottom: -20,
            }
        } >
        <
        Text style = {
            { alignSelf: 'center' } } >
        Swipe To See How It Works { ' ' } <
        /Text>{' '} <
        /View>{' '} <
        /ScrollView>{' '} <
        /SafeAreaView>{' '} <
        SafeAreaView style = { styles.slide2 } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = {
            { flexGrow: 1 } } >
        <
        View style = {
            {
                width: '90%',
                alignSelf: 'center',
                // alignItems: 'center',
                // justifyContent: 'center',
            }
        } >
        <
        View style = {
            [styles.img] } >
        <
        Image source = { Images.BackGround.storybg3 }
        resizeMode = "contain"
        style = {
            { width: '100%', height: '80%' } }
        />{' '} <
        /View>{' '} <
        Text style = {
            [styles.txt, { textAlign: 'center', lineHeight: 26 }] } >
        AND.Embodying our fullness down here can be tricky!So with VibeBloom, we quest together.Kindling one another, as we employ joyful, powerful tools
        for coming home to ourselves and being all that we truly, uniquely are. { ' ' } <
        /Text>{' '} <
        /View>{' '} <
        /ScrollView>{' '} <
        /SafeAreaView> <
        SafeAreaView style = { styles.slide2 } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = {
            { flexGrow: 1 } } >
        <
        View style = {
            {
                width: '90%',
                alignSelf: 'center',
                // alignItems: 'center',
                // justifyContent: 'center',
            }
        } >
        <
        View style = {
            [styles.img, { width: 260, height: 440 }] } >
        <
        Image source = { Images.BackGround.story4 }
        resizeMode = "contain"
        style = {
            { width: '100%', height: '100%' } }
        />{' '} <
        /View>{' '} <
        Text style = {
            [styles.txt, { textAlign: 'center', lineHeight: 26 }] } >
        AND.Embodying our fullness down here can be tricky!So with VibeBloom, we quest together.Kindling one another, as we employ joyful, powerful tools
        for coming home to ourselves and being all that we truly, uniquely are. { ' ' } <
        /Text>{' '} <
        /View> <
        View style = {
            {
                backgroundColor: '#ffff',
                marginVertical: 10,
                position: 'absolute',
                alignSelf: 'center',
                bottom: -15,
            }
        } >
        <
        Text style = {
            { alignSelf: 'center', textAlign: 'center' } } >
        Swipe To See How It Works { ' ' } <
        /Text>{' '} <
        /View>{' '} <
        /ScrollView>{' '} <
        /SafeAreaView>{' '} <
        SafeAreaView style = { styles.slide2 } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = {
            { flexGrow: 1 } } >
        <
        View style = {
            {
                width: '90%',
                alignSelf: 'center',

                // alignItems: 'center',
                // justifyContent: 'center',
            }
        } >
        <
        View style = {
            [styles.img, { width: 260, height: 440 }] } >
        <
        Image source = { Images.BackGround.story5 }
        resizeMode = "contain"
        style = {
            { width: '100%', height: '100%' } }
        />{' '} <
        /View>{' '} <
        Text style = {
            [styles.txt, { textAlign: 'center', lineHeight: 26 }] } >
        AND.Embodying our fullness down here can be tricky!So with VibeBloom, we quest together.Kindling one another, as we employ joyful, powerful tools
        for coming home to ourselves and being all that we truly, uniquely are. { ' ' } <
        /Text>{' '} <
        /View> <
        View style = {
            {
                backgroundColor: '#ffff',
                marginVertical: 20,
                position: 'absolute',
                alignSelf: 'center',
                bottom: -20,
            }
        } >
        <
        Text style = {
            { alignSelf: 'center' } } >
        Swipe To See How It Works { ' ' } <
        /Text>{' '} <
        /View>{' '} <
        /ScrollView>{' '} <
        /SafeAreaView>{' '} <
        /Swiper>{' '} <
        /ScrollView>{' '} <
        /SafeAreaView>
    );
};

const styles = StyleSheet.create({
    slide2: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    text: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    img: { alignSelf: 'center', width: 350, height: 430, marginVertical: 10 },
    txt: {
        textAlign: 'center',
        fontSize: 14,
        color: '#1C5C2E',
        letterSpacing: 0.5,
    },
    main: {
        // flex: 1,
    },
    mainbg: {
        flex: 1,
        width: '100%',
        height: '100%',
        // position: 'absolute',
    },
    headtext: {
        fontWeight: '300',
        fontSize: 32,
        color: '#fff',
        marginVertical: 15,
    },
    btn1: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 44,
        borderRadius: 20,
        backgroundColor: '#FF4053',
    },
    btn2: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 55,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 10,
    },
});

export default Story1;