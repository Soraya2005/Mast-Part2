import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ManageMenuScreen from './src/screens/ManageMenuScreen';
import GuestScreen from './src/screens/GuestScreen';
import { MenuItem } from './src/types/types';

const Stack = createNativeStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', name: 'Margherita Pizza', description: 'Classic pizza with tomato and mozzarella', course: 'main', price: 12.50 },
    { id: '2', name: 'Caesar Salad', description: 'Fresh salad with chicken and Caesar dressing', course: 'starter', price: 8.00 },
    { id: '3', name: 'Tiramisu', description: 'Traditional Italian coffee dessert', course: 'dessert', price: 6.50 },
  ]);

  const addMenuItem = (newItemData: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...newItemData,
      id: Date.now().toString(),
    };
    setMenuItems(prev => [...prev, newItem]);
  };

  const removeMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
              onNavigateToManage={() => props.navigation.navigate('ManageMenu')}
              onNavigateToGuest={() => props.navigation.navigate('GuestView')}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen name="ManageMenu" options={{ title: 'Manage Menu' }}>
          {(props) => (
            <ManageMenuScreen
              {...props}
              menuItems={menuItems}
              onAddItem={addMenuItem}
              onRemoveItem={removeMenuItem}
              onBack={() => props.navigation.goBack()}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen name="GuestView" options={{ title: 'Guest View' }}>
          {(props) => (
            <GuestScreen
              {...props}
              menuItems={menuItems}
              onBack={() => props.navigation.goBack()}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}