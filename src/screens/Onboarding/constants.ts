import Images from "@src/constants/images";
import { OnboardingText } from "@src/constants/texts";
import { TFunction } from "i18next";

export const getOnboardingList = (translate: TFunction) => {
    return [
        {
            id: 1,
            title: translate(OnboardingText.texts.title1),
            subtitle: translate(OnboardingText.texts.subtitle1),
            img: Images.onboarding1,
        },
        {
            id: 2,
            title: translate(OnboardingText.texts.title2),
            subtitle: translate(OnboardingText.texts.subtitle2),
            img: Images.onboarding2,
        },
        {
            id: 3,
            title: translate(OnboardingText.texts.title3),
            subtitle: translate(OnboardingText.texts.subtitle3),
            img: Images.onboarding3,
        },
        {
            id: 4,
            title: translate(OnboardingText.texts.title4),
            subtitle: translate(OnboardingText.texts.subtitle4),
            img: Images.onboarding4,
        },
    ];
};

export default getOnboardingList;
