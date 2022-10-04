import React from "react";
import styled from "styled-components/native";

export enum ButtonVariant {
    Primary,
    Secondary,
    Ghost,
}

interface IButtonProps {
    variant: ButtonVariant;
}

const Button = ({ variant }: IButtonProps) => {
    return <Container></Container>;
};

export default Button;

const Container = styled.TouchableOpacity<IButtonProps>``;
