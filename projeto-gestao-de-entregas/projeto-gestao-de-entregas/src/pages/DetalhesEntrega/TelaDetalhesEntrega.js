import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaDetalhesEntrega({ route }) {
  const { entrega } = route.params;  // Acessando a entrega recebida pela navegação

  if (!entrega) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Erro: A entrega não foi passada corretamente.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Entrega</Text>
      <Text>Número: {entrega.numero}</Text>
      <Text>Endereço: {entrega.endereco}</Text>
      <Text>Status: {entrega.status}</Text>
      <Text>Descrição: {entrega.descricao}</Text>
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
