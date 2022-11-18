import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStack from './TabStack';
import {MaterialIcons} from '../shared/utils/data'
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  
    return (
        <Drawer.Navigator
            initialRouteName={'DashBoard'}
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#00FF00',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: '',
            }}>
            <Drawer.Screen
                name="DashBoard"
                component={TabStack}
                options={{
                    drawerIcon: () => (
                        <MaterialIcons name="photo-library" size={22} color={'#00FF00'} />
                    ),
                  
                }}
            />
          
        </Drawer.Navigator>
    );
};

export default DrawerStack;
