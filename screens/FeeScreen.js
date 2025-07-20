import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FeeScreen = () => {
  const options = [
    { label: 'View Fee Structure', icon: 'file-tray-full-outline' },
    { label: 'Pay Fees', icon: 'card-outline' },
    { label: 'Download Receipt', icon: 'download-outline' },
    { label: 'Transaction History', icon: 'time-outline' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💰 Fee Management</Text>
      {options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Icon name={item.icon} size={24} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FeeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9fafe',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e88e5',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 3,
  },
  icon: {
    marginRight: 15,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
