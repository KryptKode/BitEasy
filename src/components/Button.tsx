import React, { useCallback, useMemo } from "react";
import { TouchableOpacity, ViewStyle, Image, ImageSourcePropType, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import Text from "./Text";
import { scaledSize } from "@src/utils/scaledSize";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ghostBordered";

type ButtonSize = "sm" | "lg" | "xsm" | "xxsm";

interface IButtonProps extends TouchableOpacityProps {
    variant?: ButtonVariant;
    label?: string;
    size?: ButtonSize;
    full?: boolean;
    onPress: () => void;
    style?: ViewStyle;
    children?: React.ReactNode;
    icon?: ImageSourcePropType;
    color?: string;
    iconPosition?: "left" | "center" | "right";
    textPosition?: "left" | "center";
    loading?: boolean;
    backgroundColor?: string;
    //   IconLeft: React.ReactNode;
    //   IconRight: React.ReactNode;
}

const Button = ({
    variant,
    label,
    size,
    full,
    onPress,
    style,
    children,
    icon,
    iconPosition,
    color,
    disabled,
    loading,
    textPosition,
    backgroundColor,
}: IButtonProps) => {
    const theme = useTheme();
    const getTextVariant = () => {
        switch (size) {
            case "sm":
                return "textMedium";
            case "xsm":
                return "textSmall";
            case "xxsm":
                return "textXSmall";
            default:
                return "textLarge";
        }
    };

    const textVariant = getTextVariant();

    const loaderColor = useMemo(() => {
        switch (variant) {
            case "primary":
                return theme.colors.surface.soft;

            case "ghostBordered":
                return theme.colors.text.default;

            default:
                return theme.colors.surface.soft;
        }
    }, [loading]);

    const renderChildren = useCallback(() => {
        if (children) {
            return children;
        }

        if (loading) {
            return <LoaderIcon color={loaderColor} />;
        }

        if (icon && label) {
            return (
                <>
                    <IconImage source={icon} iconPosition={iconPosition} />
                    <Text variant={textVariant} color={color}>
                        {label}
                    </Text>
                </>
            );
        }

        if (label) {
            return (
                <Text variant={textVariant} color={color}>
                    {label}
                </Text>
            );
        }

        return null;
    }, [children, label, loading, icon]);

    return (
        <Container
            variant={variant}
            size={size}
            full={full}
            onPress={onPress}
            style={style}
            textPosition={textPosition}
            disabled={disabled || loading}
            backgroundColor={backgroundColor}
        >
            {renderChildren()}
        </Container>
    );
};

Button.defaultProps = {
    variant: "primary",
    size: "lg",
    iconPosition: "center",
};

export default Button;

const Container = styled.TouchableOpacity<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    full?: boolean;
    style?: ViewStyle;
    textPosition?: "left" | "center";
    backgroundColor?: string;
}>`
    min-width: ${scaledSize(200)}px;
    border-radius: ${scaledSize(14)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${({ full }) => full && `width: 100%`}

    ${({ disabled }) => disabled && `opacity: 0.6`}

  ${({ textPosition }) => {
        switch (textPosition) {
            case "left":
                return `
          justify-content: flex-start;
          padding-left: ${scaledSize(16)}px;
          padding-right: ${scaledSize(16)}px;
        
        `;
            case "center":
            default:
                return `justify-content: center;`;
        }
    }}

  ${({ variant, theme }) => {
        switch (variant) {
            case "secondary":
                return `
          background-color: ${theme.colors.surface.default};
          `;
            case "ghost":
                return `
          background-color: transparent;
          min-width: auto;
          `;
            case "ghostBordered":
                return `
          background-color: transparent;
          min-width: auto;
          border-width: ${scaledSize(2)}px;
          border-color: ${theme.colors.surface.strong}
          `;
            case "primary":
            default:
                return `
            background-color: ${theme.colors.primary.default};
            elevation: 1;
        `;
        }
    }}

  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`}

  ${({ size }) => {
        switch (size) {
            case "sm":
                return `
            height: ${scaledSize(36)}px;
            border-radius: ${scaledSize(8)}px;
        `;
            case "lg":
                return ` height: ${scaledSize(56)}px; `;
            default:
                return `
           height: ${scaledSize(36)}px;
            border-radius: ${scaledSize(8)}px;
        `;
        }
    }}
`;

const IconImage = styled.Image<{ iconPosition?: "left" | "center" | "right" }>`
    height: ${scaledSize(20)}px;
    width: ${scaledSize(20)}px;
    margin-right: ${scaledSize(12)}px;

    ${({ iconPosition }) => {
        switch (iconPosition) {
            case "right":
                return `
          position: absolute;
          right: ${scaledSize(14)}px;
        `;
            case "left":
            default:
                return `
          position: absolute;
          left: ${scaledSize(14)}px;
        `;
        }
    }}
`;

const LoaderIcon = styled.ActivityIndicator``;
