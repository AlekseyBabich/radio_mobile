import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import { COLORS } from "../../../../assets/constant/color";


export const MainScreen = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.text}>Главная</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
    },
})
