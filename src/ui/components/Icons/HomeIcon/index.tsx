import React from 'react';
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../assets/constant/color";

export const HomeIcon = () => {
    return (
        <View style={ styles.mainWrapper }>
            <Ionicons name='home' size={32} color={COLORS.tabsIcon}/>
        </View>
    );
};


const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
    }
})
