import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import EntregaCard from '../../components/EntregaCard';
import ScrollBar from '../../components/ScrollBar';
import TopBar from '../../components/TopBar';
import styles from './FeitasStyle';

export default function TelaEntregasFeitas({ navigation }) {
  const [listaEntregasFeitas, setListaEntregasFeitas] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current; 
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      carregarEntregasFeitas();
    }, [])
  );

  const carregarEntregasFeitas = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/delivery/completed');
      if (!response.ok) throw new Error('Erro ao buscar entregas feitas');
      const data = await response.json();
      setListaEntregasFeitas(data);
    } catch (error) {
      console.error('Erro ao carregar entregas feitas:', error);
      Alert.alert('Erro', 'Não foi possível carregar as entregas feitas.');
    }
  };

  const handleDetalhesEntrega = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/delivery/${id}`);
      if (!response.ok) throw new Error('Erro ao buscar detalhes da entrega');
      const entregaDetalhes = await response.json();
      navigation.navigate('DetalhesEntrega', { entrega: entregaDetalhes });
    } catch (error) {
      console.error('Erro ao carregar detalhes da entrega:', error);
      Alert.alert('Erro', 'Não foi possível carregar os detalhes da entrega.');
    }
  };

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        setContainerHeight(height);
      }}
    >

      <TopBar />

      <Text style={styles.title}>Entregas Feitas</Text>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16 }}
          onContentSizeChange={(width, height) => setContentHeight(height)}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          {listaEntregasFeitas.map((entrega) => (
            <EntregaCard
              key={entrega.id}
              entrega={entrega}
              onPress={handleDetalhesEntrega}
            />
          ))}
        </ScrollView>

        <ScrollBar
          scrollY={scrollY}
          contentHeight={contentHeight}
          containerHeight={containerHeight}
        />
      </View>
    </View>
  );
}


