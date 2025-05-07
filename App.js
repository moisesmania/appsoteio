import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [quantidade, setQuantidade] = useState('6');
  const [numeros, setNumeros] = useState([]);

  function gerarNumeros() {
    const qtd = Math.min(Math.max(parseInt(quantidade), 6), 20); 
    const nums = new Set();

    while (nums.size < qtd) {
      const n = Math.floor(Math.random() * 60) + 1;
      nums.add(n);
    }

    setNumeros(Array.from(nums).sort((a, b) => a - b));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Quantidade de Dezenas (6 a 20)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <Button title="SORTEAR" onPress={gerarNumeros} />

      <ScrollView contentContainerStyle={styles.numerosContainer}>
        {numeros.map((num, index) => (
          <View key={index} style={styles.bola}>
            <Text style={styles.numero}>{num}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    width: 100,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 12,
  },
  numerosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 16,
  },
  bola: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#fff',
  },
  numero: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
});
