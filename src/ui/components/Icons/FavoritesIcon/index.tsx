import React from 'react';
import { StyleSheet, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../../../assets/constant/color";

export const FavoritesIcon = ({focused}) => {
    return (
        <View style={ styles.mainWrapper }>
            {
                focused
                    ? <AntDesign name='star' size={32} color={COLORS.tabsIcon}/>
                    : <AntDesign name='staro' size={32} color={COLORS.tabsIcon}/>
            }

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
