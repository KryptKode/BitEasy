import "styled-components/native";

interface IPalette {
    soft: string;
    default: string;
    strong?: string;
    disabled?: string;
    divider?: string;
    extraStrong?: string;
}

interface BrandPalette {
    dark: string;
    default: string;
    light?: string;
}

interface TextPalette {
    soft: string;
    default: string;
    onPrimary: string;
    onSurface: string;
    onSecondary: string;
    strong?: string;
    extraStrong?: string;
    disabled?: string;
}

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            // text: "#fff",
            background: string;
            tint: string;
            tabIconDefault: string;
            tabIconSelected: string;
            onboardingTopSurface: string;
            onboardingIndicatorInActive: string;
            text: TextPalette;
            surface: IPalette;
            primary: BrandPalette;
            secondary: BrandPalette;
            success: BrandPalette;
            danger: BrandPalette;
        };
        fontFamily: {
            regular: string;
            medium: string;
            semiBold: string;
            bold: string;
        };
    }
}
