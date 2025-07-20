import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ExamScreen = () => {
  const actions = [
    { label: 'View Exam Schedule', icon: 'calendar-outline' },
    { label: 'View Results', icon: 'document-text-outline' },
    { label: 'Apply for Re-exam', icon: 'create-outline' },
    { label: 'Download Admit Card', icon: 'cloud-download-outline' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📝 Exam Module</Text>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Icon name={action.icon} size={26} color="#fff" style={styles.icon} />
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ExamScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f7fc',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#4a90e2',
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 4,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
