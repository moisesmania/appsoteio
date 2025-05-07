import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [qtdDezenas, setQtdDezenas] = useState('6');
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  function sortearNumeros() {
    let qtd = parseInt(qtdDezenas);

    if (qtd < 6) {
      qtd = 6;
    }

    if (qtd > 20) {
      qtd = 20;
    }

    let numerosGerados = [];
    while (numerosGerados.length < qtd) {
      let numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!numerosGerados.includes(numeroAleatorio)) {
        numerosGerados.push(numeroAleatorio);
      }
    }

    numerosGerados.sort((a, b) => a - b);
    setNumerosSorteados(numerosGerados);
  }

  return (
    <SafeAreaView style={estilos.tela}>
      <Text style={estilos.textoTitulo}>Digite quantos números (de 6 a 20):</Text>
      <TextInput
        style={estilos.caixaTexto}
        keyboardType="numeric"
        value={qtdDezenas}
        onChangeText={setQtdDezenas}
      />
      <Button title="Sortear Números" onPress={sortearNumeros} />

      <ScrollView contentContainerStyle={estilos.areaNumeros}>
        {numerosSorteados.map((numero, i) => (
          <View key={i} style={estilos.bolinha}>
            <Text style={estilos.textoNumero}>{numero}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    padding: 20,
    alignItems: 'center',
  },
  textoTitulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  caixaTexto: {
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  areaNumeros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  bolinha: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#ffffff',
  },
  textoNumero: {
    fontSize: 18,
    color: 'blue',
  },
});
