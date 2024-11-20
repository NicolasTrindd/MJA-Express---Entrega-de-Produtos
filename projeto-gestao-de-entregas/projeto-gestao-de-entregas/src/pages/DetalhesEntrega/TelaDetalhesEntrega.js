import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaDetalhesEntrega({ route }) {
  const { entrega } = route.params;

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
      <Text>ID: {entrega.id}</Text>
      <Text>Cliente: {entrega.nameClient}</Text>
      <Text>Loja: {entrega.nameStore}</Text>
      <Text>Endereço:</Text>
      <Text>  Rua: {entrega.address.street}</Text>
      <Text>  Cidade: {entrega.address.city}</Text>
      <Text>  Número: {entrega.address.number}</Text>
      <Text>  Complemento: {entrega.address.complement}</Text>
      <Text>  CEP: {entrega.address.zipCode}</Text>
      <Text>Data de Criação: {new Date(entrega.createDateTime).toLocaleString()}</Text>
      <Text>Data de Entrega: {entrega.deliveryDateTime ? new Date(entrega.deliveryDateTime).toLocaleString() : 'Pendente'}</Text>
      <Text>Status: {entrega.status}</Text>
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
