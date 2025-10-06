import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddMenuItemScreen from './src/screens/AddMenuItemScreen';
import { MenuItem } from './src/types/types';

const Stack = createNativeStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { 
      id: '1', 
      name: 'Margherita Pizza', 
      description: 'Classic pizza with tomato and mozzarella', 
      course: 'main', 
      price: '12.50' 
    },
    { 
      id: '2', 
      name: 'Caesar Salad', 
      description: 'Fresh salad with chicken and Caesar dressing', 
      course: 'starter', 
      price: '8.00' 
    },
    { 
      id: '3', 
      name: 'Tiramisu', 
      description: 'Traditional Italian coffee dessert', 
      course: 'dessert', 
      price: '6.50' 
    },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen 
              {...props} 
              menuItems={menuItems} 
              onAddItem={() => props.navigation.navigate('AddItem')} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddItem">
          {(props) => (
            <AddMenuItemScreen 
              {...props} 
              onAddItem={(newItemData) => {
                const newItem: MenuItem = {
                  ...newItemData,
                  id: Date.now().toString(),
                };
                setMenuItems(prev => [...prev, newItem]);
                props.navigation.goBack();
              }}
              onCancel={() => props.navigation.goBack()}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}