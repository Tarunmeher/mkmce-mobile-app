import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AcademicDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Academic Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Class</Text>
        <Text style={styles.value}>10th Grade</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Section</Text>
        <Text style={styles.value}>A</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Roll Number</Text>
        <Text style={styles.value}>27</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Academic Year</Text>
        <Text style={styles.value}>2024–2025</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Subjects</Text>
        <Text style={styles.value}>English, Hindi, Mathematics, Science, Social Science, Computer</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Overall Grade</Text>
        <Text style={styles.value}>A+</Text>
      </View>
    </View>
  );
};

export default AcademicDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    color: '#555',
  },
});
