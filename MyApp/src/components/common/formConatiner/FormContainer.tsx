import { StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTheme } from "@react-navigation/native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import createStyles from "./FormContainer.style";
import { color } from 'react-native-reanimated';

type Props = {
  children: any
  isSignUp?: boolean
};
const FormContainer = ({ children, isSignUp }: Props) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={isSignUp ? { ...styles.container, height: hp('80%') } : { ...styles.container }}>
      <View style={isSignUp ? { ...styles.childContainer, height: hp('79%') } : { ...styles.childContainer }}>
        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}>
          {children}
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};


export default FormContainer;
