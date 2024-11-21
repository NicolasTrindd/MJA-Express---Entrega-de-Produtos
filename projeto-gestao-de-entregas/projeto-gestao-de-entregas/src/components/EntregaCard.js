import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const EntregaCard = ({ entrega, onPress }) => {
  const [date, time] = entrega.createDateTime.split('T');

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(entrega.id)}>
      <Text style={styles.text}>Cliente: {entrega.nameClient}</Text>
      <Text style={styles.text}>Data: {date}</Text>
      <Text style={styles.text}>Hora: {time.split('.')[0]}</Text>
      <Text style={styles.text}>Status: {entrega.status}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#001',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: '#ffff',
    marginBottom: 5,
    textAlign: 'center'
  },
});

export default EntregaCard;