import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar';
import ModalConfirmacao from '../../components/ModalConfirmacao';

export default function TelaDetalhesEntrega({ route, navigation }) {
  const { entrega } = route.params;
  const { width } = useWindowDimensions();

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  if (!entrega) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: A entrega não foi passada corretamente.</Text>
      </View>
    );
  }

  const formatDateTime = (dateTime) => {
    if (!dateTime) return { date: 'Pendente', time: 'Pendente' };
    const date = new Date(dateTime);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  const { date: creationDate, time: creationTime } = formatDateTime(entrega.createDateTime);
  const { date: deliveryDate, time: deliveryTime } = formatDateTime(entrega.deliveryDateTime);

  const atualizarStatus = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/delivery/update-status/${entrega.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        entrega.status = data.status;
        entrega.deliveryDateTime = data.deliveryDateTime;
        setModalVisible(false);
      } else {
        console.error('Erro ao atualizar o status.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    } finally {
      setLoading(false);
    }
  };

  const excluirEntrega = async () => {
    try {
      setDeleting(true);
      const response = await fetch(`http://localhost:8080/api/delivery/delete/${entrega.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigation.goBack();
      } else {
        console.error('Erro ao excluir a entrega.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    } finally {
      setDeleting(false);
      setDeleteModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <Text style={styles.title}>Detalhes da Entrega</Text>

      <View style={styles.row}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.text}>{entrega.id}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cliente:</Text>
        <Text style={styles.text}>{entrega.nameClient}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Loja:</Text>
        <Text style={styles.text}>{entrega.nameStore}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Data de Criação:</Text>
        <Text style={styles.text}>Data: {creationDate}</Text>
        <Text style={styles.text}>Hora: {creationTime}</Text>
      </View>

      <View style={styles.address}>
        <Text style={styles.label}>Endereço:</Text>
        <Text style={styles.text}>Rua: {entrega.address.street}</Text>
        <Text style={styles.text}>Cidade: {entrega.address.city}</Text>
        <Text style={styles.text}>Número: {entrega.address.number}</Text>
        <Text style={styles.text}>Complemento: {entrega.address.complement}</Text>
        <Text style={styles.text}>CEP: {entrega.address.zipCode}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Data de Entrega:</Text>
        <Text style={styles.text}>Data: {deliveryDate}</Text>
        <Text style={styles.text}>Hora: {deliveryTime}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Status Atual:</Text>
        <Text style={[styles.statusText, { color: '#FF8C00' }]}>
          {entrega.status || 'Status não definido'}
        </Text>
      </View>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={[styles.statusText, { color: '#2980b9', marginTop: 10 }]}>Alterar Status</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
        <Text style={[styles.statusText, { color: 'red', marginTop: 20 }]}>Excluir Entrega</Text>
      </TouchableOpacity>

      <ModalConfirmacao
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={atualizarStatus}
        loading={loading}
        title="Alterar Status"
        message="Deseja atualizar o status da entrega?"
        confirmText="Confirmar"
      />

      <ModalConfirmacao
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={excluirEntrega}
        loading={deleting}
        title="Excluir Entrega"
        message="Deseja excluir esta entrega?"
        confirmText="Confirmar Exclusão"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF8C00',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  address: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});