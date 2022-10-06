import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";

type TextVariant =
    | "displayLarge"
    | "displayMedium"
    | "displaySmall"
    | "displayLargeBold"
    | "displayMediumBold"
    | "displaySmallBold"
    | "textLarge"
    | "textMedium"
    | "textSmall"
    | "textXSmall"
    | "linkLarge"
    | "linkMedium"
    | "linkSmall"
    | "linkXSmall";

interface ITextProps extends TextProps {
    variant?: TextVariant;
    color?: string;
    textAlign?: "center" | "left" | "right";
    numberOfLines?: number;
    textTransform?: "capitalize" | "uppercase" | "lowercase";
    disabled?: boolean;
}

const Text = ({ children, variant, color, style, textAlign, numberOfLines, textTransform, disabled }: ITextProps) => {
    return (
        <CustomText
            variant={variant}
            color={color}
            textAlign={textAlign}
            textTransform={textTransform}
            numberOfLines={numberOfLines}
            style={style}
            disabled={disabled}
        >
            {children}
        </CustomText>
    );
};

Text.defaultProps = {
    variant: "textMedium",
    textAlign: "left",
};

export default Text;

const CustomText = styled.Text<ITextProps>`
    ${({ color, theme }) => `
    color: ${color || theme.colors.text.default};
`};

    ${({ variant, theme }) => {
        switch (variant) {
            case "displayLarge":
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 48px;
                line-height: 50px;
                letter-spacing: 1px;
            `;
            case "displayMedium":
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 32px;
                line-height: 36px;
                letter-spacing: 1px;
            `;
            case "displaySmall":
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 24px;
                line-height: 32px;
                letter-spacing: 1px;
            `;
            case "displayLargeBold":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 48px;
                line-height: 50px;
                letter-spacing: 1px;
            `;
            case "displayMediumBold":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 32px;
                line-height: 36px;
            `;
            case "displaySmallBold":
                return `
                font-family: ${theme.fontFamily.bold};
                 font-size: 24px;
                line-height: 32px;
            `;
            case "textLarge":
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 20px;
                line-height: 32px;
                letter-spacing: 0.75px;
            `;
            case "textMedium":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 16px;
                line-height: 32px;
                letter-spacing: 0.75px;
            `;
            case "textSmall":
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 0.75px;
            `;
            case "textXSmall":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 13px;
                line-height: 22px;
                letter-spacing: 0.75px;
            `;
            case "linkLarge":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 20px;
                line-height: 32px;
                letter-spacing: 0.75px;
            `;
            case "linkMedium":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 16px;
                line-height: 28px;
                letter-spacing: 0.75px;
            `;
            case "linkSmall":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 14px;
                line-height: 26px;
                letter-spacing: 0.75px;
            `;
            case "linkXSmall":
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 13px;
                line-height: 22px;
                letter-spacing: 0.75px;
            `;
        }
    }}
`;
