import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-dynamic-vector-icons";
import { SCREENS } from "shared/constants/screens";
import HomeScreen from "@screens/App/home/HomeScreen";
import SearchScreen from "@screens/App/search/SearchScreen";
import ProfileScreen from "@screens/App/profile/ProfileScreen";
import NotificationScreen from "@screens/App/notification/NotificationScreen";
import { palette } from "@colors";
const Tab = createBottomTabNavigator();


const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
) => {
    let iconName = "home";
    switch (route.name) {
        case SCREENS.HOME || SCREENS.ROOT:
            iconName = focused ? "home" : "home-outline";
            break;
        case SCREENS.SEARCH:
            iconName = focused ? "search" : "search-outline";
            break;
        case SCREENS.NOTIFICATION:
            iconName = focused ? "notifications" : "notifications-outline";
            break;
        case SCREENS.PROFILE:
            iconName = focused ? "person" : "person-outline";
            break;
        default:
            iconName = focused ? "home" : "home-outline";
            break;
    }
    return <Icon name={iconName} type="Ionicons" size={size} color={color} />;
};
const TabStack = () => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === "dark";
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) =>
                    renderTabIcon(route, focused, color, size),
                tabBarActiveTintColor: palette.primary,
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: isDarkMode ? palette.black : palette.white,
                },
            })}
        >
            <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
            <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
            <Tab.Screen
                name={SCREENS.NOTIFICATION}
                component={NotificationScreen}
            />
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
};
export default TabStack;