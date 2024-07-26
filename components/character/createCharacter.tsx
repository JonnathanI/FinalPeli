import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Character } from '../../api/models';
import apiClient from '../../api/apiClient';

const CreateCharacter = ({ route, navigation }: any) => {
  const { scene_id, onCreate } = route.params;
  const [character, setCharacter] = useState<Character>({
    id: 0,
    description: '',
    cost: 0,
    name: '',
    rol: '',
    sceneId: scene_id
  });

  const handleInputChange = (field: keyof Character, value: any) => {
    setCharacter({ ...character, [field]: value });
  };

  const handleSave = async () => {
    try {
      const response = await apiClient.post('/characters', character);
      Alert.alert('Success', 'Character created successfully');
      onCreate(response.data);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create character');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://miro.medium.com/v2/resize:fit:1200/1*iT0zrwDvu4Ygd3p_qeDH7g.gif' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={character.name}
          onChangeText={(value) => handleInputChange('name', value)}
          style={styles.input}
        />
        <Text style={styles.label}>Description:</Text>
        <TextInput
          value={character.description}
          onChangeText={(value) => handleInputChange('description', value)}
          style={styles.input}
        />
        <Text style={styles.label}>Cost:</Text>
        <TextInput
          value={character.cost.toString()}
          onChangeText={(value) => handleInputChange('cost', Number(value))}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.label}>Role:</Text>
        <TextInput
          value={character.rol}
          onChangeText={(value) => handleInputChange('rol', value)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <FontAwesome name="save" size={24} color="white" />
          <Text style={styles.buttonText}>Save Character</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    margin: 20,
    borderRadius: 10,
  },
  label: {
    color: '#ffd700',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffd700',
    borderRadius: 4,
    padding: 8,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: '#ffd700',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffd700',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CreateCharacter;