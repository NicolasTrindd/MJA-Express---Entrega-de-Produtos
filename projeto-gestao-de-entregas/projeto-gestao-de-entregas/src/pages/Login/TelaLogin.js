import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // Estado para a mensagem de erro

  const handleLogin = () => {
    if (username === 'Murillo' && password === '1234') {
      navigation.navigate('Home');
    } else {
      setErrorMessage('Nome de usuário ou senha incorretos. Por favor, tente novamente.');  // Atualiza a mensagem de erro
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.empresa}>MJA - Entrega de Produtos e Mercadorias</Text>
      <Text style={styles.title}>Faça seu Login!</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Exibindo a mensagem de erro abaixo dos campos de input */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFAF0',  // Cor de fundo suave
  },
  empresa: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF8C00',  // Laranja intenso para o nome da empresa
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FF7F50',  // Laranja suave para o título
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#FF4500',  // Laranja mais escuro para a borda do input
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FF6347',  // Laranja tomate para o botão
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',  // Texto do botão em branco para contraste
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    color: '#FF0000',  // Cor vermelha para a mensagem de erro
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

