import React, { useRef, useState, useEffect } from "react";
import { AppState, StyleSheet, Text, View } from "react-native";

const AppState = () => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange);

        return () => {
            AppState.removeEventListener("change", _handleAppStateChange);
        };
    }, []);

    const _handleAppStateChange = (nextAppState) => {
        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
        ) {
            // TODO SET USERS ONLINE STATUS TO TRUE
            console.log("appStateVisible==>", appStateVisible);
        } else {
            // TODO SET USERS ONLINE STATUS TO FALSE
            console.log("appStateVisible<==", appStateVisible);
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        console.log("AppState", appState.current);
    };

    return (
        <View style={styles.container}>
            <Text>Current state is: {appStateVisible}</Text>
        </View>
    );
};