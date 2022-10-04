import { DefaultTheme } from "styled-components";
import Colors from "./colors";

const theme: DefaultTheme = {
    colors: Colors.dark,
    fontFamily: {
        regular: "Poppins_400Regular",
        medium: "Poppins_500Medium",
        semiBold: "Poppins_600SemiBold",
        bold: "Poppins_700Bold",
    },
};

export const lightTheme = {
    ...theme,
    colors: Colors.light,
};

export const darkTheme = {
    ...theme,
    colors: Colors.dark,
};
