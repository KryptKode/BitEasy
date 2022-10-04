import "styled-components/native";

interface IPalette {
    soft: string;
    default: string;
    strong?: string;
    disabled?: string;
    divider?: string;
    extraStrong?: string;
}

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            // text: "#fff",
            background: string;
            tint: string;
            tabIconDefault: string;
            tabIconSelected: string;
            text: IPalette;
            surface: IPalette;
            primary: IPalette;
            secondary: IPalette;
            success: IPalette;
            danger: IPalette;
        };
        fontFamily: {
            regular: string;
            medium: string;
            semiBold: string;
            bold: string;
        };
    }
}
