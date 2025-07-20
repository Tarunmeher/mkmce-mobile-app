import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AttendanceScreen = () => {
  const actions = [
    { label: 'Daily Attendance', icon: 'calendar-outline' },
    { label: 'Monthly Summary', icon: 'bar-chart-outline' },
    { label: 'Mark Attendance', icon: 'checkmark-circle-outline' },
    { label: 'Leave Requests', icon: 'mail-open-outline' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📅 Attendance Module</Text>
      {actions.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Icon name={item.icon} size={24} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e9f4ff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e3c62',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#00796b',
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
