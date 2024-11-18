import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NovaEntrega({ navigation }) {
  const [endereco, setEndereco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleNovaEntrega = async () => {
    if (!endereco || !descricao) {
      alert('Preencha todos os campos.');
      return;
    }

    const novaEntrega = {
      numero: Date.now().toString(),
      endereco,
      descricao,
      status: 'Pendente',  // Definindo como pendente por padrão
    };

    try {
      // Obter as entregas atuais do AsyncStorage
      const data = await AsyncStorage.getItem('@entregas');
      const listaEntregas = data ? JSON.parse(data) : [];

      // Adicionar nova entrega à lista
      listaEntregas.push(novaEntrega);

      // Salvar novamente no AsyncStorage
      await AsyncStorage.setItem('@entregas', JSON.stringify(listaEntregas));

      Alert.alert('Sucesso', 'Entrega cadastrada com sucesso!');

      // Navegar para a TelaListaEntregas, passando as entregas
      navigation.navigate('TelaListaEntregas', { entregas: listaEntregas });

    } catch (error) {
      console.error('Erro ao salvar nova entrega:', error);
      Alert.alert('Erro', 'Não foi possível salvar a entrega.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Nova Entrega</Text>

      <TextInput 
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Salvar"
          onPress={handleNovaEntrega}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});