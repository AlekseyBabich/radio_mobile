import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MainScreen } from "./src/ui/screens/TabScreens/MainScreen";
import { PlayerScreen } from "./src/ui/screens/TabScreens/PlayerScreen";
import { FavoritesScreen } from "./src/ui/screens/TabScreens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { HomeIcon } from "./src/ui/components/Icons/HomeIcon";
import { PlayerIcon } from "./src/ui/components/Icons/PlayerIcon";
import { FavoritesIcon } from "./src/ui/components/Icons/FavoritesIcon";

const Tab = createBottomTabNavigator()

export const Navigate = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={ {
                    tabBarActiveTintColor: '#e91e63',
                    tabBarInactiveTintColor: '#e91',
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                    }
                } }>


                <Tab.Screen
                    name="Главная"
                    component={ MainScreen }
                    options={ {
                        tabBarIcon: () => (<HomeIcon/>)
                    } }/>

                <Tab.Screen
                    name="Плеер"
                    component={ PlayerScreen }
                    options={ {
                        tabBarIcon: () => (<PlayerIcon/>)
                    } }/>

                <Tab.Screen
                    name="Избранное"
                    component={ FavoritesScreen }
                    options={ {
                        tabBarIcon: () => (<FavoritesIcon/>)
                    } }/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {},
    logo1: {},
    logo2: {},
    logo3: {},
})




