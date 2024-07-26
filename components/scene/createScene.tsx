import React, { useState } from 'react';
import { TextInput, Button, View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import { Scene } from '../../api/models';
import apiClient from '../../api/apiClient';

const CreateScene = ({ route, navigation }: any) => {
  const { film_Id } = route.params;
  const [scene, setScene] = useState<Scene>({
    id: 0,
    description: '',
    minutes: 0,
    location: '',
    dateShot: '',
    actorsInvolved:'',
    filmId:film_Id,
  });

  const handleInputChange = (field: keyof Scene, value: any) => {
    setScene({ ...scene, [field]: value });
  };


  const handleCreate = async () => {
    try {
      await apiClient.post('/scene', scene);
      Alert.alert('Success', 'Character created successfully');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Success', 'Character created successfully');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
        value={scene.description}
        onChangeText={(value) => handleInputChange('description', value)}
        style={styles.input}
        />
         <TextInput
  value={scene.minutes.toString()} // Convierte el número a cadena
  onChangeText={(value) => handleInputChange('minutes', parseInt(value, 10))} // Convierte la cadena a número
  style={styles.input}
  keyboardType="numeric"
/>

         <Text style={styles.label}>Location</Text>
        <TextInput
        value={scene.location}
        onChangeText={(value) => handleInputChange('location', value)}
        style={styles.input}
        />
         <Text style={styles.label}>Date Shot</Text>
        <TextInput
        value={scene.dateShot}
        onChangeText={(value) => handleInputChange('dateShot', value)}
        style={styles.input}
        />
         <Text style={styles.label}>Actors Involved</Text>
        <TextInput
        value={scene.actorsInvolved}
        onChangeText={(value) => handleInputChange('actorsInvolved', value)}
        style={styles.input}
        />
      </View>
      <Button title="Create" onPress={handleCreate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a001a',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ffd700',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 10,
    backgroundColor: '#4d0000',
    color: '#ffffff',
  },
  label: {
    color: '#ffd700',
    fontSize: 16,
    marginBottom: 8,
  },
});

export default CreateScene;
