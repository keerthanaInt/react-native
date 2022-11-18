
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle, } from "react-native";

import { SMALL, SMALL_VERTICAL_SPACE, width } from "shared/utils/data";

interface Style {
    InputContainer: ViewStyle;
    InputText: ViewStyle;

}

export default (theme: ExtendedTheme) => {

    return StyleSheet.create<Style>({
        InputContainer: {
            height: 60,
            borderRadius: 20,
            flexDirection: 'row',
            paddingHorizontal: 14,
            overflow: 'hidden',
            borderWidth: 1,
            alignItems: 'center',
            borderColor: 'gray'
        },
        InputText: {
            flex: 1,
            paddingLeft: SMALL_VERTICAL_SPACE,
            color: 'black',
            fontSize: SMALL,
        },
    });
};


