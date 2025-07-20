import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ViewProfileScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>👤 Student Profile</Text>

        {/* Optional: Profile Image Placeholder */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/100',
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Darshit Meher</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Roll No:</Text>
          <Text style={styles.value}>123456</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Class:</Text>
          <Text style={styles.value}>Nursery </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Section:</Text>
          <Text style={styles.value}>A</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>30th May 2022</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>
            Baladhiamal, Gopinathpur, Kalahandi, Odisha - 766023
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewProfileScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
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
