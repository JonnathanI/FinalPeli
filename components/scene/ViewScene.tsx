import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Scene } from '../../api/models';

const ViewScene = ({ route }: any) => {
  const { scene }: { scene: Scene } = route.params;

  return (
    <ImageBackground 
      source={require('../../assets/Harry1.webp')} // Replace with the path to your background image
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Scene Details</Text>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{scene.description}</Text>
        <Text style={styles.label}>Minutes:</Text>
        <Text style={styles.value}>{scene.minutes}</Text>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{scene.location}</Text>
        <Text style={styles.label}>Date Shot:</Text>
        <Text style={styles.value}>{scene.dateShot}</Text>
        <Text style={styles.label}>Actors Involved:</Text>
        <Text style={styles.value}>{scene.actorsInvolved}</Text>
        <Text style={styles.label}>Film ID:</Text>
        <Text style={styles.value}>{scene.filmId}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Light Grey
    padding: 10,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for readability
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700', // Golden color for Harry Potter theme
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd700', // Golden color for Harry Potter theme
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#ffffff', // White color for readability on dark background
    marginBottom: 8,
  },
});

export default ViewScene;