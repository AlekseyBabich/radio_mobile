import React from 'react';
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../../../assets/constant/color";

export const FavoritesIcon = () => {
    return (
        <View style={ styles.mainWrapper }>
            <MaterialIcons name='stars' size={32} color={COLORS.tabsIcon}/>
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
