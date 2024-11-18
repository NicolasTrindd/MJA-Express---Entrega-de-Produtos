import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaDetalhesEntrega({ route, navigation }) {
  const { entrega } = route.params; // Recebe a entrega como parâmetro

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Entrega</Text>
      <Text>Número: {entrega.numero}</Text>
      <Text>Endereço: {entrega.endereco}</Text>
      <Text>Status: {entrega.status}</Text>
      <Text>Descrição: {entrega.descricao}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});


