import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Character } from '../../api/models';

const ViewCharacter = ({ route }: any) => {
  const { character }: { character: Character } = route.params;

  return (
    <ImageBackground
      source={{ uri: 'https://happyfm.es/wp-content/uploads/2018/10/harry-potter-estas-son-las-escenas-favoritas-de-los-directores-de-las-8-peliculas-06.gif' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{character.name}</Text>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{character.description}</Text>
        <Text style={styles.label}>Cost:</Text>
        <Text style={styles.value}>{character.cost}</Text>
        <Text style={styles.label}>Role:</Text>
        <Text style={styles.value}>{character.rol}</Text>
        <Text style={styles.label}>Scene ID:</Text>
        <Text style={styles.value}>{character.sceneId}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    margin: 20,
  },
  label: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ViewCharacter;
