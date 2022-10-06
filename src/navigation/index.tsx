/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import {
    createStackNavigator,
    StackCardInterpolationProps,
} from "@react-navigation/stack";
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Onboarding from "@src/screens/Onboarding/Onboarding";
import { useEffect } from "react";
import { loadI18n } from "@src/constants/texts";
import useCachedResources from "@src/hooks/useCachedResources";
import AppLoading from "@src/screens/AppLoading/AppLoading";
import { Animated } from "react-native";

const SPLASH_SCREEN_DURATION = 2000;

export default function Navigation() {
    const resourcesFetched = useCachedResources();
    const loadedLocales = loadI18n();

    useEffect(() => {
        const hideSplashScreen = () => {
            setTimeout(async () => {
                await SplashScreen.hideAsync();
            }, SPLASH_SCREEN_DURATION);
        };

        if (resourcesFetched && loadedLocales) {
            hideSplashScreen();
        }
    }, [resourcesFetched, loadedLocales]);

    if (!resourcesFetched || !loadedLocales) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer linking={LinkingConfiguration}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const forFade = ({ current, next }: StackCardInterpolationProps) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });
    return {
        containerStyle: {
            opacity: opacity,
        },
    };
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: "center",
                cardStyleInterpolator: forFade,
            }}
        >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
        </Stack.Navigator>
    );
}
