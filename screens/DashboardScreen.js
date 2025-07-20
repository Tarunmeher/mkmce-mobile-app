import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardScreen = ({ navigation }) => {
  const modules = [
    { name: 'Student', route: 'Student', icon: 'people-outline' },
    { name: 'Fee', route: 'Fee', icon: 'cash-outline' },
    { name: 'Attendance', route: 'Attendance', icon: 'checkmark-done-outline' },
    { name: 'Exam', route: 'Exam', icon: 'reader-outline' },
    { name: 'Library', route: 'Library', icon: 'book-outline' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📊 MKMCE Student App</Text>
      <View style={styles.grid}>
        {modules.map((mod) => (
          <TouchableOpacity
            key={mod.route}
            style={styles.card}
            onPress={() => navigation.navigate(mod.route)}
          >
            <Icon name={mod.icon} size={30} color="#fff" style={styles.icon} />
            <Text style={styles.cardText}>{mod.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f4f7fc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#4a90e2',
    width: '47%',
    paddingVertical: 25,
    marginBottom: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
