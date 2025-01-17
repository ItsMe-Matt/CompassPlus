import styled from "styled-components/native";
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { Icon } from 'react-native-elements';
import { COLORS } from '../../constants/styles.js';
import { position } from "polished";

// Play with animations and make 
// it so it turns from grey to green but faded in over 0.5s
// after heart is clicked

const TransitCardCont = styled.View`
    width: 303px;
    height: 105px;
    margin-bottom: 25px;
`;

const Trapezoid = styled.View`
    flex-direction: row;
    width: 90px;
    height: 20px;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props=>props.bgcolor};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

const TransitCard = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 303px;
    height: 89px;
    background-color: ${props=>props.bgcolor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const RouteIconCont = styled.View`
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background-color: #fff;
    border-radius: 15px;
`;

const RouteH1 = styled.Text`
    color: ${props=>props.h1color};
    font-size: 24px;
    font-weight: bold;
`;

const RouteInfo = styled.View`
    justify-content: space-evenly;
    height: auto;
    width: 165px;
`;

const SaveRouteButton = styled.Pressable`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;

export default function SignUpTransitCard({
    typeOfRideText = "Bus",
    icon = "bus",
    icon_type = "font-awesome",
    routeIconText = "019",
    stopNameText = "Metrotown Stn",
    locationText = "Eastbound W Pender @ Nicola St"
}) {

    const [fillHeart, setFillHeart] = useState(false);
    const ToggleFillHeart = () => setFillHeart(previousState => !previousState);
    const [greenCard, setGreenCard] = useState(false);
    const ToggleGreenCard = () => setGreenCard (previousState => !previousState)
    
    const PressHeart = () => {
        ToggleFillHeart();
        ToggleGreenCard();
    }
    
    return <SafeAreaView>
        <TransitCardCont>
            <Trapezoid bgcolor={greenCard ? COLORS.LIMEGREEN : COLORS.DAVYSGREY}>
                <Icon name={icon} type={icon_type} size={10} color="#fff" />
                <Text style={styles.type_of_ride}>{typeOfRideText}</Text>
            </Trapezoid>
            <TransitCard bgcolor={greenCard ? COLORS.LIMEGREEN : COLORS.DAVYSGREY}>
                <RouteIconCont>
                    <RouteH1 h1color={greenCard ? COLORS.LIMEGREEN : COLORS.DAVYSGREY}>{routeIconText}</RouteH1>
                </RouteIconCont>
                <RouteInfo>
                    <Text style={styles.text_bold}>{stopNameText}</Text>
                    <Text style={styles.text_regular}>{locationText}</Text>
                </RouteInfo>
                <SaveRouteButton onPress={PressHeart}>
                    <Icon name={fillHeart ? "heart" : "heart-o"} type="font-awesome" size={40} color="#fff" />
                </SaveRouteButton>
            </TransitCard>
        </TransitCardCont>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    text_bold: {
        color: '#fff',
        fontWeight: 'bold'
    },
    type_of_ride: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 5
    },
    text_regular: {
        color: '#fff'
    }
});
