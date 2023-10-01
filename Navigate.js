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
import { COLORS } from "./src/assets/constant/color";

const Tab = createBottomTabNavigator()

export const Navigate = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={ {
                    tabBarActiveTintColor: COLORS.tabsIcon,
                    tabBarInactiveTintColor: COLORS.tabsIcon,
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                    }
                } }>


                <Tab.Screen
                    name="Главная"
                    component={ MainScreen }
                    options={ {
                        tabBarIcon: ({focused}) => (<HomeIcon focused={focused}/>)
                    } }/>

                <Tab.Screen
                    name="Плеер"
                    component={ PlayerScreen }
                    options={ {
                        tabBarIcon: ({focused}) => (<PlayerIcon focused={focused}/>)
                    } }/>

                <Tab.Screen
                    name="Избранное"
                    component={ FavoritesScreen }
                    options={ {
                        tabBarIcon: ({focused}) => (<FavoritesIcon focused={focused}/>)
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




