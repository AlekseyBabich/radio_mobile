import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from '../../../assets/constant/color/index'


export const HeaderLogo = () => {
    return (
        <TouchableOpacity>
            <SafeAreaView style={ styles.header_container }>
                <Text style={ styles.text_logo }>My</Text>
                <FontAwesome5 name='microphone-alt' size={ 35 } color={COLORS.headerLogo}/>
                <Text style={ styles.text_logo }>Radio</Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    header_container: {
        marginTop: 50,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 30
    },
    text_logo: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 2,
        height: 40,
        fontSize: 24,
        fontWeight: "700",
    }

});

