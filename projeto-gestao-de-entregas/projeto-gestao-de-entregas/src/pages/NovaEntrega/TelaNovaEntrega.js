import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import BotaoSalvar from '../../components/BotaoSalvar';
import TopBar from '../../components/TopBar';
import styles from './NovaEntregaStyles';

export default function NovaEntrega({ navigation }) {
  const [nameClient, setNameClient] = useState('');
  const [nameStore, setNameStore] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleNovaEntrega = async () => {
    console.log('handleNovaEntrega chamado');

    if (!nameClient || !nameStore || !street || !city || !number || !zipCode) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      console.log('Campos obrigatórios não preenchidos');
      return;
    }

    const novaEntrega = {
      nameClient,
      nameStore,
      address: {
        street,
        city,
        number,
        complement,
        zipCode,
      },
    };

    console.log('Enviando dados para API:', novaEntrega);

    try {
      const response = await fetch('http://localhost:8080/api/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaEntrega),
      });

      console.log('Resposta da API:', response);

      if (response.ok) {
        const data = await response.json();
        console.log('Dados retornados pela API:', data);

        Alert.alert('Sucesso', 'Entrega cadastrada com sucesso!');
        navigation.navigate('DetalhesEntrega', { entrega: data });
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', `Não foi possível cadastrar a entrega: ${errorData.message}`);
        console.error('Erro da API:', errorData);
      }
    } catch (error) {
      console.error('Erro ao cadastrar entrega:', error);
      Alert.alert('Erro', 'Falha na comunicação com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <TopBar />

      <Text style={styles.title}>Cadastrar Nova Entrega</Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome do Cliente"
        value={nameClient}
        onChangeText={setNameClient}
      />

      <TextInput 
        style={styles.input}
        placeholder="Nome da Loja"
        value={nameStore}
        onChangeText={setNameStore}
      />

      <TextInput 
        style={styles.input}
        placeholder="Rua"
        value={street}
        onChangeText={setStreet}
      />

      <TextInput 
        style={styles.input}
        placeholder="Cidade"
        value={city}
        onChangeText={setCity}
      />

      <TextInput 
        style={styles.input}
        placeholder="Número"
        value={number}
        onChangeText={setNumber}
      />

      <TextInput 
        style={styles.input}
        placeholder="Complemento (opcional)"
        value={complement}
        onChangeText={setComplement}
      />

      <TextInput 
        style={styles.input}
        placeholder="CEP"
        value={zipCode}
        onChangeText={setZipCode}
      />

      <View style={styles.buttonContainer}>
        <BotaoSalvar onPress={handleNovaEntrega} />
      </View>
    </View>
  );
}