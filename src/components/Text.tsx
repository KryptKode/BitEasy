import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";

export enum TextVariant {
    DisplayLarge,
    DisplayMedium,
    DisplaySmall,
    DisplayLargeBold,
    DisplayMediumBold,
    DisplaySmallBold,
    TextLarge,
    TextMedium,
    TextSmall,
    TextXSmall,
    LinkLarge,
    LinkMedium,
    LinkSmall,
    LinkXSmall,
}

interface ITextProps extends TextProps {
    children?: any;
    variant: TextVariant;
    color?: string;
}

const Text = ({ children, variant, color, style }: ITextProps) => {
    return (
        <CustomText variant={variant} color={color}>
            {children}
        </CustomText>
    );
};

Text.defaultProps = {
    variant: TextVariant.TextMedium,
};

export default Text;

const CustomText = styled.Text<ITextProps>`
    ${({ color, theme }) => `
    color: ${color || theme.colors.text.default};
`};

    ${({ variant, theme }) => {
        switch (variant) {
            case TextVariant.DisplayLarge:
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 48px;
                line-height: 50px;
                letter-spacing: 1px;
            `;
            case TextVariant.DisplayMedium:
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 32px;
                line-height: 36px;
                letter-spacing: 1px;
            `;
            case TextVariant.DisplaySmall:
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 24px;
                line-height: 32px;
                letter-spacing: 1px;
            `;
            case TextVariant.DisplayLargeBold:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 48px;
                line-height: 50px;
                letter-spacing: 1px;
            `;
            case TextVariant.DisplayMediumBold:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 32px;
                line-height: 36px;
            `;
            case TextVariant.DisplaySmallBold:
                return `
                font-family: ${theme.fontFamily.bold};
                 font-size: 24px;
                line-height: 32px;
            `;
            case TextVariant.TextLarge:
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 20px;
                line-height: 32px;
                letter-spacing: 0.75px;
            `;
            case TextVariant.TextMedium:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 16px;
                line-height: 32px;
                letter-spacing: 0.75px;
            `;
            case TextVariant.TextSmall:
                return `
                font-family: ${theme.fontFamily.regular};
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 0.75px;
            `;
            case TextVariant.TextXSmall:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 13px;
                line-height: 22px;
                letter-spacing: 0.75px;
            `;
            case TextVariant.LinkLarge:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 20px;
                line-height: 32px;
                letter-spacing: 0.75px;
            `;
            case TextVariant.LinkMedium:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 16px;
                line-height: 28px;
                letter-spacing: 0.75px;
            `;
            case TextVariant.LinkSmall:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 14px;
                line-height: 26px;
                letter-spacing: 0.75px;
            `;
            case TextVariant.LinkXSmall:
                return `
                font-family: ${theme.fontFamily.bold};
                font-size: 13px;
                line-height: 22px;
                letter-spacing: 0.75px;
            `;
        }
    }}
`;
