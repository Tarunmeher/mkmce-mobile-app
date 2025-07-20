import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen'; // Will create this next
import StudentScreen from './screens/StudentScreen';
import FeeScreen from './screens/FeeScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import ExamScreen from './screens/ExamScreen';
import LibraryScreen from './screens/LibraryScreen';

import ViewProfileScreen from './screens/StudentScreens/ViewProfileScreen';
import AcademicDetailsScreen from './screens/StudentScreens/AcademicDetailsScreen';
import ClassTimetableScreen from './screens/StudentScreens/ClassTimetableScreen';
import ParentsInfoScreen from './screens/StudentScreens/ParentsInfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="Fee" component={FeeScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="Exam" component={ExamScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />

        <Stack.Screen name="ViewProfile" component={ViewProfileScreen} />
        <Stack.Screen name="AcademicDetails" component={AcademicDetailsScreen} />
        <Stack.Screen name="ClassTimetable" component={ClassTimetableScreen} />
        <Stack.Screen name="ParentsInfo" component={ParentsInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
