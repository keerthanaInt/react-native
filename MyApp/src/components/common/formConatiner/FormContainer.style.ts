
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle, } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { height, width } from "shared/utils/data";

interface Style {

    container: ViewStyle;
    childContainer: ViewStyle;
 
}

export default (theme: ExtendedTheme) => {
   
    return StyleSheet.create<Style>({
        container: {
            width: width,
            height: hp('65%'),
            backgroundColor: 'white',
            borderTopEndRadius: height * 0.5,
            borderTopLeftRadius: height * 0.5,
            paddingTop: 5,
        },
        childContainer: {
            width: width,
            height: hp('64%'),
            backgroundColor: '#ddd',
            borderTopEndRadius: height*0.05 ,
            borderTopLeftRadius: height*0.05 ,
            paddingHorizontal: 14,
        },
    });
};


