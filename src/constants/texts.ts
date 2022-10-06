import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { useEffect, useState } from "react";
import onboardingFr from "@assets/text/fr/onboarding.json";
import onboardingEn from "@assets/text/en/onboarding.json";

export const OnboardingText = {
    key: "onboarding",
    texts: {
        next: "next",
        title1: "title1",
        subtitle1: "subtitle1",
        title2: "title2",
        subtitle2: "subtitle2",
        title3: "title3",
        subtitle3: "subtitle3",
        title4: "title4",
        subtitle4: "subtitle4",
    },
};

const initializeI18n = async (): Promise<void> => {
    await i18next.use(initReactI18next).init({
        lng: "en",
        compatibilityJSON: "v3",
        debug: __DEV__,
        resources: {
            fr: {
                onboarding: onboardingFr,
            },
            en: {
                onboarding: onboardingEn,
            },
        },
    });
};

export const locales = [
    {
        name: "English",
        code: "en",
    },

    {
        name: "French",
        code: "fr",
    },
];

export const loadI18n = () => {
    const [isBootstrapped, setIsBootstrapped] = useState(false);
    useEffect(() => {
        (async () => {
            if (!isBootstrapped) {
                await initializeI18n();
                setIsBootstrapped(true);
            }
        })();
    }, []);

    return isBootstrapped;
};
