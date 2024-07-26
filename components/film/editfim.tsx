import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Film } from '../../api/models';
import apiClient from '../../api/apiClient';

const EditScreen = ({ route, navigation }: any) => {
  const [film, setFilm] = useState<Film>(route.params.film);

  const handleSave = async () => {
    try {
      await apiClient.put(`/film/${film.id}`, film);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/Editar.jpeg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={film.title}
            onChangeText={text => setFilm({ ...film, title: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Director"
            value={film.director}
            onChangeText={text => setFilm({ ...film, director: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Capital"
            value={film.capital.toString()}
            keyboardType="numeric"
            onChangeText={text => setFilm({ ...film, capital: parseFloat(text) })}
          />
          <TextInput
            style={styles.input}
            placeholder="Duration"
            value={film.duration.toString()}
            keyboardType="numeric"
            onChangeText={text => setFilm({ ...film, duration: parseFloat(text) })}
          />
          <TextInput
            style={styles.input}
            placeholder="Release Year"
            value={film.releaseYear}
            onChangeText={text => setFilm({ ...film, releaseYear: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Genre"
            value={film.genre}
            onChangeText={text => setFilm({ ...film, genre: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Language"
            value={film.language}
            onChangeText={text => setFilm({ ...film, language: text })}
          />
          <Button title="Save" onPress={handleSave} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    height: '100%',
  },
  form: { // Ajusta esto según sea necesario // Limita el ancho máximo para una mejor legibilidad
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para que los campos de entrada sean legibles
    borderRadius: 10,
    padding: 16,
    width: '100%',
    height: '100%',
  },
  input: { // Aumenta la altura de los campos de entrada
    borderColor: '#8a2be2',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 10,
    color: '#ffffff',
    fontSize: 16, // Aumenta el tamaño de la fuente
    width: '100%',
    height: '100%', // Hace que los campos de entrada ocupen todo el ancho disponible en el formulario
  },
});

export default EditScreen;