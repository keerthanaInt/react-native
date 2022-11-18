import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "shared/constants/screens";
import DetailScreen from "@screens/App/detail/DetailScreen";
import TabStack from "./TabStack";

const Stack = createStackNavigator();

const AppStack = () => {
    return (        
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={SCREENS.ROOT} component={TabStack} />
                <Stack.Screen name={SCREENS.DETAIL}>
                    {(props) => <DetailScreen {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        
    );
};

export default AppStack;
