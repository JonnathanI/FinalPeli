import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, Alert, ImageBackground, Text } from 'react-native';
import apiClient from '../../api/apiClient';
import { Film } from '../../api/models';

const CreateScreen = ({ navigation }: any) => {
  const [film, setFilm] = useState<Film>({
    id: 0,
    title: '',
    director: '',
    capital: 0,
    duration: 0,
    releaseYear: '',
    genre: '',
    language: '',
    synopsis: ''
  });

  const handleSave = async () => {
    try {
      await apiClient.post('/film', film);
      Alert.alert('Success', 'Film created successfully');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create film');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/Crear.webp')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Create a New Film</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#bdbdbd"
          value={film.title}
          onChangeText={text => setFilm({ ...film, title: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Director"
          placeholderTextColor="#bdbdbd"
          value={film.director}
          onChangeText={text => setFilm({ ...film, director: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Capital"
          placeholderTextColor="#bdbdbd"
          value={film.capital.toString()}
          onChangeText={text => setFilm({ ...film, capital: parseFloat(text) })}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Duration"
          placeholderTextColor="#bdbdbd"
          value={film.duration.toString()}
          onChangeText={text => setFilm({ ...film, duration: parseFloat(text) })}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Release Year"
          placeholderTextColor="#bdbdbd"
          value={film.releaseYear}
          onChangeText={text => setFilm({ ...film, releaseYear: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Genre"
          placeholderTextColor="#bdbdbd"
          value={film.genre}
          onChangeText={text => setFilm({ ...film, genre: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Language"
          placeholderTextColor="#bdbdbd"
          value={film.language}
          onChangeText={text => setFilm({ ...film, language: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Synopsis"
          placeholderTextColor="#bdbdbd"
          value={film.synopsis}
          onChangeText={text => setFilm({ ...film, synopsis: text })}
        />
        <Button title="Save" onPress={handleSave} color="#b22222" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#ffd700', // Texto dorado
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'HarryPotterFont', // Asegúrate de tener una fuente de estilo Harry Potter
  },
  input: {
    height: 40,
    borderColor: '#ffd700', // Bordes dorados
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',// Fondo de los inputs rojo oscuro
    color: '#ffffff', // Texto blanco
  },
});

export default CreateScreen;
