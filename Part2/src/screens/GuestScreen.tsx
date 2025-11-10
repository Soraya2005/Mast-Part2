import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuItem, CourseType } from '../types/types';

interface GuestScreenProps {
  menuItems: MenuItem[];
  onBack: () => void;
}

export default function GuestScreen({ menuItems, onBack }: GuestScreenProps) {
  const [filter, setFilter] = useState<CourseType | 'all'>('all');

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu for Guests</Text>
      
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {(['all', 'starter', 'main', 'dessert'] as const).map(course => (
          <TouchableOpacity key={course} style={[styles.filterButton, filter === course && styles.filterButtonActive]} onPress={() => setFilter(course)}>
            <Text style={styles.filterButtonText}>
              {course === 'all' ? 'All' : course === 'starter' ? 'Starters' : course === 'main' ? 'Mains' : 'Desserts'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.results}>{filteredItems.length} items found</Text>

      {/* Menu Items */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <View style={styles.itemDetails}>
              <Text style={styles.itemCourse}>
                {item.course === 'starter' ? 'Starter' : item.course === 'main' ? 'Main Course' : 'Dessert'}
              </Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  filterButton: { padding: 10, borderRadius: 20, backgroundColor: '#e9ecef' },
  filterButtonActive: { backgroundColor: '#007bff' },
  filterButtonText: { color: '#495057', fontWeight: 'bold' },
  results: { textAlign: 'center', marginBottom: 10, color: '#6c757d' },
  menuItem: { backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 8 },
  itemName: { fontSize: 18, fontWeight: 'bold', color: '#212529' },
  itemDescription: { fontSize: 14, color: '#6c757d', marginTop: 5 },
  itemDetails: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  itemCourse: { fontSize: 12, color: '#adb5bd', fontStyle: 'italic' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#28a745' },
  backButton: { backgroundColor: '#6c757d', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  backButtonText: { color: 'white', fontWeight: 'bold' }
});