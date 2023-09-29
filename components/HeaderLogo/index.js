import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";


const styles = StyleSheet.create({
    header_container: {
        marginTop: 50,
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: 'rgba( 0, 0, 0, 0.1)',
        borderRadius: 30
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginRight: 5
    },
    text_logo: {
        paddingRight: 10,
        paddingTop: 2,
        height: 40,
        fontSize: 24,
        fontWeight: "700"
    }

});

const iconUrl = require('../../images/pngtree-vector-microphone-icon-png-image_695750.jpg')

export const HeaderLogo = () => {
    return (
        <TouchableOpacity>
            <SafeAreaView style={styles.header_container}>
                <Image style={styles.logo} source={iconUrl}/>
                <Text style={styles.text_logo}>MyRadio</Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
};
