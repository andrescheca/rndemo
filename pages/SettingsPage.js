import React, {useReducer, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUser} from '../actions';
import Layout from '../components/Layout';

// Objeto inicial para almacenar información del formulario
const initialForm = {name: '', lastName: ''};

const Settings = ({navigation}) => {
  // Utilizar un reducer para optimizar código y almacenar información del formulario
  const [data, setData] = useReducer((a, b) => ({...a, ...b}), initialForm);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  // Actualiza la información del formulario
  const updateData = (value, target) => {
    setData({
      [target]: value,
    });
  };
  // Envía el formulario al store
  const sendData = () => {
    // Si el formulario está vacío entonces muestra un mensaje de error
    if (isDataEmpty()) {
      setShowError(true);
    } else {
      // Limpia el formulario
      setData(initialForm);
      // Graba la información con Redux
      dispatch(addUser(data));
      // Oculta el mensaje de error
      setShowError(false);
      // Cambia de página
      navigation.navigate('Inicio');
    }
  };
  // Verifica si el formulario está vacío
  const isDataEmpty = () =>
    data.name.trim() === '' || data.lastName.trim() === '';

  return (
    <Layout title="Formulario">
      <View style={styles.sectionContainer}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Nombre"
          placeholderTextColor="#336699"
          autoCapitalize="none"
          value={data.name}
          onChangeText={e => updateData(e, 'name')}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Apellido"
          placeholderTextColor="#336699"
          autoCapitalize="none"
          value={data.lastName}
          onChangeText={e => updateData(e, 'lastName')}
        />
        <Button title="Grabar" onPress={sendData} />
        {showError && isDataEmpty() && (
          <Text style={styles.error}>Los campos son obligatorios</Text>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    width: '100%',
    borderBottomColor: '#336699',
    borderBottomWidth: 1,
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
  },
  error: {
    color: '#C94941',
    marginTop: 10,
  },
});

export default Settings;
