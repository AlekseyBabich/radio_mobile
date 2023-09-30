import React from 'react';
import { StyleSheet, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../../../assets/constant/color";

export const PlayerIcon = () => {
    return (
        <View style={ styles.mainWrapper }>
            <Fontisto name='headphone' size={32} color={COLORS.tabsIcon}/>
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
