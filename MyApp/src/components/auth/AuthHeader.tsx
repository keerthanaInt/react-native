import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
type AuthHeaderProps={
  lottieFile:any
}
const AuthHeader = ({lottieFile}:AuthHeaderProps
) => {
  return (
    <View style={{ alignItems: 'center' }}>
      {/* <LottieView
        style={{ height: 300, width: 300 }}
        source={lottieFile}
        autoPlay
        speed={1}
        loop={false}
      /> */}
    </View>

  );
};


export default AuthHeader;
