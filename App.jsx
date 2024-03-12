import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

export default function App() {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const usuarios = [
    { expediente: '275890', password: 'UnSpartanNoMuere' }, 
    { expediente: '275880', password: 'NobleSeis' },
  ];

  const handleSubmit = () => {
    const usuarioEncontrado = usuarios.find(user => user.expediente === expediente && user.password === password);

    if (usuarioEncontrado) {
      Alert.alert('Usuario autenticado');
    } else {
      Alert.alert('Usuario no autenticado');
    }
  };

  const handleExpedienteChange = (expediente) => {
    if (expediente.length > 6) {
      Alert.alert('El expediente no puede tener más de 6 caracteres');
    } else {
      setExpediente(expediente);
    }
  };

  const handlePasswordChange = (password) => {
    if (password.length > 16) {
      Alert.alert('La contraseña no puede tener más de 16 caracteres');
    } else {
      setPassword(password);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/dragon.png')}
      />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Expediente"
          maxLength={6}
          keyboardType="numeric"
          onChangeText={handleExpedienteChange}
          value={expediente}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          maxLength={16}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Iniciar sesión" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5FCFF',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
 },
 logo: {
  width: '100%',
  height: 250,
  marginBottom: 20,
},
 title: {
  fontSize: 40,
  fontWeight: 'bold',
  marginBottom: 30,
  color: '#263238',
 },
 inputContainer: {
  width: '80%',
 },
 TextInput: {
  marginBottom: 15,
  backgroundColor: '#E8F8F5',
  padding: 10,
  borderRadius: 5,
  borderColor: '#40B9A5',
  borderWidth: 1,
  fontSize: 16,
 },
 button: {
  backgroundColor: '#98F5E1',
  padding: 15,
  borderRadius: 5,
  color: '#263238',
  fontSize: 18,
  fontWeight: 'bold',
 },
  buttonContainer: {
    alignItems: 'center',
  },
});
