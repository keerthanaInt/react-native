import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignUpScreen } from '@screens/index';

const AuthStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: '' }}
            />
            
        </Stack.Navigator>
    );
};

export default AuthStack;
