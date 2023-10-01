import React from 'react';
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../assets/constant/color";

export const PlayerIcon = ( { focused } ) => {
    return (
        <View style={ styles.mainWrapper }>
            {
                focused
                    ? <Ionicons name='ios-headset' size={ 32 } color={ COLORS.tabsIcon }/>
                    : <Ionicons name='ios-headset-outline' size={ 32 } color={ COLORS.tabsIcon }/>
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
