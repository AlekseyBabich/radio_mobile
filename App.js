import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HeaderLogo } from "./src/ui/components/HeaderLogo";
import { Navigate } from "./Navigate";


export default function App() {
    return (
        <SafeAreaView style={ styles.container }>
            <HeaderLogo/>
            <Navigate/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

