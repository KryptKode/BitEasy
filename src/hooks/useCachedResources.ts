import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function useCachedResources() {
    let [fontsLoaded] = useFonts({
        ...Ionicons.font,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    React.useEffect(() => {
        init();
    }, [fontsLoaded]);

    const init = async () => {
        if (!fontsLoaded) {
            await SplashScreen.preventAutoHideAsync();
        } else {
            await SplashScreen.hideAsync();
        }
    };

    return fontsLoaded;
}
