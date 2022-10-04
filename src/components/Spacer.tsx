import React from "react";
import styled from "styled-components/native";

interface ISpacer {
    height?: number;
    width?: number;
}

const Spacer = ({ height = 0, width = 0 }: ISpacer) => {
    return <Container height={height} width={width} />;
};

export default Spacer;

const Container = styled.View<ISpacer>`
    height: ${({ height }) => `${height || 0}px`};
    width: ${({ width }) => `${width || 0}px`};
`;
