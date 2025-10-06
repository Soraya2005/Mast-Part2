import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuItem, CourseType } from '../types/types';

interface HomeScreenProps {
  menuItems: MenuItem[];
  onAddItem: () => void;
}

export default function HomeScreen({ menuItems, onAddItem }: HomeScreenProps) {
  const [filter, setFilter] = useState<CourseType | 'all'>('all');

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.course === filter);

  const getCourseLabel = (course: CourseType) => {
    switch(course) {
      case 'starter': return 'Starter';
      case 'main': return 'Main Course';
      case 'dessert': return 'Dessert';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      <Text style={styles.subtitle}>Total items: {menuItems.length}</Text>
      
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {(['all', 'starter', 'main', 'dessert'] as const).map(course => (
          <TouchableOpacity
            key={course}
            style={[styles.filterButton, filter === course && styles.filterButtonActive]}
            onPress={() => setFilter(course)}
          >
            <Text style={styles.filterButtonText}>
              {course === 'all' ? 'All' : getCourseLabel(course)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu Items List */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <View style={styles.itemDetails}>
              <Text style={styles.itemCourse}>{getCourseLabel(item.course)}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* Add Item Button */}
      <TouchableOpacity style={styles.addButton} onPress={onAddItem}>
        <Text style={styles.addButtonText}>+ Add New Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f8f9fa' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 10,
    color: '#2c3e50'
  },
  subtitle: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#7f8c8d' 
  },
  filterContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 20 
  },
  filterButton: { 
    padding: 10, 
    borderRadius: 20, 
    backgroundColor: '#ecf0f1' 
  },
  filterButtonActive: { 
    backgroundColor: '#3498db' 
  },
  filterButtonText: { 
    color: '#2c3e50', 
    fontWeight: 'bold' 
  },
  menuItem: { 
    backgroundColor: 'white', 
    padding: 15, 
    marginBottom: 10, 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#2c3e50' 
  },
  itemDescription: { 
    fontSize: 14, 
    color: '#7f8c8d', 
    marginTop: 5 
  },
  itemDetails: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10 
  },
  itemCourse: { 
    fontSize: 12, 
    color: '#95a5a6', 
    fontStyle: 'italic' 
  },
  itemPrice: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#27ae60' 
  },
  addButton: { 
    backgroundColor: '#3498db', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginTop: 20 
  },
  addButtonText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});