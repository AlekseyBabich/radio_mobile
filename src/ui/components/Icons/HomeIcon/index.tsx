import React from 'react';
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../assets/constant/color";

export const HomeIcon = ( { focused } ) => {
    return (
        <View style={ styles.mainWrapper }>
            {
                focused
                    ? <Ionicons name='home' size={ 32 } color={ COLORS.tabsIcon }/>
                    : <Ionicons name='home-outline' size={ 32 } color={ COLORS.tabsIcon }/>
            }
        </View>
    );
};


const styles = StyleSheet.create( {
    mainWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {}
} )
