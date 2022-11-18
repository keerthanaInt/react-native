import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
type AuthBodyProps = {
    lottieFile: any
}
const AuthBody = ({ lottieFile }: AuthBodyProps
) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <LottieView
                style={{ height: 300, width: 300 }}
                source={lottieFile}
                autoPlay
                speed={1}
                loop={false}
            />
        </View>

    );
};


export default AuthBody;
