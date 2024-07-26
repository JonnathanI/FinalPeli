// src/components/film/FilmDetail.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Film } from '../../api/models';

interface FilmDetailRouteParams {
  film: Film;
}

const FilmDetail: React.FC = () => {
  const route = useRoute();
  const { film } = route.params as FilmDetailRouteParams;

  return (
    <ImageBackground 
      source={require('../../assets/Harry1.webp')} // Imagen de fondo (asegúrate de que la ruta sea correcta)
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.label}>Director:</Text>
          <Text style={styles.value}>{film.director}</Text>
          <Text style={styles.label}>Capital:</Text>
          <Text style={styles.value}>{film.capital}</Text>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.value}>{film.duration} minutes</Text>
          <Text style={styles.label}>Release Year:</Text>
          <Text style={styles.value}>{film.releaseYear}</Text>
          <Text style={styles.label}>Genre:</Text>
          <Text style={styles.value}>{film.genre}</Text>
          <Text style={styles.label}>Language:</Text>
          <Text style={styles.value}>{film.language}</Text>
          <Text style={styles.label}>Synopsis:</Text>
          <Text style={styles.value}>{film.synopsis}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta la imagen para cubrir todo el contenedor
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
  },
  content: {
    width: '100%',
    maxWidth: 800, // Optional: limit the width for better readability
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to make text readable
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffdb58', // Golden color
    textAlign: 'center',
    fontFamily: 'HarryPotterFont', // Custom Harry Potter font (ensure the font is available and loaded)
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#ffffff', // White color
    fontFamily: 'HarryPotterFont',
  },
  value: {
    fontSize: 18,
    marginBottom: 8,
    color: '#c0c0c0', // Silver color
    fontFamily: 'HarryPotterFont',
  },
});

export default FilmDetail;
