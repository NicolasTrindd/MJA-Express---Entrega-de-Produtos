import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import BotaoVoltar from '../../components/BotaoVoltar';
import CardEntrega from '../../components/CardEntrega';

const COR_PRIMARIA = '#FF6F00';  // Laranja principal
const COR_SECUNDARIA = '#FF9100'; // Laranja mais claro
const COR_TEXTO = '#333333'; // Cor do texto principal
const COR_FUNDO = '#FFF3E0'; // Fundo suave

export default function TelaListaEntregas({ navigation }) {
  const [listaEntregas, setListaEntregas] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      carregarEntregas();
    }, [])
  );

  // Função para carregar as entregas do AsyncStorage
  const carregarEntregas = async () => {
    try {
      const data = await AsyncStorage.getItem('@entregas');
      if (data) {
        setListaEntregas(JSON.parse(data));
      } else {
        setListaEntregas([]);
      }
    } catch (error) {
      console.error('Erro ao carregar as entregas:', error);
    }
  };

  // Função para remover a entrega
  const removerEntrega = async (numeroEntrega) => {
    try {
      // Alerta de confirmação
      Alert.alert(
        'Confirmar Remoção',
        'Tem certeza que deseja remover esta entrega?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Remover',
            onPress: async () => {
              const novasEntregas = listaEntregas.filter(item => item.numero !== numeroEntrega);
              setListaEntregas(novasEntregas);
              await AsyncStorage.setItem('@entregas', JSON.stringify(novasEntregas));
              alert('Entrega removida com sucesso!');
            },
          },
        ]
      );
    } catch (error) {
      console.error('Erro ao remover entrega:', error);
      alert('Erro ao remover a entrega.');
    }
  };

  const handleDetalhesEntrega = (entrega) => {
    navigation.navigate('TelaDetalhesEntrega', { entrega });
  };

  return (
    <View style={styles.container}>
      <BotaoVoltar onPress={() => navigation.goBack()} />

      <Text style={styles.title}>Lista de Entregas</Text>

      <ScrollView style={styles.scrollContainer}>
        <FlatList
          data={listaEntregas}
          keyExtractor={(item) => item.numero}
          renderItem={({ item }) => (
            <CardEntrega
              entrega={item}
              onPressDetalhes={() => handleDetalhesEntrega(item)} // Passando a entrega para a tela de detalhes
              onPressRemover={() => removerEntrega(item.numero)} // Botão de remover
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COR_FUNDO, // Cor de fundo suave
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: COR_PRIMARIA,  // Cor laranja para o título
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
});
