import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuItem } from '../types/types';
import { calculateAveragePrices } from '../utils/calculations';

interface HomeScreenProps {
  menuItems: MenuItem[];
  onNavigateToManage: () => void;
  onNavigateToGuest: () => void;
}

export default function HomeScreen({ menuItems, onNavigateToManage, onNavigateToGuest }: HomeScreenProps) {
  const stats = calculateAveragePrices(menuItems);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Kitchen</Text>
      <Text style={styles.subtitle}>Total Menu Items: {menuItems.length}</Text>

      {/* Average Prices */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Average Prices</Text>
        <View style={styles.statsRow}>
          <Text style={styles.stat}>Starters: ${stats.starter.toFixed(2)}</Text>
          <Text style={styles.stat}>Mains: ${stats.main.toFixed(2)}</Text>
          <Text style={styles.stat}>Desserts: ${stats.dessert.toFixed(2)}</Text>
        </View>
        <Text style={styles.overallStat}>Overall Average: ${stats.overall.toFixed(2)}</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.manageButton]} onPress={onNavigateToManage}>
          <Text style={styles.buttonText}>Manage Menu</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.guestButton]} onPress={onNavigateToGuest}>
          <Text style={styles.buttonText}>Guest View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: '#212529' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#6c757d' },
  statsContainer: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 10, 
    marginBottom: 30, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 2 
  },
  statsTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#495057' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  stat: { fontSize: 14, color: '#6c757d' },
  overallStat: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#28a745', marginTop: 10 },
  buttonContainer: { marginTop: 20 },
  button: { padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 15 },
  manageButton: { backgroundColor: '#007bff' },
  guestButton: { backgroundColor: '#28a745' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});