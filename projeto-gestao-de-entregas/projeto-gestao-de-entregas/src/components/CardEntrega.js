import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CardEntrega({ entrega, onPressDetalhes, onPressRemover }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Número: {entrega.numero}</Text>
      <Text>Endereço: {entrega.endereco}</Text>
      <Text>Status: {entrega.status}</Text>
      <Text>Descrição: {entrega.descricao}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Ver Detalhes" onPress={onPressDetalhes} />
        <Button title="Remover" color="red" onPress={onPressRemover} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
  },
});