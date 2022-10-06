import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import { darkTheme } from "@src/constants/theme";
import Navigation from "@src/navigation";

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <SafeAreaProvider>
                <Navigation />
                <StatusBar
                    style="dark"
                    translucent
                    backgroundColor={darkTheme.colors.primary.default}
                />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}
