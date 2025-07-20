import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StudentScreen = ({ navigation }) => {
  const studentOptions = [
    { label: 'View Profile', icon: 'person-circle-outline', route:'ViewProfile' },
    { label: 'Academic Details', icon: 'school-outline', route:'AcademicDetails' },
    { label: 'Class Timetable', icon: 'calendar-outline', route:'ClassTimetable' },
    { label: 'Parents Info', icon: 'people-circle-outline', route:'ParentsInfo' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎓 Student Module</Text>
      {studentOptions.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate(item.route)}>
          <Icon name={item.icon} size={24} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StudentScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff8f0',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a148c',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#6a1b9a',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
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
