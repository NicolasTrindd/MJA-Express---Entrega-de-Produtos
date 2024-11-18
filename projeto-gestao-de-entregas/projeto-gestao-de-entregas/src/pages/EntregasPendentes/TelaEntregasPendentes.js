import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EntregasPendentes({ route }) {
  const [entregasPendentes, setEntregasPendentes] = useState([]);

  useEffect(() => {
    carregarEntregasPendentes();
  }, []);

  const carregarEntregasPendentes = async () => {
    try {
      const data = await AsyncStorage.getItem('@entregas');
      if (data) {
        const entregas = JSON.parse(data);
        const pendentes = entregas.filter((entrega) => entrega.status === 'Pendente');
        setEntregasPendentes(pendentes);
      }
    } catch (e) {
      console.error('Erro ao carregar entregas pendentes:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entregas Pendentes</Text>
      {entregasPendentes.length > 0 ? (
        <FlatList
          data={entregasPendentes}
          keyExtractor={(item) => item.numero}
          renderItem={({ item }) => (
            <View style={styles.entregaContainer}>
              <Text style={styles.entregaText}>Endereço: {item.endereco}</Text>
              <Text style={styles.entregaText}>Descrição: {item.descricao}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noEntregasText}>Nenhuma entrega pendente.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF3E2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B3D',
    marginBottom: 20,
    textAlign: 'center',
  },
  entregaContainer: {
    backgroundColor: '#FFE0CC',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#FF6B3D',
  },
  entregaText: {
    fontSize: 16,
    color: '#333',
  },
  noEntregasText: {
    fontSize: 18,
    color: '#FF6B3D',
    textAlign: 'center',
    marginTop: 20,
  },
});