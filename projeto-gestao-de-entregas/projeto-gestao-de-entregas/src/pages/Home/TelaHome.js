import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TopBar from '../../components/TopBar';
import styles from './HomeStyle';

export default function TelaHome({ navigation }) {
  const [bemVindo, setBemVindo] = useState('Gestão de Entregas');

  return (
    <View style={styles.container}>
      <TopBar />

      <Text style={styles.title}>{bemVindo}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ListaEntregas')}
      >
        <Text style={styles.buttonText}>Lista Completa de Entregas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EntregasFeitas')}
      >
        <Text style={styles.buttonText}>Entregas Feitas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EntregasPendentes')}
      >
        <Text style={styles.buttonText}>Entregas Pendentes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroEntrega')}
      >
        <Text style={styles.buttonText}>Nova Entrega</Text>
      </TouchableOpacity>
    </View>
  );
}