import React, { useRef, useState, useContext } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@src/types";
import OnboardingSteps from "./OnboardingSteps";

type IOnboardingProps = StackScreenProps<RootStackParamList, "Onboarding">;

const Onboarding = ({ navigation }: IOnboardingProps) => {
    const navigateToHome = () => {
        navigation.navigate("Root");
    };

    return <OnboardingSteps onComplete={navigateToHome} />;
};

export default Onboarding;
