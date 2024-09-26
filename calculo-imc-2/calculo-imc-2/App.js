import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';



export default function App() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    // Converte os valores de peso e altura para números
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if(pesoNum === '' && nome === '' && alturaNum === ''){
      setResultado('ERRO!! Preencha os campos !!!');
    }

    if(pesoNum <= 16.9){
        const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Olá ${nome}, voce esta muito abaixo do peso ${imc.toFixed(2)}`);
    }else if(pesoNum > 17 <= 24.9){
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Olá ${nome}, voce esta abaixo do peso ${imc.toFixed(2)}`);
    } else if( pesoNum> 18.5 <= 24.9){
       const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Olá ${nome}, voce esta abaixo do peso ${imc.toFixed(2)}`);
    }else if( pesoNum> 25 <= 29.9){
       const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Olá ${nome}, voce esta acima do peso${imc.toFixed(2)}`);
    }else if( pesoNum >30 <= 34.9 ){
       const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Olá ${nome}, voce esta na fase de obesidade nivel 1 ${imc.toFixed(2)}`);
    }else if( pesoNum> 18.5 <= 24.9){
       const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(`Olá ${nome}, voce esta abaixo do peso ${imc.toFixed(2)}`);
    }
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Calcular IMC</Text>
      <TextInput
        style={styles.form}
        placeholder='Nome'
        textContentType='name'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.form}
        placeholder='Peso {KG}'
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.form}
        placeholder='Altura {M}'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
      />
      <TouchableOpacity onPress={calcularIMC}>
        <Text style={styles.btn}>Calcular IMC</Text>
      </TouchableOpacity>
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },

  form: {
    height: 40,
    width: 280,
    borderWidth: 2,
    borderColor: 'red',
    margin: 10,
    padding: 10,
    fontSize: 25,
  },

  btn: {
    height: 40,
    width: 220,
    fontSize: 15,
    backgroundColor: 'red',
    color: 'white',
    marginTop: 25,
    alignItems: 'center',
    textAlign: 'center',
    padding: 8,
    borderRadius: 20,
  },

  titulo: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20,
  },

  resultado: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});
