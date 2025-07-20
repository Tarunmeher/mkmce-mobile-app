import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const timetable = {
  Sunday: [
    { time: '', subject: 'Holiday', teacher: '' },
  ],
  Monday: [
    { time: '09:00 AM - 10:00 AM', subject: 'Math', teacher: 'Pintu Sir' },
    { time: '10:15 AM - 11:15 AM', subject: 'Science', teacher: 'Pratima Maam' },
    { time: '11:30 AM - 12:30 PM', subject: 'English', teacher: 'Kangalu Sir' },
  ],
  Tuesday: [
    { time: '09:00 AM - 10:00 AM', subject: 'English', teacher: 'Pricipal Sir' },
    { time: '10:15 AM - 11:15 AM', subject: 'History', teacher: 'Taran Sir' },
    { time: '11:30 AM - 12:30 PM', subject: 'Computer', teacher: 'Manoj Sir' },
  ],
  Wednesday: [
    { time: '09:00 AM - 10:00 AM', subject: 'Math', teacher: 'Anumat Sir' },
    { time: '10:15 AM - 11:15 AM', subject: 'Physics', teacher: 'Bibhuti Sir' },
    { time: '11:30 AM - 12:30 PM', subject: 'Chemistry', teacher: 'Rinki Maam' },
  ],
  Thursday: [
    { time: '09:00 AM - 10:00 AM', subject: 'Biology', teacher: 'Ms. Iyer' },
    { time: '10:15 AM - 11:15 AM', subject: 'History', teacher: 'Mr. Khan' },
    { time: '11:30 AM - 12:30 PM', subject: 'English', teacher: 'Mrs. Rao' },
  ],
  Friday: [
    { time: '09:00 AM - 10:00 AM', subject: 'Math', teacher: 'Mr. Sharma' },
    { time: '10:15 AM - 11:15 AM', subject: 'Geography', teacher: 'Mr. Sinha' },
    { time: '11:30 AM - 12:30 PM', subject: 'Art', teacher: 'Ms. Roy' },
  ],
  Saturday: [
    { time: '09:00 AM - 10:00 AM', subject: 'Sports', teacher: 'Coach Vivek' },
    { time: '10:15 AM - 11:15 AM', subject: 'Computer', teacher: 'Ms. Das' },
    { time: '11:30 AM - 12:30 PM', subject: 'Library', teacher: 'Mr. Nair' },
  ],
};

const getCurrentDay = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
};

const ClassTimetableScreen = () => {
  const currentDay = getCurrentDay();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>📆 Class Timetable</Text>

      {Object.entries(timetable).map(([day, sessions]) => (
        <View
          key={day}
          style={[
            styles.dayCard,
            currentDay === day && styles.currentDayCard,
          ]}
        >
          <Text style={[styles.day, currentDay === day && styles.currentDayText]}>
            {day}
            { currentDay === day ? ' (Today)':''}
          </Text>
          {sessions.map((session, index) => (
            <View key={index} style={styles.sessionRow}>
              {session.subject === 'Holiday' ? (
                <Text style={styles.holidayText}>🎉 Holiday</Text>
              ) : (
                <>
                  <Text style={styles.time}>{session.time}</Text>
                  <View style={styles.subjectBlock}>
                    <Text style={styles.subject}>{session.subject}</Text>
                    <Text style={styles.teacher}>👨‍🏫 {session.teacher}</Text>
                  </View>
                </>
              )}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default ClassTimetableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6fd',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  dayCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  currentDayCard: {
    backgroundColor: '#d0f0ff',
    borderWidth: 1,
    borderColor: '#3498db',
  },
  day: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 6,
  },
  currentDayText: {
    color: '#0077b6',
  },
  sessionRow: {
    marginBottom: 12,
  },
  time: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  subjectBlock: {
    marginLeft: 10,
  },
  subject: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2d3436',
  },
  teacher: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  holidayText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: 8,
  },
});
