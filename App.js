import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente !== '' && password.length >= 8) {
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
    if (password.length > 8) {
      Alert.alert('La contraseña no puede tener más de 8 caracteres');
    } else {
      setPassword(password);
    }
  };

  return (
    <View style={styles.container}>
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
          maxLength={8}
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
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    width: '80%',
  },
  TextInput: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});