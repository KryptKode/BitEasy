import Images from "@src/constants/images";
import React from "react";
import styled from "styled-components/native";

const AppLoading = () => {
    return <Container source={Images.splash} />;
};

export default AppLoading;

const Container = styled.ImageBackground`
    flex: 1;
`;
