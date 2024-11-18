import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaHome({ navigation }) {  // Usando 'navigation' aqui também
  const [bemVindo, setBemVindo] = useState('Bem Vindo ao MJA - Gestão de Entregas');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bemVindo}</Text>

      <View style={styles.buttonContainer}>
        <Button 
          title="Lista Completa de Entregas"
          onPress={() => navigation.navigate('ListaEntregas')}  // Usando 'navigation.navigate'
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Entregas Feitas"
          onPress={() => navigation.navigate('EntregasFeitas')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Entregas Pendentes"
          onPress={() => navigation.navigate('EntregasPendentes')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Nova Entrega"
          onPress={() => navigation.navigate('CadastroEntrega')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sair"
          onPress={() => navigation.navigate('Login')}  // Navegar de volta para a tela de Login
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFAF0',  // Fundo suave laranja claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00',  // Laranja intenso para o título
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
