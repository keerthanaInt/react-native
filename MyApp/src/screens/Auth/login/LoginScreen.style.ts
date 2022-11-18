import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle, } from "react-native";

import { width, height, REGULAR, SMALL, VERY_SMALL } from "../../../shared/utils/data"
interface Style {
    container: ViewStyle;
    backgroundImage: ViewStyle;
    logoImage: TextStyle;
    formContainer: ViewStyle;
    title: TextStyle;
    Info: ViewStyle;
    textBoxlabel: ViewStyle;
    errorText: ViewStyle;
}

export default (theme: ExtendedTheme) => {
    const { colors } = theme;
    return StyleSheet.create<Style>({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        backgroundImage: {
            ...StyleSheet.absoluteFillObject,
            width: width,
            height: height,
        },
        logoImage: {
            alignSelf: 'center',
            width: width * 0.4,
            resizeMode: 'contain',
        },
        formContainer: {
            width: width,
            height: height * 0.5,
        },
        title: {
            fontSize: REGULAR,
            color: 'black',
        },
        Info: {
            fontSize: SMALL,
            color: 'gray',
        },
        textBoxlabel: {
            fontSize: VERY_SMALL,
            color: 'black',
        },
        errorText: {
            color: 'red',
            alignSelf: 'center',
            textAlign: 'center'
        },
    });
};


