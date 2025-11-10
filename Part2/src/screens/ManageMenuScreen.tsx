import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { MenuItem, CourseType } from '../types/types';

interface ManageMenuScreenProps {
  menuItems: MenuItem[];
  onAddItem: (item: Omit<MenuItem, 'id'>) => void;
  onRemoveItem: (id: string) => void;
  onBack: () => void;
}

export default function ManageMenuScreen({ menuItems, onAddItem, onRemoveItem, onBack }: ManageMenuScreenProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<CourseType>('starter');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && description && price) {
      onAddItem({
        name,
        description,
        course,
        price: parseFloat(price)
      });
      setName('');
      setDescription('');
      setPrice('');
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  const handleRemove = (id: string, name: string) => {
    Alert.alert(
      'Remove Item',
      `Are you sure you want to remove ${name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', onPress: () => onRemoveItem(id), style: 'destructive' }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>
      
      {/* Add Item Form */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Dish name" value={name} onChangeText={setName} />
        <TextInput style={[styles.input, styles.textArea]} placeholder="Description" value={description} onChangeText={setDescription} multiline />
        
        <View style={styles.courseContainer}>
          {(['starter', 'main', 'dessert'] as const).map(courseType => (
            <TouchableOpacity key={courseType} style={[styles.courseButton, course === courseType && styles.courseButtonActive]} onPress={() => setCourse(courseType)}>
              <Text style={styles.courseButtonText}>{courseType === 'starter' ? 'Starter' : courseType === 'main' ? 'Main' : 'Dessert'}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TextInput style={styles.input} placeholder="Price" value={price} onChangeText={setPrice} keyboardType="decimal-pad" />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add to Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Current Items List */}
      <Text style={styles.subtitle}>Current Menu Items ({menuItems.length})</Text>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>{item.course} - ${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.id, item.name)}>
              <Text style={styles.removeButtonText}>×</Text>
            </TouchableOpacity>
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
  form: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 },
  input: { backgroundColor: '#f8f9fa', padding: 12, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  textArea: { height: 80, textAlignVertical: 'top' },
  courseContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  courseButton: { flex: 1, padding: 10, backgroundColor: '#e9ecef', alignItems: 'center', marginHorizontal: 5, borderRadius: 8 },
  courseButtonActive: { backgroundColor: '#007bff' },
  courseButtonText: { fontWeight: 'bold', color: '#495057' },
  addButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' },
  addButtonText: { color: 'white', fontWeight: 'bold' },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 8 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemDetails: { fontSize: 14, color: '#6c757d' },
  removeButton: { backgroundColor: '#dc3545', width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  removeButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  backButton: { backgroundColor: '#6c757d', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  backButtonText: { color: 'white', fontWeight: 'bold' }
});