import React, { useRef, useState } from "react";
import { StyleSheet, ScrollView, Image, View, NativeSyntheticEvent, NativeScrollEvent, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Text from "@src/components/Text";
import Button from "@src/components/Button";
import BitEasySafeAreaView from "@src/components/BitEasySafeAreaView";
import Images from "@src/constants/images";
import Layout from "@src/constants/layout";
import Spacer from "@src/components/Spacer";
import getOnboardingList from "./constants";
import { useTranslation } from "react-i18next";
import { OnboardingText } from "@src/constants/texts";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import OnboardingIndicator from "@src/screens/Onboarding/OnboardingIndicator";
import { scaledSize } from "@src/utils/scaledSize";

type IOnboardingStepsProps = {
    onComplete: () => void;
};

const Onboarding = ({ onComplete }: IOnboardingStepsProps) => {
    const theme = useTheme();
    const { t } = useTranslation(OnboardingText.key);
    const [page, setPage] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offset = e.nativeEvent.contentOffset.x;
        const index = Math.round(offset / Layout.window.width);
        setPage(index);
    };

    const navigateForward = () => {
        try {
            const newPage = page + 1;

            if (newPage == 4) {
                return onComplete();
            }

            scrollViewRef.current?.scrollTo({
                x: newPage * Layout.window.width,
                y: 0,
                animated: true,
            });
            return setPage((prevPage) => prevPage + 1);
        } catch (e) {
            console.log("e ==> ", e);
        }
    };

    return (
        <BitEasySafeAreaView
            safeAreaBackground={theme.colors.onboardingTopSurface}
            style={{ backgroundColor: theme.colors.surface.soft, flex: 1 }}
        >
            <ExpoStatusBar translucent style={"light"} backgroundColor={theme.colors.onboardingTopSurface} />
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{ flexGrow: 1 }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onMomentumScrollEnd}
            >
                <>
                    {getOnboardingList(t).map((item) => (
                        <View key={item.id} style={styles.onboardingItem}>
                            <Image source={item.img} style={styles.onboardingItemImg} resizeMode="stretch" />
                            <Spacer height={hp(3)} />
                            <View style={styles.onboardingItemCopy}>
                                <Image source={Images.bitEasy} />
                                <Spacer height={hp(3)} />
                                <Text variant="displaySmall" textAlign="center" color={theme.colors.text.onSurface}>
                                    {item.title}
                                </Text>
                                <Spacer height={hp(2)} />
                                <Text variant="textSmall" textAlign="center" color={theme.colors.text.onSurface}>
                                    {item.subtitle}
                                </Text>
                            </View>
                            <Spacer height={hp(4)} />
                        </View>
                    ))}
                </>
            </ScrollView>
            <View style={[styles.indicatorContainer]}>
                {getOnboardingList(t).map((item, index) => (
                    <OnboardingIndicator isActive={page == index} key={item.id} />
                ))}
            </View>
            <View style={styles.footer}>
                <Button
                    style={{ width: Layout.window.width - scaledSize(64) }}
                    color={theme.colors.text.onPrimary}
                    label={t(OnboardingText.texts.next)}
                    onPress={navigateForward}
                />
            </View>
            <Spacer height={hp(6)} />
        </BitEasySafeAreaView>
    );
};

const styles = StyleSheet.create({
    indicatorContainer: {
        position: "absolute",
        top: scaledSize(10),
        left: scaledSize(32),
        right: scaledSize(32),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    onboardingItem: {
        width: Layout.window.width,
        flex: 1,
    },
    onboardingItemImg: {
        width: "100%",
        flex: 1,
        flexGrow: 1,
        alignSelf: "center",
    },
    onboardingItemCopy: {
        width: Layout.window.width - scaledSize(64),
        alignSelf: "center",
    },
    footer: {
        alignItems: "center",
    },
});

export default Onboarding;
