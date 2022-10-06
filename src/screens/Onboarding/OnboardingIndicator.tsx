import { useTheme } from "styled-components/native";
import { StyleSheet, View } from "react-native";
import React from "react";
import { scaledSize } from "@src/utils/scaledSize";

type OnboardingIndicatorProps = {
    isActive: boolean;
};

const OnboardingIndicator = ({ isActive }: OnboardingIndicatorProps) => {
    const theme = useTheme();
    return (
        <View
            style={[
                styles.indicator,
                {
                    backgroundColor: isActive ? theme.colors.text.onSurface : theme.colors.onboardingIndicatorInActive,
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    indicator: {
        height: scaledSize(6),
        width: "20%",
        marginVertical: scaledSize(16),
        borderRadius: scaledSize(8),
    },
});

export default OnboardingIndicator;
