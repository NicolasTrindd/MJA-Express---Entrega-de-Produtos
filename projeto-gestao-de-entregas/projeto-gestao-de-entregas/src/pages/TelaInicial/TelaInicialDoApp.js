import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaInicialDoApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MJA - Entrega de Produtos</Text>

      {/* Ícone de entrada em vez do botão */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.iconContainer}>
        <Ionicons name="log-in-outline" size={48} color="#FF6B3D" />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF6B3D',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

