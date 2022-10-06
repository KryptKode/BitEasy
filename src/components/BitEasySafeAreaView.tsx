import { SafeAreaView, View, ViewProps, StyleSheet, StatusBar } from "react-native";
import React from "react";

interface BitEasySafeAreaViewProps extends ViewProps {
    safeAreaBackground: string;
}

const BitEasySafeAreaView: React.FC<any> = ({ children, style, safeAreaBackground }: BitEasySafeAreaViewProps) => {
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: safeAreaBackground }]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    view: {
        flex: 1,
    },
});

export default BitEasySafeAreaView;
