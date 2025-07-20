import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ParentsInfoScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>👪 Parents Info</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Father's Name:</Text>
          <Text style={styles.value}>Mr. Manmath Meher</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Mother's Name:</Text>
          <Text style={styles.value}>Mrs. Nikita Meher</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Contact Number:</Text>
          <Text style={styles.value}>+91-9178056917</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>manmathmeher@example.com</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>
            Baladhiamal, Gopinathpur, Kalahandi, Odisha - 751002
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ParentsInfoScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  value: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
