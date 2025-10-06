import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuItem, CourseType } from '../types/types';

interface AddMenuItemScreenProps {
  onAddItem: (item: Omit<MenuItem, 'id'>) => void;
  onCancel: () => void;
}

export default function AddMenuItemScreen({ onAddItem, onCancel }: AddMenuItemScreenProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<CourseType>('starter');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && description && price) {
      onAddItem({ name, description, course, price });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Menu Item</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Dish name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
      />
      
      <Text style={styles.label}>Course Type:</Text>
      <View style={styles.courseContainer}>
        {(['starter', 'main', 'dessert'] as const).map(courseType => (
          <TouchableOpacity
            key={courseType}
            style={[styles.courseButton, course === courseType && styles.courseButtonActive]}
            onPress={() => setCourse(courseType)}
          >
            <Text style={styles.courseButtonText}>
              {courseType === 'starter' ? 'Starter' : 
               courseType === 'main' ? 'Main Course' : 'Dessert'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Price (e.g., 12.50)"
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add to Menu</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30,
    color: '#2c3e50'
  },
  input: { 
    backgroundColor: 'white', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: '#ddd',
    fontSize: 16
  },
  textArea: { 
    height: 100, 
    textAlignVertical: 'top' 
  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#2c3e50' 
  },
  courseContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  courseButton: { 
    flex: 1, 
    padding: 15, 
    backgroundColor: '#ecf0f1', 
    alignItems: 'center', 
    marginHorizontal: 5, 
    borderRadius: 10 
  },
  courseButtonActive: { 
    backgroundColor: '#3498db' 
  },
  courseButtonText: { 
    fontWeight: 'bold', 
    color: '#2c3e50' 
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 10 
  },
  button: { 
    flex: 1, 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginHorizontal: 5 
  },
  cancelButton: { 
    backgroundColor: '#e74c3c' 
  },
  addButton: { 
    backgroundColor: '#27ae60' 
  },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 16 
  },
});