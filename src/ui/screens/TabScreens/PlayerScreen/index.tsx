import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import RadioPlayer, {
    RadioPlayerEvents,
} from 'react-native-radio-player';
import { COLORS } from "../../../../assets/constant/color";
import {useEffect} from "react";


export const PlayerScreen = (): JSX.Element => {
    useEffect(() => {
        RadioPlayer.radioURLWithMetadataSeparator(
            'https://streams.radio.co/se2fe41ec1/listen',
            "-"
        ).then();
        return () => {
            RadioPlayer.play().then();
        }
    }, [])
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.text}>Плеер</Text>
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
