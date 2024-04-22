import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <View style={styles.pfpPlaceholder}></View>
          <Text style={styles.greeting}>Hi *User*</Text>
          <Text style={styles.taskSummary}>0 Tasks are pending</Text>
        </View>
        <View style={styles.deliveriesBox}>
          <Text style={styles.deliveriesTitle}>Upcoming Deliveries</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollViewContent: {
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  pfpPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  taskSummary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  deliveriesBox: {
    width: '100%',
    minHeight: 200,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
